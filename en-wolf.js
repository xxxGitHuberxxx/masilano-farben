// v10.23 English content for Caspar Wolf’s life journey, Part 1 (1735–1783).
(function () {
  var EN = window.EN = window.EN || {};
  EN.museums = Object.assign(EN.museums || {}, {
  "Standort ohne Angabe": "Location not recorded",
  "Privatsammlung": "Private collection"
});
  EN.works = Object.assign(EN.works || {}, {
  "cwruine": {
    "title": "Rocky Landscape with Hunter and Castle Ruin",
    "museum": "Private collection"
  },
  "cwbauernhof": {
    "title": "Landscape with Farmhouse",
    "museum": "Location not recorded"
  },
  "cwgletscher": {
    "title": "The Lower Grindelwald Glacier",
    "museum": "Kunst Museum Winterthur"
  },
  "cwsteg": {
    "title": "Wooden Bridge over the Lütschine",
    "museum": "Kunst Museum Winterthur"
  },
  "cwstaubbach": {
    "title": "The Second Staubbach Falls in Winter",
    "museum": "Location not recorded"
  },
  "cwlauteraar": {
    "title": "The Lauteraar Glacier",
    "museum": "Kunstmuseum Basel"
  },
  "cwhoehle": {
    "title": "Rock Cave with Waterfall",
    "museum": "Kunsthaus Zürich"
  },
  "cwseelisberg": {
    "title": "View from Seelisberg over Lake Uri",
    "museum": "Private collection"
  },
  "cwmuota": {
    "title": "Bridge over the Muota near Schwyz",
    "museum": "Private collection"
  },
  "cwrhone": {
    "title": "The Rhône near Gletsch",
    "museum": "Private collection"
  },
  "cwgelten": {
    "title": "The Geltenschuss in the Lauenen Valley",
    "museum": "National Gallery, London"
  },
  "cwseeberg": {
    "title": "View across Lake Seeberg",
    "museum": "Private collection"
  },
  "cwbechburg": {
    "title": "Neu-Bechburg Castle near Oensingen",
    "museum": "Private collection"
  }
});
  EN.paths = EN.paths || {};
  EN.paths.wolf = {
  "title": "Caspar Wolf’s Life Journey",
  "life": "1735–1783",
  "part": "Part 1 · The first painter of the high Alps",
  "subtitle": "Glaciers, caves and waterfalls",
  "intro": "Travel with Caspar Wolf from Muri in Aargau, one of the first to paint the high Alps on the spot: from early landscapes, via the glaciers of Grindelwald and the caves and waterfalls, to the Lauenen valley. Short stations and pictures to colour. This first part follows him into the mountains.",
  "ending": [
    "Caspar Wolf dies in Heidelberg on 6 October 1783, aged forty-eight. His pictures of the high Alps were far ahead of their time.",
    "The path can grow further. More glaciers, bridges and views may follow in a later part."
  ],
  "epilogue": "On 6 October 1783 Wolf dies in Heidelberg. A later part can add further Alpine pictures."
};
  EN.stations = Object.assign(EN.stations || {}, {
  "cwmuri": {
    "place": "Muri and years of travel",
    "when": "1735–1773",
    "mapLabel": "Muri",
    "intro": [
      "Caspar Wolf is born in Muri in Aargau on 3 May 1735. He trains in Constance, Augsburg and Munich and later works in Paris.",
      "Back in Switzerland he first paints invented landscapes."
    ]
  },
  "cwgrindel": {
    "place": "Grindelwald and Lauterbrunnen",
    "when": "1774–1775",
    "mapLabel": "Grindelwald",
    "intro": [
      "In 1774 the Bern publisher Abraham Wagner commissions him to paint the Alps. Wolf travels to the Oberland with the naturalist Jakob Samuel Wyttenbach.",
      "He paints glaciers, streams and waterfalls on the spot."
    ]
  },
  "cwhoch": {
    "place": "The high Alps",
    "when": "1776",
    "mapLabel": "Grimsel",
    "intro": [
      "In 1776 Wolf climbs to the glaciers of the Grimsel. He paints ice, rock and caves in a world hardly anyone knows.",
      "His pictures are used as models for prints."
    ]
  },
  "cwinner": {
    "place": "Central Switzerland and the Valais",
    "when": "1777–1778",
    "mapLabel": "Uri",
    "intro": [
      "In 1777 and 1778 Wolf travels to Lake Uri, to Schwyz and as far as the Rhône near Gletsch.",
      "Lakes, bridges and river valleys broaden his Alpine pictures."
    ]
  },
  "cwspaet": {
    "place": "Lauenen, the Jura and farewell",
    "when": "1778–1783",
    "mapLabel": "Lauenen",
    "intro": [
      "Around 1778 Wolf paints the Lauenen valley and the foot of the Jura. Then he leaves Switzerland and works in Germany.",
      "In 1783 he dies in Heidelberg, without great fame in his lifetime."
    ]
  }
});
  EN.pathTexts = Object.assign(EN.pathTexts || {}, {
  "cwruine": {
    "text": [
      "A hunter stands among rocks, above him rises a castle ruin. The picture is made shortly after Wolf’s time in Paris.",
      "The landscape is still invented, not seen on the spot."
    ],
    "fact": "1771. Private collection."
  },
  "cwbauernhof": {
    "text": [
      "A farmhouse lies in a quiet green landscape. Here Wolf still paints the lowlands.",
      "A year later his great journey into the Alps begins."
    ],
    "fact": "1773. Location not recorded."
  },
  "cwgletscher": {
    "text": [
      "The ice of the Lower Grindelwald Glacier reaches down into the valley, the Lütschine flows in front. Above stands the Mettenberg.",
      "Wolf paints the glacier on the spot in 1774, which is very unusual at the time."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwsteg": {
    "text": [
      "A narrow wooden bridge crosses the wild Lütschine near Gsteig. Small figures show the scale of nature.",
      "The journey into the Bernese Oberland gives Wolf many new subjects."
    ],
    "fact": "1774. Kunst Museum Winterthur."
  },
  "cwstaubbach": {
    "text": [
      "A waterfall plunges over a rock face, surrounded by ice and snow. Wolf paints the Lauterbrunnen valley in winter.",
      "Hardly any painter before him had shown the Alps in this season."
    ],
    "fact": "c. 1775. Location not recorded."
  },
  "cwlauteraar": {
    "text": [
      "A wide glacier lies between grey mountains, high up in the Grimsel area. People appear only as small dots.",
      "Wolf shows the high Alps as a strange and mighty world."
    ],
    "fact": "1776. Kunstmuseum Basel."
  },
  "cwhoehle": {
    "text": [
      "From a dark rock cave one looks out on a bright waterfall. Light and dark stand sharply side by side.",
      "Caves are among Wolf’s most original subjects."
    ],
    "fact": "1776. Kunsthaus Zürich."
  },
  "cwseelisberg": {
    "text": [
      "From Seelisberg one looks down on Lake Uri towards Altdorf. Steep shores frame the water.",
      "In 1777 Wolf travels to central Switzerland."
    ],
    "fact": "1777. Private collection."
  },
  "cwmuota": {
    "text": [
      "A stone bridge spans the Muota. Water, rock and arch make the picture.",
      "For Wolf, bridges show how people make their way through the mountains."
    ],
    "fact": "1778. Private collection."
  },
  "cwrhone": {
    "text": [
      "The young Rhône flows through a high valley near Gletsch, surrounded by the Gadmerfluh, Tellistock and Wendenstock.",
      "Wolf paints the sources of great rivers in the Alps."
    ],
    "fact": "1778. Private collection."
  },
  "cwgelten": {
    "text": [
      "A waterfall rushes beneath a snow bridge into the Lauenen valley. The picture belongs to the National Gallery in London.",
      "It is today among Wolf’s best-known works."
    ],
    "fact": "c. 1778. National Gallery, London."
  },
  "cwseeberg": {
    "text": [
      "From an alpine pasture one looks across little Lake Seeberg to the mountains. The light is clear and cool.",
      "Wolf also paints the quiet places of the high Alps."
    ],
    "fact": "c. 1778. Private collection."
  },
  "cwbechburg": {
    "text": [
      "Neu-Bechburg Castle stands on a hill at the foot of the Jura. The wide country lies below.",
      "After the Alps Wolf also turns to the Jura."
    ],
    "fact": "1778. Private collection."
  }
});
})();
