// v10.0 English content for Caspar David Friedrich’s life journey, Part 1 (1774–1817).
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Pommersches Landesmuseum, Greifswald": "Pomeranian State Museum, Greifswald",
  "Statens Museum for Kunst, Kopenhagen": "SMK – National Gallery of Denmark, Copenhagen",
  "Hamburger Kunsthalle, Kupferstichkabinett": "Hamburger Kunsthalle, Department of Prints and Drawings",
  "Albertina, Wien": "Albertina, Vienna",
  "Staatliche Kunstsammlungen Dresden": "Dresden State Art Collections",
  "Österreichische Galerie Belvedere, Wien": "Belvedere, Vienna",
  "Thüringer Landesmuseum Heidecksburg, Rudolstadt": "Heidecksburg State Museum, Rudolstadt",
  "Puschkin-Museum, Moskau": "Pushkin Museum, Moscow",
  "Museum für Kunst und Kulturgeschichte, Dortmund": "Museum of Art and Cultural History, Dortmund",
  "Privatsammlung": "Private collection",
  "Stiftung Preussische Schlösser und Gärten, Berlin": "Prussian Palaces and Gardens Foundation, Berlin",
  "Nationalmuseum Oslo": "National Museum, Oslo"
});
  EN.works = Object.assign(EN.works || {}, {
  "cffatherread": {
    "title": "The Father Reading",
    "museum": "Kunsthalle Mannheim"
  },
  "cffather": {
    "title": "Portrait of the Father",
    "museum": "Pomeranian State Museum, Greifswald"
  },
  "cfheiden": {
    "title": "Mother Heiden",
    "museum": "Pomeranian State Museum, Greifswald"
  },
  "cfself00": {
    "title": "Self-Portrait",
    "museum": "SMK – National Gallery of Denmark, Copenhagen"
  },
  "cfluisen": {
    "title": "The Luisenquelle at Frederiksdal",
    "museum": "Hamburger Kunsthalle"
  },
  "cfemilia": {
    "title": "Emilia’s Spring near Copenhagen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfpavillon": {
    "title": "Landscape with Pavilion",
    "museum": "Hamburger Kunsthalle"
  },
  "cfcopen": {
    "title": "Landscape near Copenhagen",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "cfoak": {
    "title": "Oak Tree",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfwasserburg": {
    "title": "Moonlit Landscape with the Ruin of a Moated Castle",
    "museum": "SMK – National Gallery of Denmark, Copenhagen"
  },
  "cfamselfall": {
    "title": "The Amselfall near Rathen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfkriebstein": {
    "title": "Kriebstein Castle near Waldheim",
    "museum": "Pomeranian State Museum, Greifswald"
  },
  "cftharandt": {
    "title": "Ruin, Church and Houses at Tharandt",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfelbstr": {
    "title": "Road by the Elbe with a Ruined Archway",
    "museum": "Hamburger Kunsthalle"
  },
  "cftrees": {
    "title": "Group of Trees",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfclouds": {
    "title": "Cloud Study",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfflatruegen": {
    "title": "Flat Landscape on Rügen",
    "museum": "Hamburger Kunsthalle"
  },
  "cfziehbrunnen": {
    "title": "Cottage with a Well on Rügen",
    "museum": "Pomeranian State Museum, Greifswald"
  },
  "cfselfarm": {
    "title": "Self-Portrait Leaning on an Arm",
    "museum": "Hamburger Kunsthalle"
  },
  "cfarkonasun": {
    "title": "View of Arkona with Rising Sun",
    "museum": "Hamburger Kunsthalle"
  },
  "cfsteg": {
    "title": "Footbridge over a River before a Group of Trees",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfruegenbay": {
    "title": "Rügen Landscape with a Bay",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfpilgrim": {
    "title": "Pilgrimage at Sunrise",
    "museum": "Klassik Stiftung Weimar"
  },
  "cfmadonna": {
    "title": "Statue of the Madonna in the Mountains",
    "museum": "Art Institute of Chicago"
  },
  "cfshepherd": {
    "title": "The East Coast of Rügen with a Shepherd",
    "museum": "Metropolitan Museum of Art, New York"
  },
  "cfarkonamoon": {
    "title": "View of Arkona with Rising Moon",
    "museum": "Albertina, Vienna"
  },
  "cfdeadoak": {
    "title": "Summer Landscape with a Dead Oak",
    "museum": "Klassik Stiftung Weimar"
  },
  "cftetschen": {
    "title": "The Cross in the Mountains (Tetschen Altar)",
    "museum": "Dresden State Art Collections"
  },
  "cfdolmen": {
    "title": "Dolmen in the Snow",
    "museum": "Dresden State Art Collections"
  },
  "cfelbtal": {
    "title": "View of the Elbe Valley",
    "museum": "Dresden State Art Collections"
  },
  "cffog": {
    "title": "Seashore in Fog",
    "museum": "Belvedere, Vienna"
  },
  "cffisher": {
    "title": "Seashore with a Fisherman",
    "museum": "Belvedere, Vienna"
  },
  "cfbohemia": {
    "title": "Bohemian Landscape",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfmorningfog": {
    "title": "Morning Mist in the Mountains",
    "museum": "Heidecksburg State Museum, Rudolstadt"
  },
  "cfmonk": {
    "title": "Monk by the Sea",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfoakabbey": {
    "title": "Abbey in the Oakwood",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfrainbow": {
    "title": "Mountain Landscape with Rainbow",
    "museum": "Museum Folkwang, Essen"
  },
  "cfself10": {
    "title": "Self-Portrait",
    "museum": "Kupferstichkabinett, Berlin"
  },
  "cfnewmoon": {
    "title": "New Moon above the Giant Mountains",
    "museum": "National Gallery of Art, Washington"
  },
  "cfriesenmorning": {
    "title": "Morning in the Giant Mountains",
    "museum": "Prussian Palaces and Gardens Foundation, Berlin"
  },
  "cfwarmbrunn": {
    "title": "View from Warmbrunn towards the Kleine Sturmhaube",
    "museum": "Pushkin Museum, Moscow"
  },
  "cfharz": {
    "title": "Rocky Gorge in the Harz",
    "museum": "Pomeranian State Museum, Greifswald"
  },
  "cfwinterlon": {
    "title": "Winter Landscape",
    "museum": "National Gallery, London"
  },
  "cfwinterchurch": {
    "title": "Winter Landscape with Church",
    "museum": "Museum of Art and Cultural History, Dortmund"
  },
  "cfcrosswood": {
    "title": "Cross in the Forest",
    "museum": "Staatsgalerie Stuttgart"
  },
  "cfheroes": {
    "title": "Graves of Ancient Heroes",
    "museum": "Hamburger Kunsthalle"
  },
  "cfchasseur": {
    "title": "The Chasseur in the Forest",
    "museum": "Private collection"
  },
  "cfcrossbaltic": {
    "title": "Cross on the Baltic",
    "museum": "Prussian Palaces and Gardens Foundation, Berlin"
  },
  "cfharbour": {
    "title": "View of a Harbour",
    "museum": "Prussian Palaces and Gardens Foundation, Berlin"
  },
  "cftwomen": {
    "title": "Two Men by the Sea",
    "museum": "Alte Nationalgalerie, Berlin"
  },
  "cfafterstorm": {
    "title": "After the Storm",
    "museum": "SMK – National Gallery of Denmark, Copenhagen"
  },
  "cfgreifsmoon": {
    "title": "Greifswald in Moonlight",
    "museum": "National Museum, Oslo"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.friedrich = {
  "title": "The Life of Caspar David Friedrich",
  "life": "1774–1840",
  "part": "Part 1 · 1774–1817",
  "subtitle": "From Greifswald to Dresden",
  "intro": "Caspar David Friedrich was born in Greifswald on 5 September 1774. This first part follows him from his childhood on the Baltic and the academy in Copenhagen, through Dresden, the walks on Rügen and in the Harz, the sepia drawings and the Weimar prize of 1805, the Tetschen Altar and Monk by the Sea, to the pictures of the Wars of Liberation around 1817.",
  "ending": [
    "In 1817 Friedrich painted Two Men by the Sea and saw Greifswald in moonlight. He was a member of the Dresden Academy and remained in the city that had become the centre of his life.",
    "The next part follows his marriage to Caroline in 1818, the Chalk Cliffs on Rügen, the Wanderer above the Sea of Fog, the Sea of Ice, the stroke of 1835, his death in 1840 and the late rediscovery."
  ],
  "epilogue": "The next part follows his marriage to Caroline in 1818, the Chalk Cliffs on Rügen, the Wanderer above the Sea of Fog, the Sea of Ice, the stroke of 1835, his death in 1840 and the late rediscovery."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "cfgreifswald": {
    "place": "Greifswald",
    "when": "1774–1794",
    "mapLabel": "Greifswald",
    "intro": [
      "Caspar David Friedrich was born in Greifswald on 5 September 1774, the sixth of ten children of the soap boiler and candle maker Adolf Gottlieb Friedrich and Sophie Dorothea. His mother died in 1781, when he was seven.",
      "In 1787 his brother Johann Christoffer also died, after trying to save him from an accident on the ice. The loss stayed with him for a long time. As a youth he took drawing lessons with Johann Gottfried Quistorp in Greifswald."
    ]
  },
  "cfcopenhagen": {
    "place": "The academy in Copenhagen",
    "when": "1794–1798",
    "mapLabel": "Copenhagen",
    "intro": [
      "From 1794 to 1798 Friedrich studied at the Royal Academy in Copenhagen, under Jens Juel, Nicolai Abildgaard and Christian August Lorentzen. He drew in the country around the city, at springs, pavilions and in moonlit landscapes.",
      "The Danish academy was then regarded as one of the best in the north. Here he learned to look closely at nature and the calm, clear pictorial order that would later shape his landscapes."
    ]
  },
  "cfdresden": {
    "place": "Arrival in Dresden",
    "when": "1798–1800",
    "mapLabel": "Dresden",
    "intro": [
      "In the autumn of 1798 Friedrich settled in Dresden. The city, with its picture gallery and the landscapes along the Elbe, became his home for the rest of his life.",
      "In 1799 he showed work for the first time in the Dresden Academy exhibition. He walked into Saxon Switzerland and the valleys around the city, drawing trees, rocks, castles and clouds."
    ]
  },
  "cfruegen": {
    "place": "Rügen and Greifswald",
    "when": "1801–1803",
    "mapLabel": "Rügen",
    "intro": [
      "In 1801 Friedrich travelled to Rügen for the first time and stayed a long while in Greifswald. He walked across the island, drawing coasts, fields, cottages and Cape Arkona.",
      "By the summer of 1802 he was back in Dresden. There he met the poet Ludwig Tieck and the painter Philipp Otto Runge. He now worked a great deal with pen, brush and sepia."
    ]
  },
  "cfsepia": {
    "place": "Sepia and the Weimar prize",
    "when": "1803–1806",
    "mapLabel": "Loschwitz",
    "intro": [
      "In 1803 Friedrich took a summer apartment at Loschwitz near Dresden and made a first walking tour through northern Bohemia. In large sepia sheets he developed wide, quiet landscapes of light and mist.",
      "On 25 August 1805 he received half of the prize of the Weimar Friends of Art around Goethe, for two sepia drawings: a procession in the morning light and fisher folk on the shore. His name became known beyond Dresden."
    ]
  },
  "cftetschenst": {
    "place": "Bohemia and the Tetschen Altar",
    "when": "1807–1808",
    "mapLabel": "Bohemia",
    "intro": [
      "In 1807 Friedrich walked through Bohemia again and began to paint in oil. The new pictures show mist over the sea, snowy hills and wide valleys with few signs of human life.",
      "At Christmas 1808 he showed the Cross in the Mountains, later called the Tetschen Altar, in his studio. The critic Basilius von Ramdohr attacked the picture sharply, while painters such as Gerhard von Kügelgen defended it. The dispute made Friedrich widely known."
    ]
  },
  "cfmonkst": {
    "place": "Monk by the Sea",
    "when": "1809–1810",
    "mapLabel": "Berlin",
    "intro": [
      "In the autumn of 1810 Friedrich showed two pictures as a pair at the Berlin Academy exhibition: Monk by the Sea and Abbey in the Oakwood. At the suggestion of the young crown prince, the Prussian royal house acquired both pictures.",
      "That same year Friedrich became an external member of the Berlin Academy. On 18 September 1810 Goethe visited him in his Dresden studio. His friends now included the writer Heinrich von Kleist and the painter Georg Friedrich Kersting."
    ]
  },
  "cfmountains": {
    "place": "Giant Mountains and Harz",
    "when": "1810–1811",
    "mapLabel": "Giant Mountains",
    "intro": [
      "In the summer of 1810 Friedrich walked through the Giant Mountains with Georg Friedrich Kersting. He used his sketches of peaks, ridges and morning mist in his pictures for many years.",
      "In June 1811 came a walking tour through the Harz with the sculptor Christian Gottlieb Kühn. In July he visited Goethe in Jena. These years also produced quiet winter pictures with churches and fir trees in the snow."
    ]
  },
  "cfliberation": {
    "place": "The Wars of Liberation",
    "when": "1812–1817",
    "mapLabel": "Greifswald",
    "intro": [
      "During the Wars of Liberation against Napoleon, in 1813 and 1814, Friedrich painted pictures full of memories of old heroes and graves. His friend Kersting went to war as a volunteer. In 1814 Friedrich showed Graves of Ancient Heroes and The Chasseur in the Forest in Dresden.",
      "In 1816 the Prussian king bought View of a Harbour and gave it to the crown prince. That same year Friedrich became a member of the Dresden Academy. In 1817 he painted Two Men by the Sea, After the Storm and Greifswald in Moonlight."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "cffatherread": {
    "text": [
      "An old man in spectacles sits at a table, reading a thick book.",
      "Friedrich drew his father Adolf Gottlieb within an oval frame."
    ],
    "fact": "c. 1801. Kunsthalle Mannheim."
  },
  "cffather": {
    "text": [
      "The father wears a tall fur cap and a coat with a fur collar.",
      "He looks to one side, calm and serious."
    ],
    "fact": "1798. Pomeranian State Museum, Greifswald."
  },
  "cfheiden": {
    "text": [
      "An older woman in a pleated bonnet looks out of the picture.",
      "After the mother’s death, Mother Heiden, the housekeeper, helped to bring up the family’s children."
    ],
    "fact": "c. 1798. Pomeranian State Museum, Greifswald."
  },
  "cfself00": {
    "text": [
      "The young Friedrich looks at us with large, alert eyes.",
      "At the bottom of the sheet are lines in his own hand."
    ],
    "fact": "c. 1800. SMK – National Gallery of Denmark, Copenhagen."
  },
  "cfluisen": {
    "text": [
      "Beneath tall trees stands a small monument above a spring.",
      "Two men and a dog rest in the shade before it."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfemilia": {
    "text": [
      "A memorial stone stands at the edge of a garden, behind a fence.",
      "The student Friedrich painted the site in delicate watercolour."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfpavillon": {
    "text": [
      "Behind a wooden fence and stones stands a pavilion with a roof terrace.",
      "On the right a bare tree bends."
    ],
    "fact": "1797. Hamburger Kunsthalle."
  },
  "cfcopen": {
    "text": [
      "From a hill the view stretches over fields and woods to the towers of the city.",
      "A gnarled tree frames the view."
    ],
    "fact": "1797. Staatliche Kunsthalle Karlsruhe."
  },
  "cfoak": {
    "text": [
      "With his pencil Friedrich followed every branch of an old oak.",
      "At the lower left is the year 1797."
    ],
    "fact": "1797. Kupferstichkabinett, Berlin."
  },
  "cfwasserburg": {
    "text": [
      "The moon shines through clouds onto a drawbridge and a ruined tower.",
      "Already in Copenhagen Friedrich was drawn to the light of night."
    ],
    "fact": "1797. SMK – National Gallery of Denmark, Copenhagen."
  },
  "cfamselfall": {
    "text": [
      "A stream falls between boulders and fir trees.",
      "Friedrich drew Saxon Switzerland with a fine pencil."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cfkriebstein": {
    "text": [
      "High above the valley the castle stands on its rock.",
      "Friedrich captured it in delicate lines and washes."
    ],
    "fact": "1799. Pomeranian State Museum, Greifswald."
  },
  "cftharandt": {
    "text": [
      "On the left stands a ruined castle tower, on the right a church with a pointed spire.",
      "Much is only hinted at with light strokes."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfelbstr": {
    "text": [
      "Through an old stone arch one looks onto the river and the far bank.",
      "Barrels and crates lie beside the road."
    ],
    "fact": "1799. Hamburger Kunsthalle."
  },
  "cftrees": {
    "text": [
      "Two tall leafy trees grow close together.",
      "With pen and brush Friedrich gave each cluster of leaves light and shade."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfclouds": {
    "text": [
      "A sketchbook page shows nothing but clouds in fine outline.",
      "Friedrich watched the sky as closely as trees and rocks."
    ],
    "fact": "1799. Kupferstichkabinett, Berlin."
  },
  "cfflatruegen": {
    "text": [
      "The view reaches over flat fields and hedges to the horizon.",
      "A fine grid helped Friedrich to draw the wide expanse exactly."
    ],
    "fact": "1801. Hamburger Kunsthalle."
  },
  "cfziehbrunnen": {
    "text": [
      "A hill runs diagonally across the sheet; on the right stands a cottage with a draw well.",
      "At the upper left Friedrich noted the date."
    ],
    "fact": "1802. Pomeranian State Museum, Greifswald."
  },
  "cfselfarm": {
    "text": [
      "Friedrich rests his head on his hand and holds a drawing pen.",
      "Beside him a window with plants opens."
    ],
    "fact": "c. 1802. Hamburger Kunsthalle."
  },
  "cfarkonasun": {
    "text": [
      "The sun fills the coast of Rügen with warm light.",
      "A boat lies on the shore, and trees lean in the wind."
    ],
    "fact": "1803. Hamburger Kunsthalle."
  },
  "cfsteg": {
    "text": [
      "A narrow footbridge crosses a river, with tall poplars behind.",
      "Friedrich etched this sheet himself."
    ],
    "fact": "c. 1800. Metropolitan Museum of Art, New York."
  },
  "cfruegenbay": {
    "text": [
      "Beyond hills and fields a wide bay of the sea gleams.",
      "The sky fills more than half of the picture."
    ],
    "fact": "1802. Klassik Stiftung Weimar."
  },
  "cfpilgrim": {
    "text": [
      "A long procession moves over a hill towards a cross.",
      "The sepia lets the landscape dissolve in a bright morning haze."
    ],
    "fact": "c. 1805. Klassik Stiftung Weimar."
  },
  "cfmadonna": {
    "text": [
      "A small statue of the Madonna stands on a rock above fir trees.",
      "The mist separates the layers of forest."
    ],
    "fact": "c. 1804. Art Institute of Chicago."
  },
  "cfshepherd": {
    "text": [
      "A shepherd stands with his flock above the sea.",
      "The sky is almost empty and bright."
    ],
    "fact": "c. 1806. Metropolitan Museum of Art, New York."
  },
  "cfarkonamoon": {
    "text": [
      "The moon rises over the sea, and the coast lies in darkness.",
      "Fishing nets hang on the shore to dry."
    ],
    "fact": "c. 1805. Albertina, Vienna."
  },
  "cfdeadoak": {
    "text": [
      "A bare oak stands in the middle of a summer landscape.",
      "Friedrich set life and passing side by side."
    ],
    "fact": "c. 1805. Klassik Stiftung Weimar."
  },
  "cftetschen": {
    "text": [
      "A cross stands among fir trees on a rocky summit, with evening light shining behind.",
      "Friedrich painted a landscape as an altarpiece."
    ],
    "fact": "1807–1808. Dresden State Art Collections."
  },
  "cfdolmen": {
    "text": [
      "Three bare oaks surround an ancient stone grave in the snow.",
      "The grave recalls a distant past."
    ],
    "fact": "1807. Dresden State Art Collections."
  },
  "cfelbtal": {
    "text": [
      "Dark fir trees stand on a hill in front.",
      "Behind them the Elbe valley opens in the morning haze."
    ],
    "fact": "c. 1807. Dresden State Art Collections."
  },
  "cffog": {
    "text": [
      "An anchor lies on the beach, and a boat almost vanishes in the grey fog.",
      "It is one of Friedrich’s first oil paintings."
    ],
    "fact": "c. 1807. Belvedere, Vienna."
  },
  "cffisher": {
    "text": [
      "A fisherman stands by his nets on the flat shore.",
      "Sky and sea blur together in the haze."
    ],
    "fact": "c. 1807. Belvedere, Vienna."
  },
  "cfbohemia": {
    "text": [
      "A single blue mountain rises above a dark plain.",
      "The sky passes from pale yellow into clear blue."
    ],
    "fact": "c. 1808. Staatsgalerie Stuttgart."
  },
  "cfmorningfog": {
    "text": [
      "Mist rises from the valley and wraps around a mountain peak.",
      "A small cross can be seen on top of the rock."
    ],
    "fact": "1808. Heidecksburg State Museum, Rudolstadt."
  },
  "cfmonk": {
    "text": [
      "A small figure stands on the shore before the dark sea and a vast sky.",
      "Hardly anyone had painted a landscape so empty before."
    ],
    "fact": "1808–1810. Alte Nationalgalerie, Berlin."
  },
  "cfoakabbey": {
    "text": [
      "Among bare oaks stands the ruin of a Gothic church in the evening light.",
      "Above it the thin crescent of the moon appears."
    ],
    "fact": "1809–1810. Alte Nationalgalerie, Berlin."
  },
  "cfrainbow": {
    "text": [
      "A rainbow arches over a dark mountain.",
      "In front a traveller sits on a rock."
    ],
    "fact": "c. 1810. Museum Folkwang, Essen."
  },
  "cfself10": {
    "text": [
      "With beard and curls, Friedrich looks at us seriously and intently.",
      "The fine chalk drawing dates from the year of his success in Berlin."
    ],
    "fact": "c. 1810. Kupferstichkabinett, Berlin."
  },
  "cfnewmoon": {
    "text": [
      "The thin crescent moon hangs above the blue ridges of the mountains.",
      "The sheet combines watercolour and pencil."
    ],
    "fact": "c. 1810. National Gallery of Art, Washington."
  },
  "cfriesenmorning": {
    "text": [
      "A rock with a cross rises above a sea of ridges.",
      "Friedrich painted the picture after his walk with Kersting."
    ],
    "fact": "1810–1811. Prussian Palaces and Gardens Foundation, Berlin."
  },
  "cfwarmbrunn": {
    "text": [
      "Beyond green meadows and woods, blue mountain ridges rise.",
      "The highest peak lies in the light."
    ],
    "fact": "c. 1810. Pushkin Museum, Moscow."
  },
  "cfharz": {
    "text": [
      "Steep rock walls and trees enclose a narrow gorge.",
      "The walk through the Harz in 1811 gave Friedrich many such motifs."
    ],
    "fact": "c. 1811. Pomeranian State Museum, Greifswald."
  },
  "cfwinterlon": {
    "text": [
      "In the snow a man rests against a rock before young fir trees.",
      "In the mist behind, a Gothic church appears."
    ],
    "fact": "1811. National Gallery, London."
  },
  "cfwinterchurch": {
    "text": [
      "Fir trees stand in the snow, and a church rises from the haze behind them.",
      "The picture is a companion to the winter landscape in London."
    ],
    "fact": "1811. Museum of Art and Cultural History, Dortmund."
  },
  "cfcrosswood": {
    "text": [
      "Among tall fir trees a cross stands by a spring.",
      "Bright light falls between the trunks."
    ],
    "fact": "c. 1812. Staatsgalerie Stuttgart."
  },
  "cfheroes": {
    "text": [
      "Old tombs stand in a rocky gorge; one is dedicated to a hero of freedom.",
      "Friedrich painted the picture during the occupation by Napoleon."
    ],
    "fact": "1812. Hamburger Kunsthalle."
  },
  "cfchasseur": {
    "text": [
      "A lone French soldier stands before a dense, snowy forest of firs.",
      "A raven sits on a tree stump."
    ],
    "fact": "1813–1814. Private collection."
  },
  "cfcrossbaltic": {
    "text": [
      "A tall cross stands on rocks by the sea against the evening sky.",
      "Ships can be seen on the horizon."
    ],
    "fact": "1815. Prussian Palaces and Gardens Foundation, Berlin."
  },
  "cfharbour": {
    "text": [
      "Large sailing ships lie still in the harbour, and the sky glows yellow.",
      "The Prussian king bought the picture in 1816 for the crown prince."
    ],
    "fact": "1815–1816. Prussian Palaces and Gardens Foundation, Berlin."
  },
  "cftwomen": {
    "text": [
      "Two men stand on stones by the shore, looking at the sea in the twilight.",
      "They turn their backs to us."
    ],
    "fact": "1817. Alte Nationalgalerie, Berlin."
  },
  "cfafterstorm": {
    "text": [
      "A boat lies tilted among rocks on the shore, its mast pointing slantwise into the sky.",
      "The sea is calm again."
    ],
    "fact": "1817. SMK – National Gallery of Denmark, Copenhagen."
  },
  "cfgreifsmoon": {
    "text": [
      "Behind fishing nets on the meadow the towers of Greifswald stand out.",
      "The moon hangs above the painter’s home town."
    ],
    "fact": "c. 1817. National Museum, Oslo."
  }
});
})();
