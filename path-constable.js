// v10.35 short Lebensweg for John Constable. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "haywain",
    "title": "Der Heuwagen",
    "artist": "John Constable",
    "year": "1821",
    "museum": "The National Gallery, London",
    "source": "Wikimedia Commons: «John Constable - The Hay Wain (1821).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "constable",
  "name": "John Constable",
  "title": "John Constables Lebensweg",
  "life": "1776–1837",
  "part": "Ein kurzer Weg · Suffolk",
  "subtitle": "Der Heuwagen",
  "cover": "haywain",
  "intro": "Constable malt die Landschaft seiner Kindheit in Suffolk, feucht und nah. «Der Heuwagen» von 1821 zeigt eine Furt, den Wagen, den sommerlichen Himmel.",
  "ending": [
    "Constable stirbt 1837 in London. Ein späterer Teil kann weitere Himmel und Flusstäler nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Landschaften nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "constable1",
      "place": "Suffolk",
      "when": "1821",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Suffolk",
      "intro": [
        "Constable malt die Landschaft seiner Kindheit in Suffolk, feucht und nah. «Der Heuwagen» von 1821 zeigt eine Furt, den Wagen, den sommerlichen Himmel."
      ],
      "works": [
        {
          "pid": "haywain",
          "text": [
            "Ein Heuwagen fährt durch den Fluss Stour bei Flatford in Suffolk, ganz in der Nähe der Mühle von Constables Vater.",
            "Links steht ein Haus, das es heute noch gibt."
          ],
          "fact": "Constable malte am liebsten die Landschaft seiner Kindheit. Grosse Anerkennung fand er zuerst in Frankreich, erst später in England."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
