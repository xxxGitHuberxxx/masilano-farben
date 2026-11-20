// v10.35 short Lebensweg for Edgar Degas. Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "degas",
    "title": "Die Tanzklasse",
    "artist": "Edgar Degas",
    "year": "1873–1876",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Edgar Degas - The Ballet Class - Google Art Project.jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "etoile",
    "title": "Der Stern",
    "artist": "Edgar Degas",
    "year": "um 1876–1877",
    "museum": "Musée d’Orsay, Paris",
    "source": "Wikimedia Commons: «Edgar Degas - Ballet (L'Étoile).jpg», gemeinfrei (Public Domain)"
  },
  {
    "id": "bluedance",
    "title": "Blaue Tänzerinnen",
    "artist": "Edgar Degas",
    "year": "1898",
    "museum": "Puschkin-Museum, Moskau",
    "source": "Wikimedia Commons: «Edgar Degas - Blue Dancers (1898 Pushkin Museum).jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "degas",
  "name": "Edgar Degas",
  "title": "Edgar Degas’ Lebensweg",
  "life": "1834–1917",
  "part": "Ein kurzer Weg · Paris",
  "subtitle": "Tänzerinnen",
  "cover": "degas",
  "intro": "Degas beobachtet in Paris die Oper, die Probe und den Augenblick der Bewegung. Drei Bilder führen von der Tanzklasse über den Stern bis zu den blauen Tänzerinnen.",
  "ending": [
    "Degas stirbt 1917 in Paris. Ein späterer Teil kann Pferde, Porträts und weitere Tanzbilder nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Tanzbilder nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "degas1",
      "place": "Paris",
      "when": "1873–1898",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Paris",
      "intro": [
        "Degas beobachtet in Paris die Oper, die Probe und den Augenblick der Bewegung. Drei Bilder führen von der Tanzklasse über den Stern bis zu den blauen Tänzerinnen."
      ],
      "works": [
        {
          "pid": "degas",
          "text": [
            "Junge Tänzerinnen warten auf ihren Einsatz, während der Ballettmeister mit seinem Stock den Takt angibt."
          ],
          "fact": "Der Ballettmeister ist Jules Perrot, früher selbst ein berühmter Tänzer."
        },
        {
          "pid": "etoile",
          "text": [
            "Eine Tänzerin schwebt auf der Spitze, den Kopf zurückgelegt, den Arm weit geöffnet.",
            "Um sie herum verschwimmen Bühne und Kolleginnen – der Blick ist nur für diesen einen, hellen Moment da."
          ],
          "fact": "Das Modell war vermutlich die spanische Tänzerin Rosita Mauri."
        },
        {
          "pid": "bluedance",
          "text": [
            "Vier Tänzerinnen rücken sich die Kostüme und das Haar zurecht, dicht zusammengedrängt, fast ohne Bühne.",
            "Degas zeigt nicht den Applaus, sondern den Moment kurz davor."
          ],
          "fact": "Das Blatt hängt im Puschkin-Museum in Moskau und gehört zu seinen späten, besonders farbstarken Pastellen."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
