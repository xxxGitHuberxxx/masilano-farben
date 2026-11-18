// v10.24 English content for Marie Egner’s life journey, Part 1 (1850–1940).
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Privatsammlung": "Private collection",
  "Belvedere, Wien": "Belvedere, Vienna"
});
  EN.works = Object.assign(EN.works || {}, {
  "mgnauders": {
    "title": "View in Nauders",
    "museum": "Private collection"
  },
  "mgwindbruch": {
    "title": "Windfall",
    "museum": "Private collection"
  },
  "mgdonau": {
    "title": "In the Danube Meadows",
    "museum": "Private collection"
  },
  "mgheu": {
    "title": "Haystacks",
    "museum": "Private collection"
  },
  "mgatelier": {
    "title": "View from the Studio in the Klagbaumgasse",
    "museum": "Private collection"
  },
  "mgcapri": {
    "title": "Monastery Courtyard on Capri",
    "museum": "Private collection"
  },
  "mgarbe": {
    "title": "Arbe (Rab)",
    "museum": "Private collection"
  },
  "mgazaleen": {
    "title": "Azaleas at the Window",
    "museum": "Private collection"
  },
  "mgtorre": {
    "title": "Torre del Greco",
    "museum": "Private collection"
  },
  "mgmoedling": {
    "title": "Brick Bridge with a Stone Figure in Mödling",
    "museum": "Private collection"
  },
  "mgbretagne": {
    "title": "Evening in Brittany",
    "museum": "Private collection"
  },
  "mgpergola": {
    "title": "In the Pergola",
    "museum": "Belvedere, Vienna"
  },
  "mgrosen": {
    "title": "Roses in Bloom",
    "museum": "Private collection"
  },
  "mgsonnen": {
    "title": "Sunflowers and Hut at Treffenboden",
    "museum": "Private collection"
  },
  "mggastein": {
    "title": "Old Mill in Gastein",
    "museum": "Private collection"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.egner = {
  "title": "Marie Egner’s Life Journey",
  "life": "1850–1940",
  "part": "Part 1 · Gardens, coasts and light",
  "subtitle": "From Nauders to Gastein",
  "intro": "Travel with Marie Egner, the Austrian painter of landscapes and flowers: from her first studies in Tyrol, through the Danube meadows and her studio in Vienna, to the coasts of Italy and Dalmatia and the gardens of her long life. Short stations and pictures to colour. This first part follows her light.",
  "ending": [
    "Marie Egner dies in Vienna on 31 March 1940, shortly after her ninetieth birthday. For almost sixty years she painted outdoors in front of nature.",
    "The path can grow further. More gardens and travel pictures may follow in a later part."
  ],
  "epilogue": "On 31 March 1940 Egner dies in Vienna. A later part can add further gardens."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "mgjung": {
    "place": "Radkersburg, Graz and Tyrol · Apprenticeship",
    "when": "1850–1881",
    "mapLabel": "Nauders",
    "intro": [
      "Marie Egner is born in Radkersburg in Styria on 25 March 1850. She trains in Graz and in Düsseldorf.",
      "In Tyrol she paints her first mountain villages."
    ]
  },
  "mgschindler": {
    "place": "With Schindler in Vienna",
    "when": "1882–1890",
    "mapLabel": "Vienna",
    "intro": [
      "From 1882 Egner studies with Emil Jakob Schindler. She paints outdoors with him, in woods, meadows and fields.",
      "Later she has her own studio in Vienna."
    ]
  },
  "mgsueden": {
    "place": "Journeys south",
    "when": "1890–1898",
    "mapLabel": "South",
    "intro": [
      "Egner travels to Capri, the Bay of Naples and the Adriatic. The southern light makes her colours brighter.",
      "At home in Vienna she paints flowers at the window."
    ]
  },
  "mggarten": {
    "place": "Gardens and paths",
    "when": "1899–1912",
    "mapLabel": "Gardens",
    "intro": [
      "Around 1900 Egner is a well-known painter and exhibits in Vienna. She paints bridges, pergolas and roses.",
      "A journey to Brittany also brings new subjects."
    ]
  },
  "mgspaet": {
    "place": "Late years in the mountains",
    "when": "1914–1940",
    "mapLabel": "Gastein",
    "intro": [
      "In old age too Egner paints outdoors, in the mountains and the Gastein valley.",
      "She dies in Vienna on 31 March 1940."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "mgnauders": {
    "text": [
      "In the Tyrolean mountain village of Nauders Egner paints houses, meadows and slopes in summer light. She is thirty and has trained in Graz and Düsseldorf.",
      "She is still looking for her own way."
    ],
    "fact": "1881. Private collection."
  },
  "mgwindbruch": {
    "text": [
      "Fallen trunks lie in the wood, new green already growing between them. Egner paints nature as it is.",
      "Since 1882 she has been studying with Emil Jakob Schindler."
    ],
    "fact": "c. 1884. Private collection."
  },
  "mgdonau": {
    "text": [
      "Water, willows and reeds form the quiet world of the Danube meadows. The light is silvery and soft.",
      "Like her teacher Schindler, Egner seeks the quiet mood."
    ],
    "fact": "c. 1885. Private collection."
  },
  "mgheu": {
    "text": [
      "Haystacks stand in the mown meadow, the sky high and bright. Simple shapes, plenty of air.",
      "Egner paints outdoors, directly in front of the subject."
    ],
    "fact": "c. 1885. Private collection."
  },
  "mgatelier": {
    "text": [
      "From the window of her Vienna studio Egner looks onto roofs, courtyards and trees. The picture is a private view of her city.",
      "Later she also teaches women painters here herself."
    ],
    "fact": "c. 1890. Private collection."
  },
  "mgcapri": {
    "text": [
      "In a monastery courtyard on Capri bright light falls on white walls and plants. Egner travels south.",
      "Her colours become warmer and clearer."
    ],
    "fact": "1890. Private collection."
  },
  "mgarbe": {
    "text": [
      "The island of Arbe, today Rab, lies in the Adriatic off the Dalmatian coast. Egner paints town, sea and sky.",
      "The Mediterranean remains the goal of many journeys."
    ],
    "fact": "1890. Private collection."
  },
  "mgazaleen": {
    "text": [
      "Flowering azaleas stand at the window, daylight shining through the blossoms. Flowers become a major subject.",
      "Egner paints them with the same care as landscapes."
    ],
    "fact": "c. 1895. Private collection."
  },
  "mgtorre": {
    "text": [
      "Torre del Greco lies on the Bay of Naples below Vesuvius. Houses and boats stand in the bright midday light.",
      "Egner travels to Italy several times."
    ],
    "fact": "c. 1898. Private collection."
  },
  "mgmoedling": {
    "text": [
      "A small brick bridge crosses a stream in Mödling, a stone figure stands at its edge. Trees cast shadows.",
      "Egner often finds her subjects close to Vienna."
    ],
    "fact": "1899. Private collection."
  },
  "mgbretagne": {
    "text": [
      "In Brittany evening sinks over land and water. The colours grow deep and calm.",
      "At almost sixty Egner still travels far."
    ],
    "fact": "1907. Private collection."
  },
  "mgpergola": {
    "text": [
      "Beneath a pergola sunlight falls through leaves and blossoms onto the path. The space is full of green and golden patches.",
      "The picture belongs to the Belvedere in Vienna."
    ],
    "fact": "1910. Belvedere, Vienna."
  },
  "mgrosen": {
    "text": [
      "Roses bloom in every shade from white to red. Egner paints them fresh and loose.",
      "In old age gardens become her favourite subject."
    ],
    "fact": "1912. Private collection."
  },
  "mgsonnen": {
    "text": [
      "Tall sunflowers stand before a wooden hut, green slopes behind. Yellow and brown glow in the summer light.",
      "Egner is now over sixty and paints with strong colours."
    ],
    "fact": "1914. Private collection."
  },
  "mggastein": {
    "text": [
      "An old mill stands in the Gastein valley among trees and mountains. Egner paints the picture at eighty-three.",
      "She stays with landscape into great old age."
    ],
    "fact": "1933. Private collection."
  }
});
})();
