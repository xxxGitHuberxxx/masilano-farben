// v10.35 short Lebensweg for Leonardo da Vinci. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "ermine",
    "title": "Dame mit dem Hermelin",
    "artist": "Leonardo da Vinci",
    "year": "um 1489–1491",
    "museum": "Muzeum Książąt Czartoryskich, Krakau",
    "source": "Wikimedia Commons: «Lady with an Ermine - Leonardo da Vinci - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "monalisa",
    "title": "Mona Lisa",
    "artist": "Leonardo da Vinci",
    "year": "um 1503–1506",
    "museum": "Musée du Louvre, Paris",
    "source": "Wikimedia Commons: «Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "leonardo",
  "name": "Leonardo da Vinci",
  "title": "Leonardo da Vincis Lebensweg",
  "life": "1452–1519",
  "part": "Ein kurzer Weg · Florenz und Mailand",
  "subtitle": "Zwei Bildnisse",
  "cover": "monalisa",
  "intro": "Leonardo sucht in Florenz und Mailand das leise Licht auf Gesichtern. Die Dame mit dem Hermelin und die Mona Lisa gehören zu den bekanntesten Bildnissen der Welt.",
  "ending": [
    "Leonardo stirbt 1519 in Amboise. Ein späterer Teil kann weitere Studien und Bilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Studien nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "leonardo1",
      "place": "Florenz und Mailand",
      "when": "um 1489–1506",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Florenz und Mailand",
      "intro": [
        "Leonardo sucht in Florenz und Mailand das leise Licht auf Gesichtern. Die Dame mit dem Hermelin und die Mona Lisa gehören zu den bekanntesten Bildnissen der Welt."
      ],
      "works": [
        {
          "pid": "ermine",
          "text": [
            "Das junge Mädchen ist Cecilia Gallerani, eine gebildete Dame am Hof von Mailand.",
            "Der Hermelin auf ihrem Arm war ein Symbol für Reinheit – und ein Wortspiel auf ihren Namen."
          ],
          "fact": "Leonardo arbeitete damals für den Herzog Ludovico Sforza in Mailand. Cecilia war eine der klügsten Frauen an diesem Hof."
        },
        {
          "pid": "monalisa",
          "text": [
            "Eine Frau sitzt vor einer weiten, etwas geheimnisvollen Landschaft und blickt uns an.",
            "Ihr leichtes Lächeln hat das Bild weltberühmt gemacht."
          ],
          "fact": "Leonardo nahm das Bild mit nach Frankreich, als er an den Hof von König Franz I. ging. Deshalb hängt es heute im Louvre und nicht in Italien."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
