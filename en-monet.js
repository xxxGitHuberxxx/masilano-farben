// v6.7 English content for Monet’s life journey, Part 1.
// Extends window.EN; does not rewrite en-content.js.
(function () {
  var EN = window.EN = window.EN || {};
  var museums = {
  "Marunuma Art Park, Asaka": "Marunuma Art Park, Asaka",
  "Nationalmuseum für westliche Kunst, Tokio": "National Museum of Western Art, Tokyo",
  "Ordrupgaard, Kopenhagen": "Ordrupgaard, Copenhagen",
  "Kimbell Art Museum, Fort Worth": "Kimbell Art Museum, Fort Worth",
  "Norton Simon Museum, Pasadena": "Norton Simon Museum, Pasadena",
  "Kunsthalle Bremen": "Kunsthalle Bremen",
  "Städel Museum, Frankfurt": "Städel Museum, Frankfurt",
  "Currier Museum of Art, Manchester": "Currier Museum of Art, Manchester",
  "RISD Museum, Providence": "RISD Museum, Providence",
  "Museum Barberini, Potsdam": "Museum Barberini, Potsdam",
  "Walters Art Museum, Baltimore": "Walters Art Museum, Baltimore",
  "Philadelphia Museum of Art": "Philadelphia Museum of Art",
  "Präfekturmuseum Mie, Tsu": "Mie Prefectural Art Museum, Tsu",
  "Singer Laren (Sammlung Van Vlissingen)": "Singer Laren (Van Vlissingen Collection)"
};
  EN.museums = Object.assign(EN.museums || {}, museums);
  var works = {
  "carimancon": {
    "title": "Caricature of Léon Manchon",
    "museum": "Art Institute of Chicago"
  },
  "caricassin": {
    "title": "Caricature of Henri Cassinelli",
    "museum": "Art Institute of Chicago"
  },
  "rouelles": {
    "title": "View at Rouelles",
    "museum": "Marunuma Art Park, Asaka"
  },
  "farmnorm": {
    "title": "Farmyard in Normandy",
    "museum": "Musée d’Orsay, Paris"
  },
  "springfl": {
    "title": "Spring Flowers",
    "museum": "Cleveland Museum of Art"
  },
  "ruebavole": {
    "title": "Rue de la Bavole, Honfleur",
    "museum": "Museum of Fine Arts, Boston"
  },
  "saintsimeon": {
    "title": "The Road to Saint-Siméon Farm",
    "museum": "National Museum of Western Art, Tokyo"
  },
  "pavechailly": {
    "title": "The Pavé de Chailly",
    "museum": "Ordrupgaard, Copenhagen"
  },
  "bodmeroak": {
    "title": "The Bodmer Oak, Fontainebleau",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "lunchstudy": {
    "title": "Bazille and Camille (Study)",
    "museum": "National Gallery of Art, Washington"
  },
  "lunchpushkin": {
    "title": "Luncheon on the Grass",
    "museum": "Puschkin-Museum, Moskau"
  },
  "pointeheve": {
    "title": "The Pointe de la Hève at Low Tide",
    "museum": "Kimbell Art Museum, Fort Worth"
  },
  "mouthseine": {
    "title": "The Mouth of the Seine at Honfleur",
    "museum": "Norton Simon Museum, Pasadena"
  },
  "greendress": {
    "title": "Camille in a Green Dress",
    "museum": "Kunsthalle Bremen"
  },
  "womengarden": {
    "title": "Women in the Garden",
    "museum": "Musée d’Orsay, Paris"
  },
  "steadresse": {
    "title": "Garden at Sainte-Adresse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "beachadresse": {
    "title": "The Beach at Sainte-Adresse",
    "museum": "Art Institute of Chicago"
  },
  "regattadresse": {
    "title": "Regatta at Sainte-Adresse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "greenvave": {
    "title": "The Green Wave",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "luncheon68": {
    "title": "The Luncheon",
    "museum": "Städel Museum, Frankfurt"
  },
  "bennecourt": {
    "title": "On the Bank of the Seine, Bennecourt",
    "museum": "Art Institute of Chicago"
  },
  "grenoumet": {
    "title": "La Grenouillère",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "grenoulon": {
    "title": "Bathers at La Grenouillère",
    "museum": "National Gallery, London"
  },
  "bougivalbr": {
    "title": "The Bridge at Bougival",
    "museum": "Currier Museum of Art, Manchester"
  },
  "seinebougival": {
    "title": "The Seine at Bougival",
    "museum": "Privatbesitz"
  },
  "traincountry": {
    "title": "Train in the Countryside",
    "museum": "Musée d’Orsay, Paris"
  },
  "rochesnoires": {
    "title": "Hôtel des Roches Noires, Trouville",
    "museum": "Musée d’Orsay, Paris"
  },
  "camillebeach": {
    "title": "Camille on the Beach at Trouville",
    "museum": "Yale University Art Gallery, New Haven"
  },
  "thameswest": {
    "title": "The Thames below Westminster",
    "museum": "National Gallery, London"
  },
  "hydepark": {
    "title": "Hyde Park, London",
    "museum": "RISD Museum, Providence"
  },
  "poollondon": {
    "title": "The Pool of London",
    "museum": "National Museum Cardiff"
  },
  "meditation": {
    "title": "Meditation. Madame Monet on the Sofa",
    "museum": "Musée d’Orsay, Paris"
  },
  "boatszaan": {
    "title": "Boats at Zaandam",
    "museum": "Museum Barberini, Potsdam"
  },
  "molenszaan": {
    "title": "Windmills near Zaandam",
    "museum": "Van Gogh Museum, Amsterdam"
  },
  "achterzaan": {
    "title": "Houses on the Achterzaan",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "housezaan": {
    "title": "The House on the River Zaan",
    "museum": "Städel Museum, Frankfurt"
  },
  "canalzaan": {
    "title": "Canal in Zaandam",
    "museum": "Singer Laren (Van Vlissingen Collection)"
  },
  "windzaan": {
    "title": "Windmills near Zaandam",
    "museum": "Walters Art Museum, Baltimore"
  },
  "artihouse": {
    "title": "The Artist’s House at Argenteuil",
    "museum": "Art Institute of Chicago"
  },
  "artigarden": {
    "title": "The Artist’s Garden at Argenteuil",
    "museum": "National Gallery of Art, Washington"
  },
  "hobbyhorse": {
    "title": "Jean Monet on His Hobby Horse",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "autumneff": {
    "title": "Autumn Effect at Argenteuil",
    "museum": "Courtauld Gallery, London"
  },
  "redkerchief": {
    "title": "The Red Kerchief",
    "museum": "Cleveland Museum of Art"
  },
  "argbridge": {
    "title": "The Bridge at Argenteuil",
    "museum": "Musée d’Orsay, Paris"
  },
  "capucines": {
    "title": "Boulevard des Capucines",
    "museum": "Nelson-Atkins Museum of Art, Kansas City"
  },
  "railbridge": {
    "title": "The Railway Bridge at Argenteuil",
    "museum": "Philadelphia Museum of Art"
  },
  "argbassin": {
    "title": "The Basin at Argenteuil",
    "museum": "Mie Prefectural Art Museum, Tsu"
  },
  "studioboat": {
    "title": "The Studio Boat",
    "museum": "Kröller-Müller Museum, Otterlo"
  },
  "regattaarg": {
    "title": "Regatta at Argenteuil",
    "museum": "Musée d’Orsay, Paris"
  }
};
  EN.works = Object.assign(EN.works || {}, works);
  EN.paths = EN.paths || {};
  EN.paths.monet = {
  "title": "Monet’s Life Journey",
  "part": "Parts 1–3 · 1856–1926",
  "subtitle": "From Le Havre to the water lilies of the Orangerie",
  "intro": "Travel with Claude Monet through his whole life as a painter: from the caricatures in Le Havre, by way of Camille, London, Zaandam and Argenteuil, the Gare Saint-Lazare, Vétheuil, the coast, the Riviera, Belle-Île and the Creuse, to Giverny – to the haystacks and poplars, Rouen Cathedral, Norway, the Thames and Venice, and finally to the water garden and the great water-lily decorations. Short stations, pictures to colour, and voices from his letters.",
  "ending": [
    "On 5 December 1926 Claude Monet dies at Giverny, aged 86. His friend Georges Clemenceau has helped to see the gift of the great water-lily panels through to the State.",
    "In May 1927 the Orangerie in Paris opens the two oval rooms with the Grandes Décorations. The water garden Monet himself created hangs there as a circular horizon.",
    "The life journey ends here: from the caricatures in Le Havre to the water lilies of the Orangerie."
  ],
  "epilogue": "Claude Monet dies on 5 December 1926 at Giverny. In May 1927 the Orangerie in Paris opens the rooms with the Grandes Décorations – the great water-lily panels he left to the State."
};
  EN.stations = Object.assign(EN.stations || {},
    {
  "lehavre": {
    "place": "Le Havre and Honfleur",
    "when": "1856–1864",
    "intro": [
      "Oscar-Claude Monet is born in Paris on 14 November 1840 and grows up in Le Havre. His father runs a trading house. At school the boy draws caricatures of teachers and townspeople – and sells them.",
      "Eugène Boudin, who paints the light on the beach, persuades him to work from nature. In 1858 the view of Rouelles is made, often called Monet’s first landscape. Later Johan Barthold Jongkind joins them.",
      "In 1859 Monet goes to Paris, draws at the Académie Suisse and meets Pissarro. Military service in Algeria in 1861–1862 interrupts his training. Back in Normandy he paints farmyards, flowers and the streets of Honfleur."
    ]
  },
  "fontainebleau": {
    "place": "Fontainebleau and Chailly",
    "when": "1865–1866",
    "intro": [
      "In 1865 Monet is working in the forest of Fontainebleau, near Chailly. He plans a large Luncheon on the Grass, as an answer to Manet. Camille Doncieux poses, and his friend Frédéric Bazille helps and sits in the study.",
      "The huge canvas remains unfinished. A complete version is kept at the Pushkin Museum; fragments later hang in Paris. At the Salon of 1865 Monet has a success with the mouth of the Seine and the Pointe de la Hève – the coast of his youth."
    ]
  },
  "camille": {
    "place": "Camille",
    "when": "1866–1868",
    "intro": [
      "In 1866 Camille in the green dress is a success at the Salon. The family in Le Havre will have nothing to do with the relationship. Camille becomes pregnant; on 8 August 1867 their son Jean is born in Paris. That summer Monet is often at Sainte-Adresse with his aunt, without her.",
      "Poverty remains. At Ville-d’Avray he paints women in the garden, Camille more than once. They spend the winter of 1868–69 in Normandy: the magpie in the snow. The Luncheon shows Camille and little Jean at table – a rare picture of everyday life."
    ]
  },
  "grenouillere": {
    "place": "Bougival and La Grenouillère",
    "when": "1869",
    "intro": [
      "In 1869 Monet, Camille and Jean are living at Saint-Michel near Bougival. Money is often short: at times there is no bread, no fire and no light. With Renoir, Monet paints at La Grenouillère, the popular bathing place on the Seine.",
      "The sketches are quick and bright. They later count as early Impressionism. A train in the countryside already shows the modern world beside the river."
    ]
  },
  "london": {
    "place": "Trouville and London",
    "when": "1870–1871",
    "intro": [
      "On 28 June 1870 Claude and Camille marry in Paris. They spend the summer at Trouville, on the beach and in front of the Hôtel des Roches Noires. Then the Franco-Prussian War breaks out. Monet goes to London with the family.",
      "In London he paints the Thames, Hyde Park, the Pool of London. The dealer Paul Durand-Ruel, also in the city, begins to buy his pictures. Camille sits indoors, a book in her hand."
    ]
  },
  "zaandam": {
    "place": "Zaandam",
    "when": "1871",
    "intro": [
      "In the spring of 1871 Monet does not return to France at once. He stays from May into the autumn in Zaandam, north of Amsterdam. The brightly coloured houses, the Zaan, the mills and the boats fascinate him.",
      "Camille and Jean are with him. He writes to Pissarro that there is enough here to paint for a lifetime. In the autumn the family travels back to France."
    ]
  },
  "argenteuil": {
    "place": "Argenteuil · House and river",
    "when": "1871–1873",
    "intro": [
      "In December 1871 Monet rents a house at Argenteuil, west of Paris, close to the Seine. For the first time the family has a garden. Jean rides a hobby horse. Camille appears behind the windows with a red kerchief.",
      "Monet paints the house, the flower beds, the bridge, the river in autumn. In 1873 the poppy field is made: Camille and Jean in the meadow. Money remains short, but the pictures grow brighter and more assured."
    ]
  },
  "impression": {
    "place": "Argenteuil · Impression and 1874",
    "when": "1872–1875",
    "intro": [
      "In 1872 Monet paints the sunrise in the harbour of Le Havre. In 1874 he shows the picture at the group’s first independent exhibition, in the studio of the photographer Nadar on the Boulevard des Capucines. A critic mocks the title “Impression” – and the name sticks.",
      "The poppy field and the Boulevard des Capucines also hang in that exhibition. In 1875 Monet paints Camille with a parasol and little Jean in contre-jour. Argenteuil is not yet the end of the path."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {},
    {
  "carimancon": {
    "text": [
      "In Le Havre the young Monet draws caricatures of teachers and townspeople. Léon Manchon, a well-known face in the town, is given a large nose and an even larger beard.",
      "He sells the sheets – often for a few francs. His father runs a trading house; the son wants to draw, not become a merchant."
    ],
    "fact": "Monet is still a teenager. The caricatures are his first works to circulate in the town, and they earn him a little money of his own."
  },
  "caricassin": {
    "text": [
      "Henri Cassinelli, known as “Rufus Croutinelli”, is another local celebrity Monet teases. The line is sure, the mockery friendly but sharp.",
      "In these years he learns to reduce a face to what matters – long before he looks for the light on the water."
    ],
    "fact": "Many of these caricatures are now kept at the Art Institute of Chicago. They show a different Monet from the later painter of the water lilies."
  },
  "rouelles": {
    "text": [
      "Eugène Boudin, who paints the light on the beach at Honfleur, persuades the young Monet to work out of doors. In 1858 this view of Rouelles, near Le Havre, is made.",
      "A pond, poplars, a figure in the grass: still calm and careful, but already with the sky that will not let him go."
    ],
    "fact": "The picture is often regarded as Monet’s first surviving landscape painting. It is signed and dated 1858."
  },
  "farmnorm": {
    "text": [
      "After military service in Algeria (1861–1862), Monet returns to Normandy. On this farm cows stand by a pond, a man and a child are at work, and above them a wide sky.",
      "Boudin’s advice to paint out of doors is bearing fruit. Monet is no longer looking only for faces, but for farmyards, light and everyday life."
    ],
    "fact": "The picture now hangs in the Musée d’Orsay. Monet has signed it “C. Monet”, still without the first name Claude."
  },
  "springfl": {
    "text": [
      "Besides landscape Monet practises still life. Lilac, cherry blossom and primroses fill the table, closely observed, almost festive.",
      "He is in his early twenties and wants to prove that he is a serious painter – not only the caricaturist from Le Havre."
    ],
    "fact": "The still life is made in 1864. In the same months he is painting on the coast with Boudin and Jongkind."
  },
  "ruebavole": {
    "text": [
      "In Honfleur, not far from Le Havre, Monet finds narrow streets and light plaster. The Rue de la Bavole leads into depth; the shadows lie cool on the wall.",
      "Boudin and Jongkind are nearby. The three get on well and go out to work from nature together."
    ],
    "fact": "There is more than one version of this motif. The one shown here hangs in Boston.",
    "quote": {
      "text": "Jongkind and Boudin are here; we get on wonderfully and no longer leave one another.",
      "cite": "Letter to Frédéric Bazille, Honfleur, 26 August 1864"
    }
  },
  "saintsimeon": {
    "text": [
      "The road to the farm of Saint-Siméon runs through tall grass and shade. Above, between the trees, a piece of sky.",
      "Here, near Honfleur, Monet discovers new motifs every day. He would most like to paint everything at once."
    ],
    "fact": "The farm of Saint-Siméon was a favourite meeting place for painters at the mouth of the Seine.",
    "quote": {
      "text": "Here, my dear fellow, it is delightful, and every day I discover things that are more and more beautiful. It is enough to drive one mad, I so much want to do everything.",
      "cite": "Letter to Frédéric Bazille, Honfleur, 15 July 1864"
    }
  },
  "pavechailly": {
    "text": [
      "In the spring of 1865 Monet is working in the forest of Fontainebleau, near Chailly. The paved road runs away under tall trees.",
      "He wants to call Bazille to join him: the forest, he says, is delicious. From these weeks also comes the plan for the large Luncheon on the Grass."
    ],
    "fact": "Chailly-en-Bière lies at the edge of the forest, south of Paris. Monet will often return to the countryside just outside the city.",
    "quote": {
      "text": "Do come quickly and join me, the forest is delicious.",
      "cite": "Letter to Frédéric Bazille, Chailly, 28 April 1865"
    }
  },
  "bodmeroak": {
    "text": [
      "The great oak in the forest of Fontainebleau bears the name of the Swiss draughtsman Karl Bodmer, who made it famous.",
      "Monet paints the trunk, the foliage and the path beside it in strong greens. The forest is for him both workshop and motif."
    ],
    "fact": "Many painters of the Barbizon school painted the same forest. Monet is already looking in it for a brighter, more moving light."
  },
  "lunchstudy": {
    "text": [
      "For a huge Luncheon on the Grass, as an answer to Manet, Monet has friends pose in the forest. In this study sits Frédéric Bazille, the painter friend who often supports him with money and a studio; beside him stands Camille.",
      "Camille Doncieux is his partner and his model. Without her the large picture would be unthinkable."
    ],
    "fact": "Bazille is a close friend from their student years in Paris. He is killed in 1870 in the Franco-Prussian War."
  },
  "lunchpushkin": {
    "text": [
      "The complete composition of the Luncheon on the Grass shows a party among the trees, a spread on the grass, and Camille more than once in the picture.",
      "The huge original remains unfinished and is later cut up. This version in Moscow preserves the whole idea."
    ],
    "fact": "Two fragments of the large canvas hang in the Musée d’Orsay. Monet abandoned the work when he could not finish it in time for the Salon."
  },
  "pointeheve": {
    "text": [
      "Beside the forest the Norman coast remains his subject. At low tide the Pointe de la Hève lies open: rocks, mudflats, a wide sky, small figures on the beach.",
      "Monet shows the picture at the Salon of 1865 – together with the mouth of the Seine, an early public success."
    ],
    "fact": "The Pointe de la Hève lies near Sainte-Adresse, close to Le Havre, where Monet grew up."
  },
  "mouthseine": {
    "text": [
      "Ships, clouds and the wide water of the Seine’s mouth at Honfleur: Monet paints the place where the river meets the sea.",
      "At the Salon of 1865 the picture is noticed. The young painter from Le Havre suddenly counts as a hope."
    ],
    "fact": "Honfleur lies opposite his home town, on the other side of the estuary. Monet returns to this water again and again."
  },
  "greendress": {
    "text": [
      "Camille Doncieux wears a long green dress and looks back over her shoulder. In 1866 the picture is a success at the Salon – under the title “Camille”.",
      "The family in Le Havre will have nothing to do with the relationship. Camille is model, partner and soon the mother of his child."
    ],
    "fact": "Monet is 25, Camille 19. The green dress becomes one of the best-known pictures of their first years together."
  },
  "womengarden": {
    "text": [
      "In the garden at Ville-d’Avray four women in light dresses stand among flowers and shade. Camille posed for more than one of the figures.",
      "Monet paints the large canvas out of doors. It is rejected by the Salon; later the State buys it."
    ],
    "fact": "Monet had a trench dug so that he could reach the upper part of the canvas without tilting it."
  },
  "steadresse": {
    "text": [
      "In the summer of 1867 Monet is at Sainte-Adresse, staying with his aunt. Camille remains in Paris; she is expecting a child. From the garden one looks over the estuary and, past flags, out to the water.",
      "The family at the railing is his – father, aunt, cousin – without Camille. He writes to Bazille that he has been able to help poor Camille, and how hard the situation is."
    ],
    "fact": "On 8 August 1867 their son Jean is born in Paris. Monet is not with Camille the whole time.",
    "quote": {
      "text": "That did me a great deal of good and gave me great pleasure, because I was able to come to the aid of poor Camille. Ah, my dear fellow, what a painful situation it is all the same; she is very kind, very good-natured.",
      "cite": "Letter to Frédéric Bazille, Sainte-Adresse, 25 June 1867"
    }
  },
  "beachadresse": {
    "text": [
      "On the beach at Sainte-Adresse walkers sit and stroll, fishermen work at the boats, the sky is wide.",
      "Monet knows this beach from childhood. Now he paints it at the time when Camille in Paris is waiting for the child."
    ],
    "fact": "Sainte-Adresse lies right beside Le Havre. In clear weather one can see a long way across the mouth of the Seine."
  },
  "regattadresse": {
    "text": [
      "Sailing boats pass Sainte-Adresse, spectators stand on the shore, the water is laid in short, bright strokes.",
      "Beside the family picture in the garden, the regatta is a picture of leisure by the sea – bright, windy, without pomp."
    ],
    "fact": "In 1867 Monet paints several views of the same shore. The light changes from picture to picture."
  },
  "greenvave": {
    "text": [
      "A green wave rises against a darker sea, a boat holds its own. Monet painted the picture around 1866–67, after Japanese woodcuts and after his own coast.",
      "The movement of the water becomes the main motif – long before he paints the water lilies at Giverny."
    ],
    "fact": "The picture hangs in the Metropolitan Museum in New York. The colour of the water is almost as strong as in a print by Hokusai."
  },
  "luncheon68": {
    "text": [
      "Camille sits at a laid table, little Jean nearby, a guest in the shade of the garden. It is a rare picture of everyday family life.",
      "Money is short and recognition uncertain. Even so Monet holds on to this quiet midday."
    ],
    "fact": "The picture is made in 1868, probably at Bennecourt or nearby. A commission from Madame Gaudibert in Le Havre briefly helps the family this year."
  },
  "bennecourt": {
    "text": [
      "On the bank of the Seine at Bennecourt Camille sits, the village reflected in the water. Jean is still a baby; the family is looking for an affordable place to live.",
      "The reflection takes up almost half the picture. Monet is practising what will later be his strength: water as a second image of the world."
    ],
    "fact": "Bennecourt lies upstream from Paris. Monet works there in 1868 in difficult financial circumstances."
  },
  "magpie": {
    "text": [
      "In the winter of 1868–69 Monet, Camille and Jean are in Normandy, near Étretat. On a fence in front of the snow sits a single magpie.",
      "The snow is not white, but blue, pink, full of shadows. Many contemporaries find this strange."
    ],
    "fact": "The picture is one of Monet’s quietest winter landscapes. It hangs in the Musée d’Orsay."
  },
  "grenoumet": {
    "text": [
      "La Grenouillère is a popular bathing place and a riverside inn on the Seine near Bougival. Monet paints the landing stage, the boats, the water turned to light – beside Renoir, who is after the same motif.",
      "He himself calls the sketches “poor pochades” and yet dreams of a large picture of the baths."
    ],
    "fact": "Renoir’s versions of La Grenouillère hang, among other places, in Stockholm and Winterthur. In 1869 the two friends often work side by side.",
    "quote": {
      "text": "I do have a dream, a picture, the bathing place at La Grenouillère, for which I have made a few poor sketches, but it is a dream. Renoir, who has just spent two months here, wants to do that picture too.",
      "cite": "Letter to Frédéric Bazille, Saint-Michel, 25 September 1869"
    }
  },
  "grenoulon": {
    "text": [
      "Bathers, a landing stage, short waves: Monet builds the water out of many bright dabs.",
      "What still seems a sketch here becomes the language of Impressionism. Renoir often stands at his side."
    ],
    "fact": "This version hangs in the National Gallery in London. It should be thought of beside Renoir’s pictures from the same weeks."
  },
  "bougivalbr": {
    "text": [
      "The bridge at Bougival spans the Seine, a road leads into the picture, trees stand on the bank.",
      "In 1869 Monet, Camille and little Jean are living at Saint-Michel, close by. Life is cramped and often without money."
    ],
    "fact": "Bougival is easy to reach from the centre of Paris by train. That is why the place becomes a destination for outings – and a motif."
  },
  "seinebougival": {
    "text": [
      "The Seine at Bougival lies quiet, houses and trees reflected. It is the same water on which La Grenouillère stands, only calmer.",
      "In August 1869 Monet writes to Bazille that for eight days there has been no bread, no wine, no fire and no light."
    ],
    "fact": "Saint-Michel near Bougival is the family’s home this summer. Their situation remains precarious.",
    "quote": {
      "text": "For eight days no bread, no wine, no fire for cooking, no light. It is atrocious.",
      "cite": "Letter to Frédéric Bazille, Saint-Michel, 9 August 1869"
    }
  },
  "traincountry": {
    "text": [
      "A train moves through the open country, smoke hangs over the trees, the meadow stays green and quiet.",
      "The modern world enters the picture without driving out the countryside. Monet sees both at once."
    ],
    "fact": "The small picture hangs in the Musée d’Orsay. The railway is what first made places like Bougival easy destinations for a day out."
  },
  "rochesnoires": {
    "text": [
      "On 28 June 1870 Claude and Camille marry in Paris. They spend the summer at Trouville, on the beach and in front of the Hôtel des Roches Noires.",
      "Flags snap in the wind, the balcony lies in contre-jour. It is a short, bright time – then the war breaks out."
    ],
    "fact": "The Hôtel des Roches Noires was a grand house on the promenade at Trouville. Monet paints it from the terrace or from an upper floor."
  },
  "camillebeach": {
    "text": [
      "Camille sits on the beach at Trouville, in light clothes, her hat on, her gaze under the parasol. The sand and the wind are painted quickly.",
      "A few weeks later the family goes to London, away from the Franco-Prussian War."
    ],
    "fact": "Monet paints Camille on the beach at Trouville more than once. The pictures are small and immediate, often on panel."
  },
  "thameswest": {
    "text": [
      "In London Monet paints the Thames below Westminster: fog, a bridge, the towers of Parliament as shapes, a boat in the foreground.",
      "The war has driven him out of France. In the city he meets the dealer Paul Durand-Ruel, who begins to buy his pictures."
    ],
    "fact": "Pissarro and Daubigny are also in London in these months. The fog of the Thames will, around 1900, become a great subject for Monet once more."
  },
  "hydepark": {
    "text": [
      "Hyde Park lies wide and green, small figures walk under a bright sky. In London Monet looks not only for the river, but also for the parks.",
      "The city is a refuge, not a home. He stays only as long as the war and the unrest in France last."
    ],
    "fact": "The picture is one of Monet’s rather rare London park views from the winter of 1870–71."
  },
  "poollondon": {
    "text": [
      "The Pool of London, the reach of the Thames below London Bridge, is full of ships, masts and grey light.",
      "Monet finds here another Le Havre: work on the water, haze and traffic – only under an English sky."
    ],
    "fact": "The picture hangs in Cardiff. It shows how closely, already in 1871, Monet reads a foreign city through its water."
  },
  "meditation": {
    "text": [
      "Camille sits on a sofa, a book in her hand, her gaze lowered. The room is still, the curtain bright, the dress dark.",
      "In a foreign city she becomes a quiet centre. Monet paints not only the river in London, but also her."
    ],
    "fact": "The picture hangs in the Musée d’Orsay. It is one of the most intimate portraits of Camille."
  },
  "boatszaan": {
    "text": [
      "In the spring of 1871 Monet does not return to France at once. He stays in Zaandam, north of Amsterdam, from May into the autumn.",
      "Boats lie on the Zaan, facing brightly coloured houses. He writes to Pissarro that there is enough here to paint for a lifetime."
    ],
    "fact": "Camille and Jean are with him. In these months Zaandam is an unexpected workshop between London and the return to France.",
    "quote": {
      "text": "Zaandam is particularly remarkable, and there is enough here to paint for a lifetime.",
      "cite": "Letter to Camille Pissarro, Zaandam, 2 June 1871"
    }
  },
  "molenszaan": {
    "text": [
      "Mills stand by the hundred along the Zaan, their sails cutting the sky, the water carrying their reflection.",
      "Monet is delighted by the colours of the houses and by the boats. The Dutch landscape seems made for painting to him, almost amusing in its wealth of motifs."
    ],
    "fact": "This picture hangs in the Van Gogh Museum in Amsterdam – an early Monet in Vincent’s house, though Vincent himself was not yet painting in the city.",
    "quote": {
      "text": "I am wonderfully placed here for painting; it is the most amusing thing one can find. Houses of every colour, mills by the hundred and delightful boats.",
      "cite": "Letter to Camille Pissarro, Zaandam, 17 June 1871"
    }
  },
  "achterzaan": {
    "text": [
      "On the Achterzaan narrow houses stand right on the water, a mill in the background, the sky in motion.",
      "Monet paints the quiet side of Zaandam: living on the canal, not the noise of the harbour."
    ],
    "fact": "The picture belongs to the Metropolitan Museum in New York. The Achterzaan is a side branch of the Zaan."
  },
  "housezaan": {
    "text": [
      "A house stands right on the Zaan, reflecting water in front of it, a typically Dutch façade.",
      "In a few months Monet gathers dozens of such views. He works quickly, because the motif will not let him go."
    ],
    "fact": "The picture hangs in the Städel Museum in Frankfurt. It shows how close Monet comes to the houses – almost without a strip of bank."
  },
  "canalzaan": {
    "text": [
      "The canal at Zaandam is a mirror for clouds, boats and the green and rosy houses on the bank.",
      "This is exactly what Monet wrote to Pissarro: houses of every colour, mills, delightful boats."
    ],
    "fact": "The picture belongs to the Van Vlissingen Collection and can be seen at Singer Laren."
  },
  "windzaan": {
    "text": [
      "Several mills stand one behind another under a wide sky; the flat land in front of them is green and damp.",
      "Towards the autumn of 1871 Monet leaves the Netherlands. The next home will be at Argenteuil, on the Seine near Paris."
    ],
    "fact": "In a few months at Zaandam a whole group of pictures is made. After that the family returns to France."
  },
  "artihouse": {
    "text": [
      "In December 1871 Monet rents a house at Argenteuil, west of Paris, close to the Seine. The garden is in flower, Jean plays on the gravel, the façade is bright.",
      "For the first time the family has a garden of its own. Camille and Jean belong firmly in these pictures."
    ],
    "fact": "Argenteuil is quickly reached from Paris by train. Monet stays here until 1878."
  },
  "artigarden": {
    "text": [
      "Dahlias and tall flowers fill the garden at Argenteuil, a path leads to the arbour, the sky is light.",
      "Monet paints the house not only from the outside, but the beds in which the family spends the summer."
    ],
    "fact": "The picture hangs in the National Gallery of Art in Washington. In these years the garden becomes one of his most important motifs."
  },
  "hobbyhorse": {
    "text": [
      "Little Jean, about five years old in 1872, sits proudly on a hobby horse in the garden. Behind him are the flower beds and the hedge.",
      "Monet paints his son without a pose, as part of everyday life at Argenteuil. It is a bright, almost private picture."
    ],
    "fact": "Jean Monet is born in 1867. Later, at Giverny, he and his stepbrothers and sisters help to run their father’s household."
  },
  "autumneff": {
    "text": [
      "In autumn the Seine at Argenteuil stands in gold and pink. The trees on the bank change colour, the water takes up every tint.",
      "Monet finds here the motif that will not leave him: the river as a mirror of the season."
    ],
    "fact": "The picture hangs in the Courtauld Gallery in London. 1873 is one of his most productive years on the river."
  },
  "redkerchief": {
    "text": [
      "Through the French windows of the house at Argenteuil one sees Camille in the snow, a red kerchief around her head. Inside it is warm, outside cold and bright.",
      "The face is set down in only a few strokes. Even so one recognises her at once."
    ],
    "fact": "The picture hangs in Cleveland. It joins the family house to the winter air beyond the glass."
  },
  "argbridge": {
    "text": [
      "The road bridge at Argenteuil spans the Seine, sailing boats lie in front of it, the sky is soft.",
      "Monet paints the bridge more than once, in different lights. The river at his door becomes a workshop."
    ],
    "fact": "The picture hangs in the Musée d’Orsay. The bridge had been rebuilt after the war and belonged to the modern face of the town."
  },
  "poppies": {
    "text": [
      "Across a summer meadow near Argenteuil walk a woman and a child, most likely Camille and Jean. On the left the poppies glow especially densely.",
      "The picture hangs in 1874 at the first Impressionist exhibition. It is one of the friendliest pictures of these years."
    ],
    "fact": "The poppy field is one of Monet’s best-known pictures and hangs in the Musée d’Orsay."
  },
  "sunrise": {
    "text": [
      "In 1872 Monet paints the sunrise in the harbour of Le Havre: boats in the haze, cranes, smoke and an orange sun reflected in the water.",
      "Two years later this very picture gives a whole movement its name. A critic mocks the title “Impression” – and the name sticks."
    ],
    "fact": "The picture hangs in the Musée Marmottan Monet in Paris. Monet painted it in his home town, not at Argenteuil, though he was living there."
  },
  "capucines": {
    "text": [
      "From a balcony one looks down on the Boulevard des Capucines: carriages, passers-by, trees, everything in a short, vibrating stroke.",
      "It is in a building on this very boulevard, in the studio of the photographer Nadar, that the group’s first exhibition takes place in 1874. The picture itself hangs there."
    ],
    "fact": "There are two versions of the boulevard. This one hangs in Kansas City; another in the Pushkin Museum in Moscow."
  },
  "railbridge": {
    "text": [
      "The railway bridge at Argenteuil stands on tall piers in the river; a train might come at any moment, sails glide through beneath.",
      "Industry and leisure share the same river. Monet sees in this not a motif of conflict, but of light."
    ],
    "fact": "Beside the road bridge, the railway bridge is Argenteuil’s second great structure. Monet paints both more than once."
  },
  "argbassin": {
    "text": [
      "From the road on the bridge one sees the basin at Argenteuil: boats, the far bank, a soft sky.",
      "Monet often works from the bank or, later, from the studio boat. The river lies practically at his door."
    ],
    "fact": "This view hangs in the Mie Prefectural Art Museum in Japan. In the 1870s Argenteuil was a popular place for sailing."
  },
  "studioboat": {
    "text": [
      "A converted boat becomes a floating studio. Monet sits in it and paints the river at eye level, the banks gliding past.",
      "The idea goes back to Daubigny. At Argenteuil Monet makes it his own tool."
    ],
    "fact": "The picture hangs in the Kröller-Müller Museum in Otterlo. From the boat come many of the river pictures of these years."
  },
  "regattaarg": {
    "text": [
      "At the Argenteuil regatta the sails stand like areas of colour on the water, the bank is close, the day is bright.",
      "Monet loves these festivals on the river. They give him movement, reflection and company in a single picture."
    ],
    "fact": "The picture hangs in the Musée d’Orsay and is made in 1872, in the first full year at Argenteuil."
  },
  "parasol": {
    "text": [
      "In 1875 Camille stands on a rise, the parasol against the light, little Jean beside her. Seen from below, against the blowing sky, she seems almost weightless.",
      "The picture comes just after the first Impressionist exhibition. It closes this first part: the family in the light, still at Argenteuil, before the path leads on."
    ],
    "fact": "Monet takes up the motif again later, with Alice Hoschedé, his second wife. Camille dies in 1879 at Vétheuil."
  }
});
})();
