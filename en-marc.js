// v10.35 EN Franz Marc Lebensweg, promoted from the story chapter.
(function () {
  var P = window.EN = window.EN || {};
  P.museums = Object.assign(P.museums || {}, {});
  P.works = Object.assign(P.works || {}, {
  "grazing": {
    "title": "Grazing Horses I",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "bluehorse": {
    "title": "Blue Horse I",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "largeblue": {
    "title": "The Large Blue Horses",
    "museum": "Walker Art Center, Minneapolis"
  },
  "tiger": {
    "title": "The Tiger",
    "museum": "Städtische Galerie im Lenbachhaus, Munich"
  },
  "foxes": {
    "title": "The Foxes",
    "museum": "Current location not publicly confirmed"
  },
  "fate": {
    "title": "Fate of the Animals",
    "museum": "Kunstmuseum Basel"
  },
  "deer": {
    "title": "Deer in the Forest II",
    "museum": "Staatliche Kunsthalle Karlsruhe"
  },
  "forms": {
    "title": "Fighting Forms",
    "museum": "Pinakothek der Moderne, Munich"
  }
});
  P.paths = P.paths || {};
  P.paths.marc = {
  "title": "Franz Marc’s Life Journey",
  "life": "1880–1916",
  "part": "Munich and the Blue Rider",
  "subtitle": "A painter’s life in 8 pictures",
  "intro": "Paint your way through the life of Franz Marc: from the horses in natural colours to the glowing blue animals and the almost abstract pictures before the war. Before each picture you learn where he is living and how his art is changing. Every finished picture unlocks the next chapter.",
  "ending": [
    "After his death Maria Marc takes care of the work. Many of the animal pictures later become widely known, above all the blue horses. In the National Socialist period Franz Marc’s art is labelled “degenerate” and removed from German museums. His large picture “The Tower of Blue Horses” has been missing since 1945. What remains are the pictures you have painted here: a path from the grazing horses to the fighting forms, and the idea that colour can be a spiritual force."
  ],
  "epilogue": "After his death Maria Marc takes care of the work. Many of the animal pictures later become widely known, above all the blue horses. In the National Socialist period Franz Marc’s art is labelled “degenerate” and removed from German museums. His large picture “The Tower of Blue Horses” has been missing since 1945. What remains are the pictures you have painted here: a path from the grazing horses to the fighting forms, and the idea that colour can be a spiritual force."
};
  P.stations = Object.assign(P.stations || {}, {
  "marc-grazing": {
    "place": "Sindelsdorf, Upper Bavaria",
    "when": "1910",
    "mapLabel": "Sindelsdorf, Upper Bavaria",
    "intro": [
      "Franz Marc is born in Munich in 1880. His father Wilhelm is a landscape painter, and at first Franz thinks of studying theology. In the end he chooses art after all: in 1901 he enters the Munich Academy of Art. After a journey to Paris he leaves the Academy again and looks for his own path."
    ]
  },
  "marc-bluehorse": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "In December 1910 Franz writes to his new friend, the painter August Macke, a letter about the meaning of colours. Blue, he says, is the male principle, austere and spiritual. Yellow is the female, gentle, cheerful and sensual. Red is matter, brutal and heavy, which must be overcome by blue and yellow."
    ]
  },
  "marc-largeblue": {
    "place": "Sindelsdorf",
    "when": "1911",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "In December 1911 there is a break with the Neue Künstlervereinigung München. Together with Kandinsky, Gabriele Münter and others, Franz opens the first exhibition of the “Blue Rider” editorial group on 18 December at the Thannhauser Gallery."
    ]
  },
  "marc-tiger": {
    "place": "Sindelsdorf",
    "when": "1912",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "In the autumn of 1912 Franz travels to Paris with August Macke. There they meet the painter Robert Delaunay, whose glowing, faceted colours impress them both strongly."
    ]
  },
  "marc-foxes": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "In 1913 Franz Marc’s pictures become bolder still. The forms break into crystals, the colours glow and meet hard against one another. Two foxes seem intertwined; at first one almost has to look for them."
    ]
  },
  "marc-fate": {
    "place": "Sindelsdorf",
    "when": "1913",
    "mapLabel": "Sindelsdorf",
    "intro": [
      "In the same year “Fate of the Animals” is made. Among pointed, threatening forms one recognises animals, in the middle a deer stretching its head far upward. On the back of the picture Franz writes: “And all being is flaming suffering”."
    ]
  },
  "marc-deer": {
    "place": "Ried near Kochel",
    "when": "1914",
    "mapLabel": "Ried near Kochel",
    "intro": [
      "At the beginning of 1914 Franz and Maria move to Ried, not far from Kochel am See. There his last large pictures are made, some still with animals, some already almost without a subject."
    ]
  },
  "marc-forms": {
    "place": "Ried near Kochel",
    "when": "1914",
    "mapLabel": "Ried near Kochel",
    "intro": [
      "In Ried in 1914 Franz paints several pictures that consist almost only of colour and movement: cheerful, playing, fighting and broken forms. In the present picture a glowing red and a deep dark blue collide."
    ]
  }
});
  // v10.42 pathTexts: work texts of the short path (were German fallback before).
  P.pathTexts = Object.assign(P.pathTexts || {}, {
    "grazing": {
      "text": [
        "Franz Marc is born in Munich in 1880. His father Wilhelm is a landscape painter, and at first Franz thinks of studying theology. In the end he chooses art after all: in 1901 he enters the Munich Academy of Art. After a journey to Paris he leaves the Academy again and looks for his own path.",
        "In 1910 he moves with the painter Maria Franck, who later becomes his wife, to Sindelsdorf in Upper Bavaria. There, in the country, he finds his subject: the animals. They seem to him purer and more beautiful than human beings.",
        "In the “Grazing Horses” the animals are still painted in natural browns and yellows. A year later his horses will be blue."
      ],
      "fact": "During his military service Franz Marc learned to ride. That is how he discovered his love of horses, which never left him for the rest of his life."
    },
    "bluehorse": {
      "text": [
        "In December 1910 Franz writes to his new friend, the painter August Macke, a letter about the meaning of colours. Blue, he says, is the male principle, austere and spiritual. Yellow is the female, gentle, cheerful and sensual. Red is matter, brutal and heavy, which must be overcome by blue and yellow.",
        "At the beginning of 1911 he meets Wassily Kandinsky in Munich. The encounter will change his life.",
        "With “Blue Horse I” he puts his colour theory into practice: the horse is no longer brown, but a glowing blue. The colour says something about its nature, not about its coat."
      ],
      "fact": "In the same year “Blue Horse II” is also made. It hangs today in the Kunstmuseum Bern."
    },
    "largeblue": {
      "text": [
        "In December 1911 there is a break with the Neue Künstlervereinigung München. Together with Kandinsky, Gabriele Münter and others, Franz opens the first exhibition of the “Blue Rider” editorial group on 18 December at the Thannhauser Gallery.",
        "Kandinsky later tells how they found the name at the coffee table in Sindelsdorf: both loved blue, Marc the horses, he the riders.",
        "In May 1912 the almanac “The Blue Rider” appears, which Marc and Kandinsky edit together. In these months Franz paints “The Large Blue Horses”: three powerful animals, entirely in his spiritual blue."
      ],
      "fact": "The first Blue Rider exhibition then travelled to several cities, among them Cologne and Berlin."
    },
    "tiger": {
      "text": [
        "In the autumn of 1912 Franz travels to Paris with August Macke. There they meet the painter Robert Delaunay, whose glowing, faceted colours impress them both strongly.",
        "The “Tiger” shows how openly Franz, in this period, takes up the angular forms of Cubism. The animal crouches, tense, between sharp, coloured planes, as if it could spring at any moment.",
        "Shortly before, the picture had been seen at the Sonderbund exhibition in Cologne, one of the important shows of modern art in Germany."
      ],
      "fact": "Franz Marc painted the tiger in 1912 in Sindelsdorf. Today the picture hangs in the Städtische Galerie im Lenbachhaus in Munich."
    },
    "foxes": {
      "text": [
        "In 1913 Franz Marc’s pictures become bolder still. The forms break into crystals, the colours glow and meet hard against one another. Two foxes seem intertwined; at first one almost has to look for them.",
        "In these months he is thinking not only of single animals, but of the great fabric of nature. At the same time he helps in Berlin to prepare the “First German Autumn Salon”, a large international exhibition of modern art.",
        "The “Foxes” belong to the pictures in which the animal is already almost becoming pure form."
      ],
      "fact": "From 1962 the picture belonged to the Museum Kunstpalast in Düsseldorf. In 2022 the city returned it to the heirs of the Jewish collector Kurt Grawi; in March 2022 it was auctioned at Christie’s in London. Its current location has not been publicly confirmed."
    },
    "fate": {
      "text": [
        "In the same year “Fate of the Animals” is made. Among pointed, threatening forms one recognises animals, in the middle a deer stretching its head far upward. On the back of the picture Franz writes: “And all being is flaming suffering”.",
        "The picture hangs in 1913 at the First German Autumn Salon in Berlin. The title “Fate of the Animals” is given to it by his friend Paul Klee.",
        "Later, already in the war, Franz writes to Maria that the picture seems to him like a foreboding of this war: terrible and shattering. He can hardly grasp that he painted it."
      ],
      "fact": "In 1917 the picture was damaged in a fire. Paul Klee restored it two years later."
    },
    "deer": {
      "text": [
        "At the beginning of 1914 Franz and Maria move to Ried, not far from Kochel am See. There his last large pictures are made, some still with animals, some already almost without a subject.",
        "“Deer in the Forest II” shows three deer in a wood of green, blue and red. The animals look calm, firmly set into the colours of the forest. It is one of his last animal pictures.",
        "In August 1914 the war begins, and Franz Marc is called up for military service. In September his friend August Macke is killed. The loss strikes him deeply."
      ],
      "fact": "In a letter from the field in 1915 Franz wrote that he had early on found human beings ugly, and the animal more beautiful and purer. Then he had discovered so much that was adverse in the animal as well that his pictures had of themselves become more and more abstract."
    },
    "forms": {
      "text": [
        "In Ried in 1914 Franz paints several pictures that consist almost only of colour and movement: cheerful, playing, fighting and broken forms. In the present picture a glowing red and a deep dark blue collide.",
        "The war interrupts this work. On 4 March 1916 Franz Marc is hit by a shell splinter on a reconnaissance ride near Verdun. He is only 36 years old.",
        "Maria later has him brought to Kochel am See. There he lies buried to this day, not far from the landscape in which so many of his pictures were made."
      ],
      "fact": "In 1986 the Franz Marc Museum was opened in Kochel am See. It shows works by him and by artist friends from the circle of the Blue Rider."
    }
  });
})();
