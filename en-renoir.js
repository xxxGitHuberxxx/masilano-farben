// v9.0 English content for Pierre-Auguste Renoir’s life journey, Part 1 (1841–1881).
// Extends window.EN; does not rewrite earlier path files.
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Privatbesitz": "Private collection",
  "Wallraf-Richartz-Museum, Köln": "Wallraf-Richartz-Museum, Cologne"
});
  EN.works = Object.assign(EN.works || {}, {
  "rnmother": {
    "title": "Portrait of the Artist’s Mother",
    "museum": "Private collection"
  },
  "rnfather": {
    "title": "Léonard Renoir, the Artist’s Father",
    "museum": "Saint Louis Art Museum"
  },
  "rnspringbouq": {
    "title": "Spring Bouquet",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "rnvase66": {
    "title": "Flowers in a Vase",
    "museum": "National Gallery of Art, Washington"
  },
  "rnflowersham": {
    "title": "Flowers in a Greenhouse",
    "museum": "Hamburger Kunsthalle"
  },
  "rnromaine": {
    "title": "Romaine Lacaux",
    "museum": "Cleveland Museum of Art"
  },
  "rnsicot": {
    "title": "Mademoiselle Sicot",
    "museum": "National Gallery of Art, Washington"
  },
  "rnwillsis": {
    "title": "William Sisley",
    "museum": "Musée d’Orsay, Paris"
  },
  "rnfence": {
    "title": "Woman by a Fence",
    "museum": "National Gallery of Art, Washington"
  },
  "rntree": {
    "title": "Woman Standing by a Tree",
    "museum": "National Gallery of Art, Washington"
  },
  "rnbazheron": {
    "title": "Frédéric Bazille Painting the Heron",
    "museum": "Musée Fabre, Montpellier"
  },
  "rnlisehat": {
    "title": "Lise in a Straw Hat",
    "museum": "Barnes Foundation, Philadelphia"
  },
  "rnsisleyfam": {
    "title": "The Sisley Family",
    "museum": "Wallraf-Richartz-Museum, Cologne"
  },
  "rnlisesew": {
    "title": "Lise Sewing",
    "museum": "Dallas Museum of Art"
  },
  "rnete": {
    "title": "In Summer (La Bohémienne)",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "rnjules": {
    "title": "The Painter Jules Le Cœur in Fontainebleau Forest",
    "museum": "Museu de Arte de São Paulo"
  },
  "rngrenou": {
    "title": "La Grenouillère",
    "museum": "Nationalmuseum, Stockholm"
  },
  "rnmixflow": {
    "title": "Mixed Flowers in an Earthenware Pot",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rnchalands": {
    "title": "Barges on the Seine",
    "museum": "Musée d’Orsay, Paris"
  },
  "rnjardin68": {
    "title": "Woman in a Garden",
    "museum": "Kunstmuseum Basel"
  },
  "rnpromenade": {
    "title": "La Promenade",
    "museum": "J. Paul Getty Museum, Los Angeles"
  },
  "rnpontneuf": {
    "title": "Pont Neuf, Paris",
    "museum": "National Gallery of Art, Washington"
  },
  "rnmonet72": {
    "title": "Claude Monet",
    "museum": "National Gallery of Art, Washington"
  },
  "rnmonetgard": {
    "title": "Claude Monet Painting in His Garden at Argenteuil",
    "museum": "Wadsworth Atheneum, Hartford"
  },
  "rnmomeson": {
    "title": "Madame Monet and Her Son",
    "museum": "National Gallery of Art, Washington"
  },
  "rnduckpond": {
    "title": "The Duck Pond",
    "museum": "Dallas Museum of Art"
  },
  "rnliseshawl": {
    "title": "Lise in a White Shawl",
    "museum": "Dallas Museum of Art"
  },
  "rndancer": {
    "title": "The Dancer",
    "museum": "National Gallery of Art, Washington"
  },
  "rnparisienne": {
    "title": "La Parisienne",
    "museum": "National Museum Cardiff"
  },
  "rnloge": {
    "title": "La Loge",
    "museum": "Courtauld Gallery, London"
  },
  "rningenue": {
    "title": "L’Ingénue",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnhartmann": {
    "title": "Portrait of a Woman (Madame Georges Hartmann)",
    "museum": "Musée d’Orsay, Paris"
  },
  "rnself76": {
    "title": "Self-Portrait",
    "museum": "Harvard Art Museums, Cambridge"
  },
  "rngalette": {
    "title": "Bal du moulin de la Galette",
    "museum": "Musée d’Orsay, Paris"
  },
  "rnswing": {
    "title": "The Swing",
    "museum": "Musée d’Orsay, Paris"
  },
  "rnpiano": {
    "title": "Woman at the Piano",
    "museum": "Art Institute of Chicago"
  },
  "rnchatou74": {
    "title": "The Seine at Chatou",
    "museum": "Dallas Museum of Art"
  },
  "rncharpentier": {
    "title": "Madame Charpentier and Her Children",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rnjeanne": {
    "title": "Jeanne Samary",
    "museum": "National Gallery of Art, Washington"
  },
  "rnacrobats": {
    "title": "Acrobats at the Cirque Fernando",
    "museum": "Art Institute of Chicago"
  },
  "rnmargot": {
    "title": "Margot Berard",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "rntherese": {
    "title": "Thérèse Berard",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnfan": {
    "title": "Woman with a Fan",
    "museum": "Clark Art Institute, Williamstown"
  },
  "rnoarsmen": {
    "title": "Oarsmen at Chatou",
    "museum": "National Gallery of Art, Washington"
  },
  "rnalphonsine": {
    "title": "Alphonsine Fournaise",
    "museum": "Musée d’Orsay, Paris"
  },
  "rncanotiers": {
    "title": "Luncheon of the Boating Party",
    "museum": "The Phillips Collection, Washington"
  },
  "rncouple": {
    "title": "Boating Couple",
    "museum": "Museum of Fine Arts, Boston"
  },
  "rnnearlake": {
    "title": "Near the Lake",
    "museum": "Art Institute of Chicago"
  },
  "rnwargemont": {
    "title": "Road at Wargemont",
    "museum": "Toledo Museum of Art"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.renoir = {
  "title": "The Life of Pierre-Auguste Renoir",
  "life": "1841–1919",
  "part": "Part 1 · 1841–1881",
  "subtitle": "From Limoges to the Luncheon of the Boating Party",
  "intro": "Pierre-Auguste Renoir was born in Limoges on 25 February 1841. The family moved to Paris, he trained as a porcelain painter, and at Gleyre’s studio he met Monet, Bazille and Sisley. This first part follows him as far as the Luncheon of the Boating Party, around 1881.",
  "ending": [
    "The first part of Renoir’s path ends with the boaters on the Seine.",
    "Part two follows the journey to Algeria and Italy, his encounter with older art, and the later years at Cagnes-sur-Mer."
  ],
  "epilogue": "Part two follows the journey to Algeria and Italy, his encounter with older art, and the later years at Cagnes-sur-Mer."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "renoirlimoges": {
    "place": "Limoges and porcelain painting",
    "when": "1841–1858",
    "mapLabel": "Limoges",
    "intro": [
      "Renoir was born in Limoges on 25 February 1841, the son of the tailor Léonard Renoir and the seamstress Marguerite, née Merlet.",
      "Around 1844 the family moved to Paris.",
      "As a young man he trained as a porcelain painter — the workshop of Lévy Frères is often named — and later copied in the Louvre."
    ]
  },
  "renoirgleyre": {
    "place": "At Gleyre’s studio",
    "when": "1862–1866",
    "mapLabel": "Gleyre",
    "intro": [
      "In 1862 Renoir entered the independent studio of Charles Gleyre and studied at the École des Beaux-Arts.",
      "There he met Claude Monet, Alfred Sisley and Frédéric Bazille.",
      "When Gleyre closed the studio in 1864, the friends painted together in the forest of Fontainebleau."
    ]
  },
  "renoirfriends": {
    "place": "Friends and early models",
    "when": "1866–1868",
    "mapLabel": "Friends",
    "intro": [
      "In these years Renoir shares studios and motifs with Bazille and Sisley.",
      "Lise Tréhot sits for him repeatedly.",
      "The portraits stay dark and carefully modelled, still close to the studio painting he had learned."
    ]
  },
  "renoirgrenouillere": {
    "place": "La Grenouillère",
    "when": "1869",
    "mapLabel": "Grenouillère",
    "intro": [
      "In the summer of 1869 Renoir and Monet painted side by side at La Grenouillère, a riverside resort on the Seine at Croissy, near Bougival.",
      "Bright patches on the water and rapid strokes loosen the firmly modelled paint."
    ]
  },
  "renoirargenteuil": {
    "place": "War, Paris and Argenteuil",
    "when": "1870–1873",
    "mapLabel": "Argenteuil",
    "intro": [
      "In 1870 Renoir was drafted and served in the cavalry.",
      "Frédéric Bazille was killed on 28 November 1870 at Beaune-la-Rolande.",
      "Afterwards Renoir painted in Paris and often with Monet at Argenteuil, in a brighter outdoor manner."
    ]
  },
  "renoirexhibitions": {
    "place": "The Impressionist exhibitions",
    "when": "1874–1875",
    "mapLabel": "1874",
    "intro": [
      "On 15 April 1874 the first exhibition of the artists later called Impressionists opened in Nadar’s former studio at 35 boulevard des Capucines.",
      "Renoir showed among other works La Loge, The Dancer and La Parisienne."
    ]
  },
  "renoirgalette": {
    "place": "Montmartre and the Moulin de la Galette",
    "when": "1876",
    "mapLabel": "Montmartre",
    "intro": [
      "Renoir rented a studio in Montmartre and painted life outdoors: the dance at the Moulin de la Galette, the swing, and scenes at the piano.",
      "In 1877 he showed several of these pictures at the third Impressionist exhibition."
    ]
  },
  "renoirportraits": {
    "place": "Portraits and the Salon",
    "when": "1877–1879",
    "mapLabel": "Salon",
    "intro": [
      "With portraits such as Madame Charpentier and Her Children, Renoir found a way back into the official Salon.",
      "In 1879 that large family picture hung there and made him known to a wider public.",
      "The Bérard family at Wargemont also commissioned portraits."
    ]
  },
  "renoircanotiers": {
    "place": "Chatou and the boating party",
    "when": "1879–1881",
    "mapLabel": "Chatou",
    "intro": [
      "On the Seine at Chatou, in the restaurant of the Fournaise family, Renoir painted friends lunching after a boat trip.",
      "The Luncheon of the Boating Party of 1880–81 closes this first part.",
      "Part two follows Algeria, Italy and a change of manner."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "rnmother": {
    "text": [
      "Marguerite Renoir, née Merlet, was a seamstress.",
      "The portrait was painted only around 1860, years after the move from Limoges to Paris, in a dark, quiet studio palette."
    ],
    "fact": "c. 1860. Private collection."
  },
  "rnfather": {
    "text": [
      "Léonard Renoir was a tailor.",
      "This 1869 portrait was painted when the son was already working independently.",
      "The father sits in profile, firmly modelled and without the bright light of the later outdoor pictures."
    ],
    "fact": "1869. Saint Louis Art Museum."
  },
  "rnspringbouq": {
    "text": [
      "This flower piece of 1866 shows how carefully the young Renoir already placed fabrics and blossoms.",
      "Still lifes of this kind belonged to the training he had begun as a porcelain painter and in the studio."
    ],
    "fact": "1866. Harvard Art Museums, Cambridge."
  },
  "rnvase66": {
    "text": [
      "Another flower picture from the mid-1860s.",
      "The paint is denser than in later work, yet the blossoms are already lively — a practice that recalls the fine work of porcelain painting."
    ],
    "fact": "c. 1866. National Gallery of Art, Washington."
  },
  "rnflowersham": {
    "text": [
      "This early flower piece of 1864 is in the Hamburger Kunsthalle.",
      "It belongs to the years when Renoir was still working firmly in the studio tradition, before outdoor light brightened his palette."
    ],
    "fact": "1864. Hamburger Kunsthalle."
  },
  "rnromaine": {
    "text": [
      "The 1864 portrait of the young Romaine Lacaux was painted while Renoir was studying with Gleyre and at the École des Beaux-Arts.",
      "The light background and careful painting of the fabrics already show his interest in portraiture."
    ],
    "fact": "1864. Cleveland Museum of Art."
  },
  "rnsicot": {
    "text": [
      "This 1865 portrait stays dark and firmly constructed.",
      "Here Renoir is still close to the academic studio painting he had seen at Gleyre’s."
    ],
    "fact": "1865. National Gallery of Art, Washington."
  },
  "rnwillsis": {
    "text": [
      "William Sisley was the father of the painter Alfred Sisley, whom Renoir had met at Gleyre’s studio.",
      "The 1864 portrait is now in the Musée d’Orsay."
    ],
    "fact": "1864. Musée d’Orsay, Paris."
  },
  "rnfence": {
    "text": [
      "After Gleyre closed his studio in 1864, Renoir and his friends painted in the forest of Fontainebleau.",
      "The woman by a fence, of 1866, belongs to these early outdoor attempts."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "rntree": {
    "text": [
      "This picture of 1866 also belongs to the Fontainebleau excursions.",
      "The figure stands in the shade of a tree; the paint is still tightly bound, but the motif is already out of doors."
    ],
    "fact": "1866. National Gallery of Art, Washington."
  },
  "rnbazheron": {
    "text": [
      "In 1867 Renoir painted his friend Frédéric Bazille at the easel, at work on a still life with a heron.",
      "The picture is in the Musée Fabre in Montpellier, Bazille’s home city."
    ],
    "fact": "1867. Musée Fabre, Montpellier."
  },
  "rnlisehat": {
    "text": [
      "Lise Tréhot often sat for Renoir in these years.",
      "Here she wears a straw hat; the picture is among the early portraits now in the Barnes Foundation."
    ],
    "fact": "c. 1866. Barnes Foundation, Philadelphia."
  },
  "rnsisleyfam": {
    "text": [
      "Alfred Sisley and his companion sit under trees in 1868. Renoir records his friend from Gleyre’s studio in a bright outdoor picture that now hangs in Cologne."
    ],
    "fact": "1868. Wallraf-Richartz-Museum, Cologne."
  },
  "rnlisesew": {
    "text": [
      "Again Lise Tréhot is the model, this time bent over her sewing.",
      "The quiet interior is one of the pictures Renoir painted of her in the later 1860s."
    ],
    "fact": "c. 1867–1868. Dallas Museum of Art."
  },
  "rnete": {
    "text": [
      "This picture of 1868, often called La Bohémienne, shows Lise Tréhot in a summer dress against a green ground.",
      "It hangs in the Alte Nationalgalerie in Berlin."
    ],
    "fact": "1868. Alte Nationalgalerie, Berlin."
  },
  "rnjules": {
    "text": [
      "Jules Le Cœur, a friend of Renoir’s, stands in 1866 with dog and gun in the forest of Fontainebleau.",
      "The picture, now in São Paulo, records the excursions the friends made after the studio years."
    ],
    "fact": "1866. Museu de Arte de São Paulo."
  },
  "rngrenou": {
    "text": [
      "In the summer of 1869 Renoir stood with Monet at La Grenouillère, a riverside resort on the Seine at Croissy.",
      "The figures on the landing stage and the patches on the water are among the first pictures in which his new, brighter manner appears.",
      "The painting is in the Nationalmuseum, Stockholm."
    ],
    "fact": "1869. Nationalmuseum, Stockholm."
  },
  "rnmixflow": {
    "text": [
      "Still lifes continued alongside the river pictures.",
      "This bouquet in an earthenware pot, around 1869, is in the Museum of Fine Arts, Boston, and shows how loosely Renoir now places the blossoms."
    ],
    "fact": "c. 1869. Museum of Fine Arts, Boston."
  },
  "rnchalands": {
    "text": [
      "The barges on the Seine, around 1869, belong to the same moment as La Grenouillère.",
      "Renoir watches the river not only as a place of leisure but as a working waterway.",
      "The picture is in the Musée d’Orsay."
    ],
    "fact": "c. 1869. Musée d’Orsay, Paris."
  },
  "rnjardin68": {
    "text": [
      "As early as 1868 Renoir painted a woman in a garden, set brightly among the foliage.",
      "The picture in the Kunstmuseum Basel stands on the threshold of the river paintings of the following summer."
    ],
    "fact": "1868. Kunstmuseum Basel."
  },
  "rnpromenade": {
    "text": [
      "In 1870, the year he was drafted, Renoir painted a couple in the shade of the trees.",
      "The picture, now in the Getty Museum, already has the dappled light that would mark his 1870s."
    ],
    "fact": "1870. J. Paul Getty Museum, Los Angeles."
  },
  "rnpontneuf": {
    "text": [
      "After the war, in 1872, Renoir painted the busy Pont Neuf.",
      "The city lies bright under a wide sky, the figures small and quickly placed.",
      "The picture is in the National Gallery of Art."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "rnmonet72": {
    "text": [
      "In 1872 Renoir painted a portrait of his friend Claude Monet.",
      "In these years the two often worked side by side, especially at Argenteuil, where Monet had settled."
    ],
    "fact": "1872. National Gallery of Art, Washington."
  },
  "rnmonetgard": {
    "text": [
      "A year later Renoir recorded Monet at the easel in the garden at Argenteuil.",
      "The picture in the Wadsworth Atheneum shows how closely the friends worked together in these outdoor years."
    ],
    "fact": "1873. Wadsworth Atheneum, Hartford."
  },
  "rnmomeson": {
    "text": [
      "Camille Monet and her son Jean sit in the garden in 1874. Renoir paints his friend’s family in the bright light that also marks Monet’s own pictures of these years."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "rnduckpond": {
    "text": [
      "The duck pond of 1873 belongs to the landscape pictures from the years in and around Argenteuil.",
      "Water, bank and foliage are laid in short, bright touches."
    ],
    "fact": "1873. Dallas Museum of Art."
  },
  "rnliseshawl": {
    "text": [
      "Even after the river years, Lise Tréhot remained an important model.",
      "The 1872 portrait with a white shawl is in the Dallas Museum of Art."
    ],
    "fact": "1872. Dallas Museum of Art."
  },
  "rndancer": {
    "text": [
      "The Dancer of 1874 was among the works Renoir showed at the first Impressionist exhibition.",
      "The young woman stands in light tulle against a dark ground.",
      "The picture is in the National Gallery of Art."
    ],
    "fact": "1874. National Gallery of Art, Washington."
  },
  "rnparisienne": {
    "text": [
      "La Parisienne of 1874 was also shown at that first exhibition.",
      "The woman in the blue dress is now in the National Museum Cardiff."
    ],
    "fact": "1874. National Museum Cardiff."
  },
  "rnloge": {
    "text": [
      "La Loge shows a couple in a theatre box and was one of Renoir’s most important pictures in the 1874 exhibition at Nadar’s.",
      "It is in the Courtauld Gallery, London."
    ],
    "fact": "1874. Courtauld Gallery, London."
  },
  "rningenue": {
    "text": [
      "This 1874 portrait of a young woman, known as L’Ingénue, was painted in the same year as the exhibition pictures.",
      "It belongs to the Clark Art Institute in Williamstown."
    ],
    "fact": "1874. Clark Art Institute, Williamstown."
  },
  "rnhartmann": {
    "text": [
      "This portrait, often identified as Madame Georges Hartmann, also dates from 1874. It is in the Musée d’Orsay."
    ],
    "fact": "1874. Musée d’Orsay, Paris."
  },
  "rnself76": {
    "text": [
      "Around 1876 Renoir painted himself, in the years between the first exhibition and the large Montmartre pictures.",
      "The self-portrait belongs to the Harvard Art Museums."
    ],
    "fact": "1876. Harvard Art Museums, Cambridge."
  },
  "rngalette": {
    "text": [
      "In the garden of the Moulin de la Galette in Montmartre, Renoir painted the Sunday crowd at the dance in 1876. The large picture was shown at the third Impressionist exhibition in 1877 and is in the Musée d’Orsay."
    ],
    "fact": "1876. Musée d’Orsay, Paris."
  },
  "watering": {
    "text": [
      "In the same year he painted the child with a watering can in a garden.",
      "The picture is in the National Gallery of Art and has the same dappled garden light as the Montmartre scenes."
    ],
    "fact": "1876. National Gallery of Art, Washington."
  },
  "rnswing": {
    "text": [
      "The Swing of 1876 was painted in the garden near Renoir’s studio in Montmartre.",
      "It too was shown at the third Impressionist exhibition in 1877. The picture is in the Musée d’Orsay."
    ],
    "fact": "1876. Musée d’Orsay, Paris."
  },
  "rnpiano": {
    "text": [
      "The woman at the piano belongs to the same years as the garden pictures of Montmartre.",
      "The interior is in the Art Institute of Chicago."
    ],
    "fact": "c. 1875–1876. Art Institute of Chicago."
  },
  "rnchatou74": {
    "text": [
      "As early as 1874 Renoir painted the Seine at Chatou, the place he would later return to for the boating party.",
      "The landscape is in the Dallas Museum of Art."
    ],
    "fact": "1874. Dallas Museum of Art."
  },
  "rncharpentier": {
    "text": [
      "The publisher Georges Charpentier and his wife Marguerite supported Renoir.",
      "The large family picture of 1878 hung in the Salon of 1879 and made the painter known to a wider public.",
      "It is now in the Metropolitan Museum of Art."
    ],
    "fact": "1878. Metropolitan Museum of Art, New York."
  },
  "rnjeanne": {
    "text": [
      "The actress Jeanne Samary of the Théâtre-Français sat for Renoir repeatedly in these years.",
      "This 1878 portrait is in the National Gallery of Art."
    ],
    "fact": "1878. National Gallery of Art, Washington."
  },
  "rnacrobats": {
    "text": [
      "Francisca and Angelina Wartenberg, two young acrobats, were painted by Renoir in 1879 at the Cirque Fernando.",
      "The picture is in the Art Institute of Chicago."
    ],
    "fact": "1879. Art Institute of Chicago."
  },
  "rnmargot": {
    "text": [
      "The Bérard family invited Renoir to their country house at Wargemont in Normandy.",
      "In 1879 he painted the little Marguerite-Thérèse, known as Margot.",
      "The portrait is in the Metropolitan Museum of Art."
    ],
    "fact": "1879. Metropolitan Museum of Art, New York."
  },
  "rntherese": {
    "text": [
      "In the same summer he painted the older Thérèse Berard.",
      "The portrait now belongs to the Clark Art Institute in Williamstown."
    ],
    "fact": "1879. Clark Art Institute, Williamstown."
  },
  "rnfan": {
    "text": [
      "The woman with a fan in front of a bunch of chrysanthemums also dates from 1879. This picture too is in the Clark Art Institute."
    ],
    "fact": "1879. Clark Art Institute, Williamstown."
  },
  "rnoarsmen": {
    "text": [
      "In 1879 Renoir painted oarsmen on the Seine at Chatou, near the Restaurant Fournaise.",
      "The picture in the National Gallery of Art stands at the beginning of the boating-party years."
    ],
    "fact": "1879. National Gallery of Art, Washington."
  },
  "rnalphonsine": {
    "text": [
      "Alphonsine Fournaise, the innkeeper’s daughter, sits on the railing above the Seine in 1879. Renoir painted her at Chatou, where the large luncheon of the boating party would soon be made.",
      "The picture is in the Musée d’Orsay."
    ],
    "fact": "1879. Musée d’Orsay, Paris."
  },
  "rncanotiers": {
    "text": [
      "In 1880–81 Renoir gathered friends on the terrace of the Maison Fournaise at Chatou.",
      "The Luncheon of the Boating Party is the great closing picture of this first part and hangs in the Phillips Collection in Washington."
    ],
    "fact": "1880–1881. The Phillips Collection, Washington."
  },
  "rncouple": {
    "text": [
      "The couple in the boat, around 1881, is often identified as Aline Charigot and Renoir himself.",
      "Aline, later his wife, appears in several pictures of these years.",
      "The painting is in the Museum of Fine Arts, Boston."
    ],
    "fact": "c. 1881. Museum of Fine Arts, Boston."
  },
  "rnnearlake": {
    "text": [
      "The couple by the water, around 1879–80, belongs to the same moment as the pictures of Chatou.",
      "It is in the Art Institute of Chicago."
    ],
    "fact": "c. 1879–1880. Art Institute of Chicago."
  },
  "rnwargemont": {
    "text": [
      "In 1879 Renoir painted the road at Wargemont in Normandy, where the Bérard family received him.",
      "The landscape in the Toledo Museum of Art closes the years before the journey to Algeria and Italy.",
      "In the next part, place and manner both change."
    ],
    "fact": "1879. Toledo Museum of Art."
  }
});
})();
