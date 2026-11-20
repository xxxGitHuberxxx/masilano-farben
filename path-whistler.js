// v10.35 short Lebensweg for James McNeill Whistler. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "whistler",
    "title": "Arrangement in Grau und Schwarz Nr. 1",
    "artist": "James McNeill Whistler",
    "year": "1871",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «James Abbott McNeill Whistler - Portrait of the Artist's Mother - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "whistler",
  "name": "James McNeill Whistler",
  "title": "James McNeill Whistlers Lebensweg",
  "life": "1834–1903",
  "part": "Ein kurzer Weg · Paris und London",
  "subtitle": "Die Mutter",
  "cover": "whistler",
  "intro": "Whistler sucht in Paris und London die ruhige Fläche, fast wie Musik. Das Bild der Mutter, «Arrangement in Grau und Schwarz», ist schlicht und feierlich.",
  "ending": [
    "Whistler stirbt 1903 in London. Ein späterer Teil kann Nocturnes und weitere Bildnisse nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Bilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "whistler1",
      "place": "Paris und London",
      "when": "1871",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris und London",
      "intro": [
        "Whistler sucht in Paris und London die ruhige Fläche, fast wie Musik. Das Bild der Mutter, «Arrangement in Grau und Schwarz», ist schlicht und feierlich."
      ],
      "works": [
        {
          "pid": "whistler",
          "text": [
            "Whistler malte seine Mutter Anna im Profil, sitzend in einem grauen Raum.",
            "Er nannte das Bild bewusst ein «Arrangement»: Ihm ging es um Flächen, Linien und Töne, nicht um ein typisches Porträt."
          ],
          "fact": "Schnell bekam das Bild den Beinamen «Whistlers Mutter» und wurde zu einem der bekanntesten amerikanischen Gemälde."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
