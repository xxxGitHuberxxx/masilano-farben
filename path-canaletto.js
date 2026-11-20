// v10.35 short Lebensweg for Giovanni Antonio Canal (Canaletto). Pictures already in the app. No new scans.
(function () {
  var works = [
  {
    "id": "canaletto",
    "title": "Einfahrt in den Canal Grande",
    "artist": "Giovanni Antonio Canal (Canaletto)",
    "year": "um 1730",
    "museum": "Museum of Fine Arts, Houston",
    "source": "Wikimedia Commons: «Canaletto - The Entrance to the Grand Canal, Venice - Google Art Project.jpg», gemeinfrei (Public Domain)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "canaletto",
  "name": "Giovanni Antonio Canal (Canaletto)",
  "title": "Canalettos Lebensweg",
  "life": "1697–1768",
  "part": "Ein kurzer Weg · Venedig",
  "subtitle": "Der Canal Grande",
  "cover": "canaletto",
  "intro": "Canaletto malt Venedig mit klarer Luft und festem Raum. Die Einfahrt in den Canal Grande zeigt die Stadt, wie Reisende sie im 18. Jahrhundert sehen wollten.",
  "ending": [
    "Canaletto stirbt 1768 in Venedig. Ein späterer Teil kann weitere Veduten nachtragen."
  ],
  "epilogue": "Ein späterer Teil kann weitere Veduten nachtragen.",
  "map": {
    "viewBox": "0 0 240 160",
    "lands": [
      "M20,88 C50,56 96,54 138,72 C160,84 152,118 118,128 C76,142 16,126 20,88 Z"
    ]
  },
  "stations": [
    {
      "id": "canaletto1",
      "place": "Venedig",
      "when": "um 1730",
      "map": {
        "x": 120,
        "y": 80
      },
      "mapLabel": "Venedig",
      "intro": [
        "Canaletto malt Venedig mit klarer Luft und festem Raum. Die Einfahrt in den Canal Grande zeigt die Stadt, wie Reisende sie im 18. Jahrhundert sehen wollten."
      ],
      "works": [
        {
          "pid": "canaletto",
          "text": [
            "Wir blicken vom Bacino di San Marco in den Canal Grande: links die Salute-Kirche mit ihrer weissen Kuppel, davor Gondeln und Lastboote, rechts die Paläste der Stadt."
          ],
          "fact": "Canaletto malte solche Veduten für Reisende, die sich an Venedig erinnern wollten. Viele Bilder gingen nach England."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
