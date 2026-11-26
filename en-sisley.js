// v9.8 English content for Alfred Sisley’s life journey, Part 1 (1839–1880).
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Musée d’Orsay, Paris": "Musée d’Orsay, Paris",
  "Petit Palais, Paris": "Petit Palais, Paris",
  "Saarlandmuseum, Saarbrücken": "Saarlandmuseum, Saarbrücken",
  "Artizon Museum, Tokio": "Artizon Museum, Tokyo",
  "Sammlung Oskar Reinhart, Winterthur": "Oskar Reinhart Collection, Winterthur",
  "National Museum of Western Art, Tokio": "National Museum of Western Art, Tokyo",
  "Musée des Beaux-Arts, Rouen": "Musée des Beaux-Arts, Rouen",
  "Königliche Museen der Schönen Künste, Brüssel": "Royal Museums of Fine Arts of Belgium, Brussels",
  "Neue Pinakothek, München": "Neue Pinakothek, Munich",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Cologne",
  "Städel Museum, Frankfurt": "Städel Museum, Frankfurt",
  "Nationalgalerie, Prag": "National Gallery, Prague"
});
  EN.works = Object.assign(EN.works || {}, {
  "sychest65": {
    "title": "Avenue of Chestnut Trees at La Celle-Saint-Cloud",
    "museum": "Petit Palais, Paris"
  },
  "sychestord": {
    "title": "Avenue of Chestnut Trees at La Celle-Saint-Cloud",
    "museum": "Museum Ordrupgaard, Charlottenlund"
  },
  "symonetf": {
    "title": "The Painter Monet in the Forest of Fontainebleau",
    "museum": "Saarlandmuseum, Saarbrücken"
  },
  "sychest67": {
    "title": "Avenue of Chestnut Trees near La Celle-Saint-Cloud",
    "museum": "Southampton City Art Gallery"
  },
  "sywoods": {
    "title": "Women Going to the Woods",
    "museum": "Artizon Museum, Tokyo"
  },
  "symarlott": {
    "title": "Village Street in Marlotte",
    "museum": "Buffalo AKG Art Museum"
  },
  "sybarges": {
    "title": "Barges on the Canal Saint-Martin",
    "museum": "Oskar Reinhart Collection, Winterthur"
  },
  "syearlysnow": {
    "title": "Early Snow at Louveciennes",
    "museum": "Museum of Fine Arts, Boston"
  },
  "syvilleneuve": {
    "title": "The Bridge at Villeneuve-la-Garenne",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sylouvsnow": {
    "title": "Louveciennes in the Snow",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "sybougival": {
    "title": "The Seine at Bougival",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "syflood72": {
    "title": "Flood at Port-Marly",
    "museum": "National Gallery of Art, Washington"
  },
  "sycanal72": {
    "title": "The Canal Saint-Martin",
    "museum": "Musée d’Orsay, Paris"
  },
  "systdenis": {
    "title": "The Island of Saint-Denis",
    "museum": "Musée d’Orsay, Paris"
  },
  "sylandlouv": {
    "title": "Landscape at Louveciennes",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "syturnroad": {
    "title": "A Turn in the Road",
    "museum": "Art Institute of Chicago"
  },
  "syspringb": {
    "title": "Spring at Bougival",
    "museum": "Philadelphia Museum of Art"
  },
  "syautumnb": {
    "title": "Autumn: Banks of the Seine near Bougival",
    "museum": "Montreal Museum of Fine Arts"
  },
  "syvillevray": {
    "title": "Street in Ville-d’Avray",
    "museum": "Dallas Museum of Art"
  },
  "syfog": {
    "title": "Fog, Voisins",
    "museum": "Musée d’Orsay, Paris"
  },
  "sysnowphill": {
    "title": "Snow at Louveciennes",
    "museum": "The Phillips Collection, Washington"
  },
  "sychenil": {
    "title": "Place du Chenil at Marly, Snow Effect",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syaqueduct": {
    "title": "The Aqueduct at Marly",
    "museum": "Toledo Museum of Art"
  },
  "sythames": {
    "title": "The Thames at Hampton Court",
    "museum": "Clark Art Institute, Williamstown"
  },
  "symolesey": {
    "title": "Molesey Weir, Hampton Court",
    "museum": "National Galleries of Scotland, Edinburgh"
  },
  "syroadhamp": {
    "title": "The Road to Hampton Court",
    "museum": "Neue Pinakothek, Munich"
  },
  "syregatta": {
    "title": "The Regatta at Molesey",
    "museum": "Musée d’Orsay, Paris"
  },
  "sybrhamp": {
    "title": "Bridge at Hampton Court",
    "museum": "Wallraf-Richartz-Museum, Cologne"
  },
  "syterrace": {
    "title": "The Terrace at Saint-Germain, Spring",
    "museum": "Walters Art Museum, Baltimore"
  },
  "syversailles": {
    "title": "The Road from Versailles to Saint-Germain",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "symeadow": {
    "title": "Meadow",
    "museum": "National Gallery of Art, Washington"
  },
  "syinstitut": {
    "title": "Landscape along the Seine with the Institut de France and the Pont des Arts",
    "museum": "Art Institute of Chicago"
  },
  "sypiles": {
    "title": "The Seine at Port-Marly, Piles of Sand",
    "museum": "Art Institute of Chicago"
  },
  "sywatering": {
    "title": "Watering Place at Marly",
    "museum": "Art Institute of Chicago"
  },
  "syfloodrouen": {
    "title": "The Flood at Port-Marly",
    "museum": "Musée des Beaux-Arts, Rouen"
  },
  "syfloodhou": {
    "title": "The Flood on the Road to Saint-Germain",
    "museum": "Museum of Fine Arts, Houston"
  },
  "symarlyview": {
    "title": "View of Marly-le-Roi from Cœur-Volant",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "sysawyers": {
    "title": "The Pit Sawyers",
    "museum": "Petit Palais, Paris"
  },
  "sybankaut": {
    "title": "Bank of the Seine in Autumn",
    "museum": "Städel Museum, Frankfurt"
  },
  "systreetmarly": {
    "title": "Street in Marly",
    "museum": "Kunsthalle Mannheim"
  },
  "sysevres": {
    "title": "The Bridge at Sèvres",
    "museum": "National Gallery, Prague"
  },
  "sysuresnes": {
    "title": "The Seine at Suresnes",
    "museum": "Musée d’Orsay, Paris"
  },
  "syrest": {
    "title": "Rest along the Stream, Edge of the Wood",
    "museum": "Musée d’Orsay, Paris"
  },
  "syallee": {
    "title": "Allée of Chestnut Trees",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "syfirstsnow": {
    "title": "First Snow at Veneux-Nadon",
    "museum": "National Gallery of Art, Washington"
  },
  "sybanksby": {
    "title": "Banks of the Seine at By",
    "museum": "Clark Art Institute, Williamstown"
  },
  "systmammes": {
    "title": "Road along the Seine at Saint-Mammès",
    "museum": "Dallas Museum of Art"
  },
  "sytimber": {
    "title": "Timber Yard at Saint-Mammès",
    "museum": "Hammer Museum, Los Angeles"
  },
  "syhills": {
    "title": "On the Hills of Moret in Spring, Morning",
    "museum": "Princeton University Art Museum"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.sisley = {
  "title": "The Life of Alfred Sisley",
  "life": "1839–1899",
  "part": "Parts 1–2 · 1839–1899",
  "subtitle": "From Paris to Moret-sur-Loing",
  "intro": "Travel with Alfred Sisley through his whole life: from his birth in Paris in 1839, through Gleyre’s studio, Louveciennes, Marly and the flood of 1876, to the years on the Seine and the Loing near Moret, the church at Moret, the journey to Wales in 1897 and his death in 1899.",
  "ending": [
    "Sisley died at Moret-sur-Loing on 29 January 1899, a few months after Eugénie. He was buried in the cemetery at Moret on 1 February.",
    "At Monet’s suggestion, on 1 May 1899 the Galerie Georges Petit auctioned pictures from his studio together with works given by his friends. The proceeds were for his children Pierre and Jeanne-Adèle."
  ],
  "epilogue": "Alfred Sisley died at Moret-sur-Loing on 29 January 1899, beside the river he had painted for twenty years."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "syparis": {
    "place": "Paris, London and Gleyre",
    "when": "1839–1863",
    "mapLabel": "Paris",
    "intro": [
      "Alfred Sisley was born in Paris on 30 October 1839, the second child of the English cloth merchant William Sisley and of Felicia Sell. In 1857 his father sent him to London to learn commerce; he stayed in England until 1860 and saw a great deal of painting there.",
      "Back in France he decided to become a painter. In 1862 he entered the Paris studio of Charles Gleyre. There he met Claude Monet, Pierre-Auguste Renoir and Frédéric Bazille. In 1863 Gleyre closed the studio."
    ]
  },
  "symarlott": {
    "place": "Fontainebleau and the Salon",
    "when": "1865–1870",
    "mapLabel": "Marlotte",
    "intro": [
      "With his friends Sisley painted in the forest of Fontainebleau, at Chailly and at Marlotte. In 1866 the Salon accepted two of his pictures: a village street in Marlotte and women going to the woods.",
      "From 1866 he lived with Eugénie Lescouezec. Their son Pierre was born on 17 June 1867, their daughter Jeanne-Adèle on 29 January 1869. In 1868 the chestnut avenue at La Celle-Saint-Cloud hung in the Salon, and in 1870 two views of the Canal Saint-Martin."
    ]
  },
  "sywar": {
    "place": "War and a new start",
    "when": "1870–1872",
    "mapLabel": "Bougival",
    "intro": [
      "In the autumn of 1870 Prussian soldiers wrecked Sisley’s house in Bougival. He lost everything he owned there and took refuge in Paris, where he lived through the siege and the Commune. In November 1870 his friend Frédéric Bazille was killed in the war.",
      "After the war his father’s business was ruined. From then on Sisley had little money. In 1872 he painted with Monet at Argenteuil and on the Seine at Villeneuve-la-Garenne. In December 1872 he recorded a flood at Port-Marly."
    ]
  },
  "sylouve": {
    "place": "Louveciennes",
    "when": "1873",
    "mapLabel": "Louveciennes",
    "intro": [
      "In the early 1870s Sisley lived in Louveciennes, west of Paris, and painted the roads, gardens and the banks of the Seine near Bougival in every kind of weather.",
      "On 27 December 1873, with Monet, Renoir, Camille Pissarro, Berthe Morisot and Paul Cézanne, he founded the Société anonyme coopérative des artistes peintres, sculpteurs, graveurs. They wanted to show their pictures themselves, without the Salon."
    ]
  },
  "syimpres": {
    "place": "The first Impressionist exhibition",
    "when": "1874",
    "mapLabel": "Nadar",
    "intro": [
      "On 15 April 1874 the society’s first exhibition opened in Nadar’s studio on the boulevard des Capucines. Sisley showed five landscapes. Sales were weak, but his name now stood with the new painters.",
      "He went on painting in Louveciennes and in nearby Marly: fog at Voisins, snow in the streets, the aqueduct at Marly."
    ]
  },
  "sylondon": {
    "place": "On the Thames",
    "when": "1874",
    "mapLabel": "London",
    "intro": [
      "From July to October 1874, thanks to the singer and collector Jean-Baptiste Faure, Sisley stayed in England. In London and especially west of the city, at Hampton Court and East Molesey, he painted the Thames, bridges, the weir and a regatta.",
      "It was his first painting trip to England since he had been sent there as a young man to learn commerce. In the winter the family moved to Marly-le-Roi."
    ]
  },
  "symarly": {
    "place": "Marly-le-Roi and Saint-Germain",
    "when": "1875–1876",
    "mapLabel": "Marly",
    "intro": [
      "From Marly-le-Roi Sisley painted the terrace and the road to Saint-Germain, meadows, the watering place and the Seine with piles of sand at Port-Marly.",
      "The pictures are bright and spacious. Sisley stayed with landscape, while friends such as Monet and Renoir also looked for other subjects."
    ]
  },
  "syfloods": {
    "place": "The flood of 1876",
    "when": "1876",
    "mapLabel": "Port-Marly",
    "intro": [
      "In March 1876 the Seine overflowed its banks again, more strongly than in 1872. Sisley painted the flooded streets of Port-Marly, houses in the water and the road to Saint-Germain.",
      "The flood pictures are among his best-known works: calm, exact and without drama. Alongside them he also painted everyday views of Marly, a street, pit sawyers, a river bank in autumn."
    ]
  },
  "syloing": {
    "place": "Sèvres and the way to the Loing",
    "when": "1877–1880",
    "mapLabel": "Veneux-Nadon",
    "intro": [
      "Early in 1877 Sisley moved to Sèvres. In April he showed seventeen landscapes at the third Impressionist exhibition. He painted the bridge at Sèvres and the Seine at Suresnes.",
      "In the autumn of 1879 he visited Moret-sur-Loing, on the edge of the forest of Fontainebleau. Early in 1880 he settled with his family at Veneux-Nadon, near Saint-Mammès and Moret. A new, long chapter begins there."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "sychest65": {
    "text": [
      "A long avenue of chestnuts leads into the distance, with light falling between the trunks onto the path.",
      "It is one of Sisley’s earliest surviving pictures.",
      "The picture is in the Petit Palais, Paris."
    ],
    "fact": "1865. Petit Palais, Paris."
  },
  "sychestord": {
    "text": [
      "The same countryside, another view: the trees stand closer and the path grows narrower.",
      "Sisley painted the avenue more than once.",
      "The picture is in the Museum Ordrupgaard, Charlottenlund."
    ],
    "fact": "1865. Museum Ordrupgaard, Charlottenlund."
  },
  "symonetf": {
    "text": [
      "Among the trees a painter sits at his easel.",
      "It is Claude Monet, Sisley’s friend from Gleyre’s studio.",
      "The picture is in the Saarlandmuseum, Saarbrücken."
    ],
    "fact": "c. 1865. Saarlandmuseum, Saarbrücken."
  },
  "sychest67": {
    "text": [
      "Under a high summer sky the avenue lies in warm light.",
      "This picture hung in the Salon of 1868.",
      "It is in the Southampton City Art Gallery."
    ],
    "fact": "1867. Southampton City Art Gallery."
  },
  "sywoods": {
    "text": [
      "Two women in wide dresses walk along a field path, with the woods ahead.",
      "The picture was shown at the Salon of 1866.",
      "It is in the Artizon Museum, Tokyo."
    ],
    "fact": "1866. Artizon Museum, Tokyo."
  },
  "symarlott": {
    "text": [
      "In the village street of Marlotte, houses and a fence stand under a wide sky.",
      "The Salon of 1866 accepted this picture too.",
      "It is in the Buffalo AKG Art Museum."
    ],
    "fact": "1866. Buffalo AKG Art Museum."
  },
  "sybarges": {
    "text": [
      "Barges lie on the Canal Saint-Martin in Paris, with trees reflected in the water.",
      "In 1870 Sisley showed two canal pictures at the Salon.",
      "This picture is in the Oskar Reinhart Collection, Winterthur."
    ],
    "fact": "1870. Oskar Reinhart Collection, Winterthur."
  },
  "syearlysnow": {
    "text": [
      "A light snow lies on gardens and roofs, and the sky is pale.",
      "Sisley was already painting Louveciennes before the war.",
      "The picture is in the Museum of Fine Arts, Boston."
    ],
    "fact": "1870. Museum of Fine Arts, Boston."
  },
  "syvilleneuve": {
    "text": [
      "A new iron bridge spans the Seine, with sailing boats passing beneath it.",
      "Sisley painted the river at Villeneuve-la-Garenne in 1872.",
      "The picture is in the Metropolitan Museum of Art, New York."
    ],
    "fact": "1872. Metropolitan Museum of Art, New York."
  },
  "sylouvsnow": {
    "text": [
      "A snow-covered road leads past gardens and houses, and the snow glows blue and white.",
      "The picture is in the Norton Simon Museum, Pasadena."
    ],
    "fact": "1872. Norton Simon Museum, Pasadena."
  },
  "sybougival": {
    "text": [
      "The river bends under a bright sky, with trees and a path along the bank.",
      "Sisley knew Bougival well, even after the loss of his house.",
      "The picture is in the Yale University Art Gallery, New Haven."
    ],
    "fact": "1872. Yale University Art Gallery, New Haven."
  },
  "syflood72": {
    "text": [
      "The street in front of a wine shop is under water, and a small boat passes by.",
      "Sisley dated the picture 1872.",
      "It is in the National Gallery of Art, Washington."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "sycanal72": {
    "text": [
      "The canal lies still between trees and houses, with a barge at the bank.",
      "After the war Sisley returned to the canal he had shown at the Salon in 1870.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1872. Musée d’Orsay, Paris."
  },
  "systdenis": {
    "text": [
      "A low island lies in the Seine, with factory chimneys on the horizon.",
      "Sisley shows the landscape near Paris without ornament.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1872. Musée d’Orsay, Paris."
  },
  "sylandlouv": {
    "text": [
      "A path leads through fields and trees, and the sky is wide and bright.",
      "Sisley painted the country around Louveciennes in quiet colours.",
      "The picture is in the National Museum of Western Art, Tokyo."
    ],
    "fact": "1873. National Museum of Western Art, Tokyo."
  },
  "syturnroad": {
    "text": [
      "The road bends away behind trees, and a few figures walk along it.",
      "Sisley captures everyday Louveciennes.",
      "The picture is in the Art Institute of Chicago."
    ],
    "fact": "1873. Art Institute of Chicago."
  },
  "syspringb": {
    "text": [
      "Fresh green stands along the river, and the light is clear.",
      "Sisley painted spring on the Seine at Bougival.",
      "The picture is in the Philadelphia Museum of Art."
    ],
    "fact": "1873. Philadelphia Museum of Art."
  },
  "syautumnb": {
    "text": [
      "The foliage is yellow and brown, and the river lies still under a soft sky.",
      "The picture is in the Montreal Museum of Fine Arts."
    ],
    "fact": "1873. Montreal Museum of Fine Arts."
  },
  "syvillevray": {
    "text": [
      "A narrow street climbs between houses, their walls bright in the sunlight.",
      "Ville-d’Avray lies near Sèvres, west of Paris.",
      "The picture is in the Dallas Museum of Art."
    ],
    "fact": "1873. Dallas Museum of Art."
  },
  "syfog": {
    "text": [
      "Bare trees and a fence stand in the fog, and a woman walks along the path.",
      "Voisins is a hamlet of Louveciennes.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1874. Musée d’Orsay, Paris."
  },
  "sysnowphill": {
    "text": [
      "Beyond a grated gate lies a snow-covered garden, and the houses are still.",
      "Sisley painted the snow in clear, cool tones.",
      "The picture is in the Phillips Collection, Washington."
    ],
    "fact": "1874. The Phillips Collection, Washington."
  },
  "sychenil": {
    "text": [
      "The little square at Marly lies under snow, with the houses set firmly around it.",
      "Sisley painted the place the family moved to in the winter of 1874.",
      "The picture is in the Musée des Beaux-Arts, Rouen."
    ],
    "fact": "1874. Musée des Beaux-Arts, Rouen."
  },
  "syaqueduct": {
    "text": [
      "The great aqueduct of Marly stretches across the landscape, with the village below.",
      "The structure dates from the time of King Louis XIV. The picture is in the Toledo Museum of Art."
    ],
    "fact": "1874. Toledo Museum of Art."
  },
  "sythames": {
    "text": [
      "The Thames lies wide under a moving sky, with trees along the bank.",
      "Sisley painted the English river in the summer of 1874.",
      "The picture is in the Clark Art Institute, Williamstown."
    ],
    "fact": "1874. Clark Art Institute, Williamstown."
  },
  "symolesey": {
    "text": [
      "Water pours over the weir, and people stand on the walkway.",
      "Sisley captures the light on the moving water.",
      "The picture is in the National Galleries of Scotland, Edinburgh."
    ],
    "fact": "1874. National Galleries of Scotland, Edinburgh."
  },
  "syroadhamp": {
    "text": [
      "A road leads towards the trees and the palace grounds, and the sky is bright.",
      "Sisley painted the country around Hampton Court.",
      "The picture is in the Neue Pinakothek, Munich."
    ],
    "fact": "1874. Neue Pinakothek, Munich."
  },
  "syregatta": {
    "text": [
      "Boats move across the Thames, and spectators stand under trees on the bank.",
      "Sisley painted the festival on the water.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1874. Musée d’Orsay, Paris."
  },
  "sybrhamp": {
    "text": [
      "The bridge spans the Thames in several arches, with boats at the bank.",
      "Sisley chose a deep view across the water.",
      "The picture is in the Wallraf-Richartz-Museum, Cologne."
    ],
    "fact": "1874. Wallraf-Richartz-Museum, Cologne."
  },
  "syterrace": {
    "text": [
      "From the height one looks out over the loop of the Seine and the wide plain, with spring light on the land.",
      "It is one of Sisley’s largest landscapes.",
      "The picture is in the Walters Art Museum, Baltimore."
    ],
    "fact": "1875. Walters Art Museum, Baltimore."
  },
  "syversailles": {
    "text": [
      "A straight road runs through fields and trees, and the sky takes up most of the picture.",
      "Sisley painted the road near Marly.",
      "The picture is in the J. Paul Getty Museum, Los Angeles."
    ],
    "fact": "1875. J. Paul Getty Museum, Los Angeles."
  },
  "symeadow": {
    "text": [
      "A green meadow lies under a light sky, with trees edging the field.",
      "Sisley records the quiet expanse, with no story.",
      "The picture is in the National Gallery of Art, Washington."
    ],
    "fact": "1875. National Gallery of Art, Washington."
  },
  "syinstitut": {
    "text": [
      "In the haze one sees the Institut de France and the Pont des Arts, with the river in the foreground.",
      "Here Sisley painted a view of Paris.",
      "The picture is in the Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sypiles": {
    "text": [
      "High piles of sand lie on the bank, and a barge works on the river.",
      "Sisley shows the work on the river, not only a pretty view.",
      "The picture is in the Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "sywatering": {
    "text": [
      "A shallow watering place lies in front of houses and trees, and the sky is pale.",
      "The abreuvoir at Marly was a well-known spot at the edge of the park.",
      "The picture is in the Art Institute of Chicago."
    ],
    "fact": "1875. Art Institute of Chicago."
  },
  "syfloodrouen": {
    "text": [
      "The floodwater reaches the houses, and a boat moves through the street.",
      "Sisley painted the great flood of March 1876 calmly and clearly.",
      "The picture is in the Musée des Beaux-Arts, Rouen."
    ],
    "fact": "1876. Musée des Beaux-Arts, Rouen."
  },
  "syfloodhou": {
    "text": [
      "The road to Saint-Germain is flooded, and trees stand in the water.",
      "Sisley chose a wide view of the high water.",
      "The picture is in the Museum of Fine Arts, Houston."
    ],
    "fact": "1876. Museum of Fine Arts, Houston."
  },
  "symarlyview": {
    "text": [
      "From a hillside one looks down on Marly-le-Roi, with the houses among the trees.",
      "The picture is in the Metropolitan Museum of Art, New York."
    ],
    "fact": "1876. Metropolitan Museum of Art, New York."
  },
  "sysawyers": {
    "text": [
      "Two men saw a log in a pit, with the village behind them.",
      "Sisley records an everyday labour.",
      "The picture is in the Petit Palais, Paris."
    ],
    "fact": "1876. Petit Palais, Paris."
  },
  "sybankaut": {
    "text": [
      "The bank glows in autumn colours, and the river lies still beside it.",
      "The picture is in the Städel Museum, Frankfurt."
    ],
    "fact": "1876. Städel Museum, Frankfurt."
  },
  "systreetmarly": {
    "text": [
      "A street climbs between walls and trees, and a figure walks ahead.",
      "Sisley painted Marly without a festival and without a flood.",
      "The picture is in the Kunsthalle Mannheim."
    ],
    "fact": "1876. Kunsthalle Mannheim."
  },
  "sysevres": {
    "text": [
      "The bridge at Sèvres lies across the Seine, and the sky is wide and bright.",
      "From 1877 Sisley lived in Sèvres and painted the river again and again.",
      "The picture is in the National Gallery, Prague."
    ],
    "fact": "1877. National Gallery, Prague."
  },
  "sysuresnes": {
    "text": [
      "The river lies under a high sky, with trees and houses on the bank.",
      "Suresnes lies opposite the bridge at Sèvres.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1877. Musée d’Orsay, Paris."
  },
  "syrest": {
    "text": [
      "At the edge of a wood a figure rests by a stream, with light falling through the leaves.",
      "Here Sisley joins woodland and water.",
      "The picture is in the Musée d’Orsay, Paris."
    ],
    "fact": "1878. Musée d’Orsay, Paris."
  },
  "syallee": {
    "text": [
      "A light avenue of chestnuts leads into a bright sky.",
      "Years after the early avenues at La Celle-Saint-Cloud, Sisley returned to this motif.",
      "The picture is in the Metropolitan Museum of Art, New York."
    ],
    "fact": "1878. Metropolitan Museum of Art, New York."
  },
  "syfirstsnow": {
    "text": [
      "A light snow lies on the village, and the sky is grey-pink.",
      "Veneux-Nadon, near Moret-sur-Loing, would become Sisley’s home in 1880.",
      "The picture is in the National Gallery of Art, Washington."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "sybanksby": {
    "text": [
      "The bank at By is green, and the river bends quietly through the picture.",
      "By lies near Veneux-Nadon, where Sisley moved in 1880.",
      "The picture is in the Clark Art Institute, Williamstown."
    ],
    "fact": "1880. Clark Art Institute, Williamstown."
  },
  "systmammes": {
    "text": [
      "A road runs along the river, trees stand in the light, and the sky is high.",
      "Saint-Mammès lies where the Loing meets the Seine.",
      "The picture is in the Dallas Museum of Art."
    ],
    "fact": "1880. Dallas Museum of Art."
  },
  "sytimber": {
    "text": [
      "Logs and beams lie by the river, and barges wait for their loads.",
      "Sisley painted the workplace, not only the landscape.",
      "The picture is in the Hammer Museum, Los Angeles."
    ],
    "fact": "1880. Hammer Museum, Los Angeles."
  },
  "syhills": {
    "text": [
      "From a rise one looks across fields towards Moret-sur-Loing in the morning light.",
      "Here, on the edge of the forest of Fontainebleau, Sisley would stay in the years to come.",
      "The picture is in the Princeton University Art Museum."
    ],
    "fact": "1880. Princeton University Art Museum."
  }
});
})();
