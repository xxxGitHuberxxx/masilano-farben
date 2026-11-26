// v9.4 J. M. W. Turner life journey, Part 1 (1775–1819).
// Appends to PATH_WORKS / PATHS; does not rewrite earlier paths.
// PD/CC0 scans only. Documented facts only; no unverified quotations.
// No nudes or near-nudes; no death-bed or shipwreck-with-bodies images.
(function () {
  var works = [
  {
    "id": "tulambeth",
    "title": "Der Palast des Erzbischofs in Lambeth",
    "artist": "J. M. W. Turner",
    "year": "1790",
    "museum": "Indianapolis Museum of Art",
    "source": "Wikimedia Commons: «A View of the Archbishop's Palace, Lambeth.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuself",
    "title": "Selbstbildnis",
    "artist": "J. M. W. Turner",
    "year": "1791–1793",
    "museum": "Indianapolis Museum of Art",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Self-Portrait - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuavoncliff",
    "title": "Die Mündung des Avon von den Klippen bei Clifton",
    "artist": "J. M. W. Turner",
    "year": "um 1791",
    "museum": "Bristol Museum & Art Gallery",
    "source": "Wikimedia Commons: «J.M.W. Turner - Embouchure de l'Avon vue depuis les falaises de Clifton (1791-1792).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuavongorge",
    "title": "Die Avon-Schlucht und der Hotwell bei Bristol",
    "artist": "J. M. W. Turner",
    "year": "1791–1792",
    "museum": "Bristol Museum & Art Gallery",
    "source": "Wikimedia Commons: «J.M.W. Turner - Gorges de l'Avon et Bristol Hotwell (1791-1792).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tullanthony",
    "title": "Die Abtei Llanthony, Monmouthshire",
    "artist": "J. M. W. Turner",
    "year": "um 1792",
    "museum": "Indianapolis Museum of Art",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Llanthony Abbey, Monmouthshire - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tufishermen",
    "title": "Fischer auf See",
    "artist": "J. M. W. Turner",
    "year": "1796",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Fishermen at Sea - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tulimekiln",
    "title": "Kalkofen in Coalbrookdale",
    "artist": "J. M. W. Turner",
    "year": "um 1797",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Limekiln at Coalbrookdale - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumoonlight",
    "title": "Mondlicht, eine Studie in Millbank",
    "artist": "J. M. W. Turner",
    "year": "1797",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - Moonlight, a Study at Millbank - N00459 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tubuttermere",
    "title": "Der See Buttermere, ein Schauer",
    "artist": "J. M. W. Turner",
    "year": "1798",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Buttermere Lake, with Park of Cromackwater, Cumberland, a Shower - William Turner in Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuconiston",
    "title": "Morgen unter den Coniston Fells, Cumberland",
    "artist": "J. M. W. Turner",
    "year": "1798",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Morning amongst the Coniston Fells, Cumberland - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuambleside",
    "title": "Die alte Mühle in Ambleside",
    "artist": "J. M. W. Turner",
    "year": "1798",
    "museum": "Victoria Gallery & Museum, University of Liverpool",
    "source": "Wikimedia Commons: «Turner's The Old Mill, Ambleside.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuabergavenny",
    "title": "Die Brücke von Abergavenny, Monmouthshire",
    "artist": "J. M. W. Turner",
    "year": "1798",
    "museum": "Sammlung nicht ermittelt",
    "source": "Wikimedia Commons: «Abergavenny Bridge, Monmouthshire Turner.png», Public domain (gemeinfrei)"
  },
  {
    "id": "tuharlech",
    "title": "Die Burg Harlech vom Twgwyn Ferry, Sommerabend",
    "artist": "J. M. W. Turner",
    "year": "1799",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Harlech Castle, from Twgwyn Ferry, Summer's Evening Twilight - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tudolbadarn",
    "title": "Die Burg Dolbadarn, Studie zum Diplomwerk",
    "artist": "J. M. W. Turner",
    "year": "um 1800",
    "museum": "National Library of Wales, Aberystwyth",
    "source": "Wikimedia Commons: «J.M.W. Turner - Dolbadarn Castle - Study for Diploma Picture.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tullanberis",
    "title": "Blick über den See Llanberis zum Snowdon",
    "artist": "J. M. W. Turner",
    "year": "um 1799–1800",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) View across Llanberis Lake toward Snowdon c.1799-1800 - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuaran",
    "title": "Yr Aran und Y Wyddfa",
    "artist": "J. M. W. Turner",
    "year": "um 1799–1800",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Yr Aran and Y Wyddfa - c.1799-1800 - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusnowdon",
    "title": "Snowdon und Dinas Emrys von oberhalb Beddgelert",
    "artist": "J. M. W. Turner",
    "year": "um 1799–1800",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Snowdon and Dinas Emrys from above Beddgelert - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuconway",
    "title": "Die Burg Conway, Nordwales",
    "artist": "J. M. W. Turner",
    "year": "um 1800",
    "museum": "J. Paul Getty Museum, Los Angeles",
    "source": "Wikimedia Commons: «Conway Castle, North Wales, by J. M. W. Turner (Getty 103R80).jpg», CC0 (gemeinfrei)"
  },
  {
    "id": "tubristolcat",
    "title": "Die Kathedrale von Bristol vom College Green",
    "artist": "J. M. W. Turner",
    "year": "1801",
    "museum": "Bristol Museum & Art Gallery",
    "source": "Wikimedia Commons: «J.M.W. Turner - Cathédrale de Bristol vue du College Green (1801).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tutummel",
    "title": "Die Brücke von Tummel, Perthshire",
    "artist": "J. M. W. Turner",
    "year": "1802–1803",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Tummel Bridge, Perthshire - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tutenth",
    "title": "Die zehnte Plage Ägyptens",
    "artist": "J. M. W. Turner",
    "year": "1802",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Tenth plague j m w turner.png», Public domain (gemeinfrei)"
  },
  {
    "id": "tucalais",
    "title": "Der Pier von Calais",
    "artist": "J. M. W. Turner",
    "year": "1803",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner 024.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumontblanc",
    "title": "Der Mont Blanc und der Glacier des Bossons von Chamonix",
    "artist": "J. M. W. Turner",
    "year": "1802",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Mont Blanc and the Glacier des Bossons from above Chamonix, dawn - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuvictory",
    "title": "Die Victory kehrt von Trafalgar zurück",
    "artist": "J. M. W. Turner",
    "year": "um 1806",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Victory Returning from Trafalgar, in Three Positions - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tunewark",
    "title": "Die Abtei Newark",
    "artist": "J. M. W. Turner",
    "year": "1806–1807",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Newark Abbey - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuisleworth",
    "title": "Die Themse mit der Fähre von Isleworth",
    "artist": "J. M. W. Turner",
    "year": "1805",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «JMW Turner, The River Thames with Isleworth Ferry.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuwalton",
    "title": "Die Brücken von Walton",
    "artist": "J. M. W. Turner",
    "year": "1806",
    "museum": "Norwich Castle Museum & Art Gallery",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - Walton Bridges - NWHCM , 2019.253 - Norfolk Museums Collections.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusunrise",
    "title": "Sonne, die durch Dunst aufgeht",
    "artist": "J. M. W. Turner",
    "year": "1807",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner 049.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tumargate",
    "title": "Margate",
    "artist": "J. M. W. Turner",
    "year": "um 1806–1807",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Margate - c.1806-7 - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tusouthall",
    "title": "Der Grand-Junction-Kanal bei der Mühle von Southall",
    "artist": "J. M. W. Turner",
    "year": "1810",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner 014.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuscarboro",
    "title": "Scarborough, Morgen, Jungen beim Krabbenfang",
    "artist": "J. M. W. Turner",
    "year": "um 1810",
    "museum": "Art Gallery of South Australia, Adelaide",
    "source": "Wikimedia Commons: «J.M.W. Turner - Scarborough town and castle- morning- boys catching crabs - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuwhalley",
    "title": "Die Brücke und Abtei von Whalley, Lancashire",
    "artist": "J. M. W. Turner",
    "year": "1811",
    "museum": "Dordrechts Museum",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Whalley Bridge and Abbey, Lancashire, Dyers washing and drying cloth - DM-020-1449 - Dordrechts Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tufrosty",
    "title": "Frostiger Morgen",
    "artist": "J. M. W. Turner",
    "year": "1813",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner (1775-1851) - Frosty Morning - N00492 - National Gallery.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuapullia",
    "title": "Apullia sucht Appullus",
    "artist": "J. M. W. Turner",
    "year": "1814",
    "museum": "Tate, London",
    "source": "Wikimedia Commons: «(Barcelona) Apullia in Search of Appullus 1814 - William Turner - Tate Britain.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tudido",
    "title": "Dido gründet Karthago",
    "artist": "J. M. W. Turner",
    "year": "1815",
    "museum": "National Gallery, London",
    "source": "Wikimedia Commons: «Turner - Dido.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuavernus",
    "title": "Der Averner See, Aeneas und die Sibylle von Cumae",
    "artist": "J. M. W. Turner",
    "year": "1814–1815",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Lake Avernus- Aeneas and the Cumaean Sybil - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuhackfall",
    "title": "Hackfall",
    "artist": "J. M. W. Turner",
    "year": "um 1816",
    "museum": "Wallace Collection, London",
    "source": "Wikimedia Commons: «Hackfall by Turner.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "turainbow",
    "title": "Der Regenbogen: Osterspai und Filsen",
    "artist": "J. M. W. Turner",
    "year": "1817",
    "museum": "Cantor Arts Center, Stanford",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Rainbow- Osterspai and Filsen - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tuandernach",
    "title": "Der römische Turm in Andernach",
    "artist": "J. M. W. Turner",
    "year": "1817",
    "museum": "Isabella Stewart Gardner Museum, Boston",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - The Roman Tower, Andernach - P1e12 - Isabella Stewart Gardner Museum.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tudort",
    "title": "Dort oder Dordrecht: das Paketboot aus Rotterdam in der Flaute",
    "artist": "J. M. W. Turner",
    "year": "1818",
    "museum": "Yale Center for British Art, New Haven",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Dort or Dordrecht- The Dort Packet-Boat from Rotterdam Becalmed - Google Art Project.jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tukirkby",
    "title": "Der Kirchhof von Kirkby Lonsdale",
    "artist": "J. M. W. Turner",
    "year": "um 1818",
    "museum": "Privatsammlung",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Kirkby Lonsdale Churchyard (c.1818).jpg», Public domain (gemeinfrei)"
  },
  {
    "id": "tufirstrate",
    "title": "Ein Linienschiff übernimmt Proviant",
    "artist": "J. M. W. Turner",
    "year": "1818",
    "museum": "The Higgins, Bedford",
    "source": "Wikimedia Commons: «A First Rate Taking in Stores.png», Public domain (gemeinfrei)"
  },
  {
    "id": "tubellrock",
    "title": "Der Leuchtturm von Bell Rock",
    "artist": "J. M. W. Turner",
    "year": "1819",
    "museum": "National Galleries of Scotland, Edinburgh",
    "source": "Wikimedia Commons: «Joseph Mallord William Turner - Bell Rock Lighthouse - Google Art Project.jpg», Public domain (gemeinfrei)"
  }
];
  window.PATH_WORKS = (window.PATH_WORKS || []).concat(works);
  var path = {
  "id": "turner",
  "name": "J. M. W. Turner",
  "title": "J. M. W. Turners Lebensweg",
  "life": "1775–1851",
  "part": "Teil 1 · 1775–1819",
  "subtitle": "Von Covent Garden über die Alpen an den Rhein",
  "cover": "tufishermen",
  "intro": "Joseph Mallord William Turner wird am 23. April 1775 in der Maiden Lane 21 in Covent Garden geboren, als Sohn eines Barbiers, und am 14. Mai in der Kirche St. Paul in Covent Garden getauft. Dieser Weg folgt ihm von den Royal Academy Schools und den frühen Aquarellen über das erste Ölbild 1796, die Aufnahme in die Royal Academy 1802 und die erste Reise auf den Kontinent bis an die Schwelle der Italienreise 1819.",
  "ending": [
    "Im August 1819 bricht Turner zu seiner ersten Reise nach Italien auf.",
    "Im nächsten Teil folgen Venedig, Regen, Dampf und Geschwindigkeit, die Fighting Temeraire und sein Tod am 19. Dezember 1851 in Chelsea."
  ],
  "epilogue": "Im nächsten Teil folgen Venedig, Regen, Dampf und Geschwindigkeit, die Fighting Temeraire und sein Tod am 19. Dezember 1851 in Chelsea.",
  "map": {
    "viewBox": "0 0 200 200",
    "lands": [
      "M68,42 C92,26 116,34 122,62 C126,88 116,112 96,128 C76,140 52,132 48,108 C46,82 52,54 68,42 Z",
      "M132,78 C158,62 184,78 188,110 C184,148 158,166 136,154 C118,140 116,104 132,78 Z"
    ]
  },
  "stations": [
    {
      "id": "tucovent",
      "place": "Covent Garden und die Royal Academy Schools",
      "when": "1775–1793",
      "map": {
        "x": 96,
        "y": 96
      },
      "mapLabel": "London",
      "intro": [
        "Joseph Mallord William Turner wird am 23. April 1775 in der Maiden Lane 21 in Covent Garden geboren, als Sohn des Barbiers William Turner, und am 14. Mai in der Kirche St. Paul in Covent Garden getauft. Der Vater zeigt die frühen Zeichnungen des Jungen in seinem Laden.",
        "1789 arbeitet Turner als Zeichner für Thomas Hardwick und Thomas Malton und tritt am 11. Dezember in die Royal Academy Schools ein. 1790 hängt dort sein erstes Aquarell: der Palast des Erzbischofs in Lambeth. 1791 und 1792 ist er in Bristol und in Südwales."
      ],
      "works": [
        {
          "pid": "tulambeth",
          "text": [
            "Blick über die Themse auf den Palast des Erzbischofs in Lambeth, mit Booten am Ufer und der Stadt im Licht.",
            "Es ist Turners erstes ausgestelltes Aquarell, 1790 an der Royal Academy.",
            "Das Blatt ist im Indianapolis Museum of Art."
          ],
          "fact": "1790. Indianapolis Museum of Art."
        },
        {
          "pid": "tuself",
          "text": [
            "Der junge Turner in einem grünen Rock, mit offenem Kragen und lockigem Haar, blickt den Betrachter an.",
            "Das Indianapolis Museum of Art datiert das Bild in die Jahre 1791 bis 1793."
          ],
          "fact": "1791–1793. Indianapolis Museum of Art."
        },
        {
          "pid": "tuavoncliff",
          "text": [
            "Von den Klippen bei Clifton blickt Turner auf die Mündung des Avon, mit Schiffen auf dem Wasser und einem weiten Himmel.",
            "Das Aquarell entsteht um 1791, auf einer der frühen Reisen nach Bristol, und gehört zum Bristol Museum & Art Gallery."
          ],
          "fact": "um 1791. Bristol Museum & Art Gallery."
        },
        {
          "pid": "tuavongorge",
          "text": [
            "Die Schlucht des Avon bei Bristol, mit dem Hotwell am Ufer und Bäumen vor den Felsen.",
            "Turner hält sich 1791 und 1792 bei der Familie Narraway in Bristol auf.",
            "Das Blatt ist im Bristol Museum & Art Gallery."
          ],
          "fact": "1791–1792. Bristol Museum & Art Gallery."
        },
        {
          "pid": "tullanthony",
          "text": [
            "Die Ruine der Abtei Llanthony liegt in einem grünen Tal in Monmouthshire, unter Wolken und Berghängen.",
            "Das Aquarell entsteht um 1792, auf der Reise durch Südwales.",
            "Es ist im Indianapolis Museum of Art."
          ],
          "fact": "um 1792. Indianapolis Museum of Art."
        }
      ]
    },
    {
      "id": "tufirstoil",
      "place": "Das erste Ölbild und die Themse",
      "when": "1796–1797",
      "map": {
        "x": 110,
        "y": 118
      },
      "mapLabel": "Themse",
      "intro": [
        "1796 stellt Turner an der Royal Academy sein erstes Ölbild aus: Fischer auf See, bei Mondlicht vor der Isle of Wight. Im selben Jahr entsteht ein weiter Blick über die Themse; 1797 folgt eine Mondlichtstudie in Millbank und ein Kalkofen in Coalbrookdale.",
        "1797 reist er in den Norden Englands und in den Lake District. Am See Buttermere zeigt er einen Schauer über dem Wasser, eines der ersten ausgestellten Bilder dieser Reise."
      ],
      "works": [
        {
          "pid": "tufishermen",
          "text": [
            "Bei Mondlicht liegen Fischerboote auf bewegter See vor der Isle of Wight; eine Laterne leuchtet im Boot.",
            "Es ist Turners erstes ausgestelltes Ölbild, 1796 an der Royal Academy.",
            "Es gehört zur Tate in London."
          ],
          "fact": "1796. Tate, London."
        },
        {
          "pid": "tulimekiln",
          "text": [
            "Bei Nacht glüht ein Kalkofen in Coalbrookdale, dem frühen Industriegebiet an der Severn.",
            "Rauch und Feuer stehen gegen den dunklen Himmel.",
            "Das Bild entsteht um 1797 und ist im Yale Center for British Art in New Haven."
          ],
          "fact": "um 1797. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tumoonlight",
          "text": [
            "Der Mond steht über der Themse bei Millbank, mit Booten und einem ruhigen Ufer.",
            "Turner stellt die Studie 1797 an der Royal Academy aus.",
            "Sie ist in der Tate in London."
          ],
          "fact": "1797. Tate, London."
        },
        {
          "pid": "tubuttermere",
          "text": [
            "Ein Schauer geht über den See Buttermere in Cumberland, mit einem Teil von Crummock Water und einem Regenbogen.",
            "Turner stellt das Bild 1798 aus, nach der Reise in den Lake District.",
            "Es ist in der Tate in London."
          ],
          "fact": "1798. Tate, London."
        }
      ]
    },
    {
      "id": "tuwales",
      "place": "Seen, Wales und Associate der Academy",
      "when": "1797–1800",
      "map": {
        "x": 60,
        "y": 74
      },
      "mapLabel": "Wales",
      "intro": [
        "Die Reise von 1797 führt weiter zu den Coniston Fells und nach Ambleside. 1798 und 1799 arbeitet Turner vor allem in Wales: an der Brücke von Abergavenny, an der Burg Harlech und am See Llanberis unter dem Snowdon.",
        "Am 4. November 1799 wird er Associate der Royal Academy und nimmt Räume in der Harley Street 64. Als Diplomwerk malt er die Burg Dolbadarn; die kleinere Studie dazu entsteht um 1800."
      ],
      "works": [
        {
          "pid": "tuconiston",
          "text": [
            "Der Morgen liegt über den Coniston Fells in Cumberland: Licht auf den Hängen, Nebel im Tal.",
            "Das Bild wird 1798 an der Royal Academy ausgestellt und gehört zur Tate in London."
          ],
          "fact": "1798. Tate, London."
        },
        {
          "pid": "tuambleside",
          "text": [
            "Eine Mühle steht am Wasser in Ambleside, im Lake District, mit Felsen und Bäumen.",
            "Das Aquarell von 1798 ist in der Victoria Gallery & Museum der University of Liverpool."
          ],
          "fact": "1798. Victoria Gallery & Museum, University of Liverpool."
        },
        {
          "pid": "tuabergavenny",
          "text": [
            "Eine steinerne Brücke führt über den Usk bei Abergavenny; nach dem Regen reisst der Himmel auf.",
            "Turner stellt das Aquarell 1799 an der Royal Academy aus.",
            "Wo sich diese Fassung heute befindet, ist nicht ermittelt."
          ],
          "fact": "1798. Sammlung nicht ermittelt."
        },
        {
          "pid": "tuharlech",
          "text": [
            "Im Zwielicht eines Sommerabends liegt die Burg Harlech über der Bucht, gesehen vom Twgwyn Ferry.",
            "Das Bild von 1799 ist im Yale Center for British Art in New Haven."
          ],
          "fact": "1799. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tudolbadarn",
          "text": [
            "Auf einem Hügel in Nordwales steht der runde Turm der Burg Dolbadarn.",
            "Diese kleine Ölstudie bereitet das Diplomwerk vor, das Turner der Royal Academy gibt.",
            "Die Studie ist in der National Library of Wales in Aberystwyth."
          ],
          "fact": "um 1800. National Library of Wales, Aberystwyth."
        },
        {
          "pid": "tullanberis",
          "text": [
            "Der Blick geht über den See Llanberis zu den Hängen des Snowdon, unter einem weiten Himmel.",
            "Das Aquarell entsteht um 1799 bis 1800 und ist in der Tate in London."
          ],
          "fact": "um 1799–1800. Tate, London."
        }
      ]
    },
    {
      "id": "tudiploma",
      "place": "Nordwales, Bristol, Schottland, Royal Academician",
      "when": "1800–1802",
      "map": {
        "x": 86,
        "y": 48
      },
      "mapLabel": "RA",
      "intro": [
        "Um 1799 und 1800 zeichnet und malt Turner weiter in Nordwales: Yr Aran und Y Wyddfa, den Snowdon von Beddgelert aus, und die Burg Conway. 1801 ist er in Bristol an der Kathedrale und reist nach Schottland; von dort stammt die Brücke von Tummel in Perthshire.",
        "Im Februar 1802 wird Turner in die Royal Academy aufgenommen. Im selben Jahr stellt er die Zehnte Plage Ägyptens aus, ein grosses Historienbild."
      ],
      "works": [
        {
          "pid": "tuaran",
          "text": [
            "Yr Aran und Y Wyddfa, der walisische Name des Snowdon, liegen in der Ferne über See und Tal.",
            "Das Blatt entsteht um 1799 bis 1800 und gehört zur Tate in London."
          ],
          "fact": "um 1799–1800. Tate, London."
        },
        {
          "pid": "tusnowdon",
          "text": [
            "Von oberhalb Beddgelert sieht man den Snowdon und die Anhöhe Dinas Emrys.",
            "Felsen, Wasser und Wolken bestimmen das Blatt, um 1799 bis 1800.",
            "Es ist in der Tate in London."
          ],
          "fact": "um 1799–1800. Tate, London."
        },
        {
          "pid": "tuconway",
          "text": [
            "Die Burg Conway steht am Wasser in Nordwales, mit Booten und einem belebten Ufer.",
            "Das Aquarell gehört zum J. Paul Getty Museum in Los Angeles."
          ],
          "fact": "um 1800. J. Paul Getty Museum, Los Angeles."
        },
        {
          "pid": "tubristolcat",
          "text": [
            "Die gotische Kathedrale von Bristol erhebt sich über dem College Green, unter einem wolkenreichen Himmel.",
            "Turner malt die Ansicht 1801.",
            "Sie ist im Bristol Museum & Art Gallery."
          ],
          "fact": "1801. Bristol Museum & Art Gallery."
        },
        {
          "pid": "tutummel",
          "text": [
            "Eine steinerne Bogenbrücke überspannt den Tummel in Perthshire, nach der Schottlandreise von 1801.",
            "Das Bild entsteht 1802 bis 1803 und ist im Yale Center for British Art in New Haven."
          ],
          "fact": "1802–1803. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tutenth",
          "text": [
            "Unter einem dunklen Himmel liegt eine Stadt in Ägypten; im Vordergrund trauern Gestalten.",
            "Turner stellt das Historienbild 1802 an der Royal Academy aus, im Jahr seiner Aufnahme.",
            "Es ist in der Tate in London."
          ],
          "fact": "1802. Tate, London."
        }
      ]
    },
    {
      "id": "tualps",
      "place": "Die erste Reise auf den Kontinent",
      "when": "1802–1807",
      "map": {
        "x": 152,
        "y": 130
      },
      "mapLabel": "Alpen",
      "intro": [
        "Vom Juli bis zum Oktober 1802 reist Turner durch Frankreich, Savoyen und die Schweiz; drei Wochen verbringt er im Louvre. In Calais hält er die stürmische Ankunft fest, in Grenoble die Isère mit der Porte de France, in der Schöllenen die Teufelsbrücke, über Chamonix den Mont Blanc im Morgenlicht.",
        "Die Alpen bleiben ihm. 1806 und 1807 malt er den St. Gotthard aus der Erinnerung an diese erste Reise über den Pass."
      ],
      "works": [
        {
          "pid": "tucalais",
          "text": [
            "Boote und der Pier von Calais stehen in schwerer See; der Himmel ist voller Sturm.",
            "Turner kommt 1802 hier an, auf dem Weg in die Schweiz, und stellt das Bild 1803 aus.",
            "Es hängt in der National Gallery in London."
          ],
          "fact": "1803. National Gallery, London."
        },
        {
          "pid": "tumontblanc",
          "text": [
            "Im Morgenlicht liegen der Mont Blanc und der Glacier des Bossons über Chamonix.",
            "Turner erreicht das Tal 1802, auf der Schweizer Reise.",
            "Das Aquarell ist in der Tate in London."
          ],
          "fact": "1802. Tate, London."
        }
      ]
    },
    {
      "id": "tugallery",
      "place": "Eigene Galerie, Trafalgar und die Themse",
      "when": "1804–1807",
      "map": {
        "x": 68,
        "y": 102
      },
      "mapLabel": "Galerie",
      "intro": [
        "Am 15. April 1804 stirbt Turners Mutter. Drei Tage später öffnet er in der Harley Street seine eigene Galerie. 1805 wohnt er in Isleworth, fährt Themse und Wey mit dem Boot und skizziert im Dezember die Victory, die von Trafalgar zurückkehrt.",
        "Es entstehen Blicke auf die Abtei Newark, die Fähre von Isleworth und die Brücken von Walton. 1807 stellt er die Sonne aus, die durch den Dunst über dem Wasser aufgeht."
      ],
      "works": [
        {
          "pid": "tuvictory",
          "text": [
            "Die Victory erscheint in drei Stellungen auf dem Wasser, auf der Rückkehr von Trafalgar.",
            "Turner skizziert das Schiff im Dezember 1805 und malt das Bild um 1806.",
            "Es ist im Yale Center for British Art in New Haven."
          ],
          "fact": "um 1806. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tunewark",
          "text": [
            "Die Ruine der Abtei Newark steht an der Wey in Surrey, mit Kühen am Wasser und Bäumen im Licht.",
            "Turner malt die Ansicht 1806 bis 1807, in den Jahren der Fahrten auf Themse und Wey.",
            "Das Bild ist im Yale Center for British Art in New Haven."
          ],
          "fact": "1806–1807. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tuisleworth",
          "text": [
            "An der Themse bei Isleworth liegt die Fähre, mit Bäumen, Segeln und Figuren am Ufer.",
            "Turner wohnt 1805 in Isleworth und fährt den Fluss mit dem Boot.",
            "Das Aquarell ist in der Tate in London."
          ],
          "fact": "1805. Tate, London."
        },
        {
          "pid": "tuwalton",
          "text": [
            "Zwei Brücken führen bei Walton-on-Thames über den Fluss; im Wasser stehen Kühe.",
            "Turner malt die Ansicht 1806.",
            "Das Bild ist im Norwich Castle Museum & Art Gallery."
          ],
          "fact": "1806. Norwich Castle Museum & Art Gallery."
        },
        {
          "pid": "tusunrise",
          "text": [
            "Die Sonne bricht durch den Dunst über dem Wasser; Fischer säubern und verkaufen den Fang am Ufer.",
            "Turner stellt das Bild 1807 an der Royal Academy aus.",
            "Es hängt in der National Gallery in London."
          ],
          "fact": "1807. National Gallery, London."
        }
      ]
    },
    {
      "id": "tuliber",
      "place": "Liber Studiorum, Margate, Professor",
      "when": "1806–1811",
      "map": {
        "x": 112,
        "y": 64
      },
      "mapLabel": "Margate",
      "intro": [
        "1806 regt William Frederick Wells den Liber Studiorum an, eine Folge von Drucken nach Turners Landschaften. Das erste Heft erscheint am 11. Juni 1807. Am 2. November 1807 wird Turner Professor of Perspective; die erste Vorlesung hält er am 7. Januar 1811.",
        "Er kauft Land in Twickenham und malt in Margate, am Grand-Junction-Kanal und in Scarborough. 1810 entsteht der Sturz einer Lawine in Graubünden, eine Erinnerung an die Alpen, und er richtet sich in der Queen Anne Street 47 ein."
      ],
      "works": [
        {
          "pid": "tumargate",
          "text": [
            "Ein Blick auf Margate an der Küste von Kent, mit Meer, Himmel und der Stadt am Ufer.",
            "Turner kommt seit seiner Jugend hierher; dieses Blatt entsteht um 1806 bis 1807.",
            "Es ist in der Tate in London."
          ],
          "fact": "um 1806–1807. Tate, London."
        },
        {
          "pid": "tusouthall",
          "text": [
            "Eine Mühle steht am Grand-Junction-Kanal bei Southall; ein Wagen und Figuren halten am Ufer, der Himmel ist weit.",
            "Turner malt die Ansicht 1810, in den Jahren um Twickenham.",
            "Das Bild ist in einer Privatsammlung."
          ],
          "fact": "1810. Privatsammlung."
        },
        {
          "pid": "tuscarboro",
          "text": [
            "Am Morgen liegt Scarborough unter dem Schlossberg; am Strand fangen Jungen Krabben, Boote stehen im Flachwasser.",
            "Das Aquarell entsteht um 1810 und ist in der Art Gallery of South Australia in Adelaide."
          ],
          "fact": "um 1810. Art Gallery of South Australia, Adelaide."
        }
      ]
    },
    {
      "id": "tudevon",
      "place": "Devon, Sandycombe Lodge und Historienbilder",
      "when": "1811–1815",
      "map": {
        "x": 66,
        "y": 130
      },
      "mapLabel": "Devon",
      "intro": [
        "1811 reist Turner in den Westen Englands. 1812 und 1813 baut er Sandycombe Lodge in Twickenham, ein Haus für sich und seinen Vater. 1813 ist er in Devon und skizziert in Öl im Freien, an der Mündung des Plym; in demselben Jahr entsteht der Frostige Morgen.",
        "Daneben malt er klassische Themen: Apullia, die ihren Begleiter sucht, Dido, die Karthago gründet, und den Averner See mit Aeneas. 1815 besucht Antonio Canova Turners Galerie."
      ],
      "works": [
        {
          "pid": "tuwhalley",
          "text": [
            "An der Brücke von Whalley in Lancashire waschen und trocknen Färber Tuch; hinter den Bäumen liegt die Abtei.",
            "Turner malt die Ansicht 1811, auf der Reise in den Westen.",
            "Das Bild ist im Dordrechts Museum."
          ],
          "fact": "1811. Dordrechts Museum."
        },
        {
          "pid": "tufrosty",
          "text": [
            "An einem frostigen Morgen stehen eine Kutsche und Figuren auf einer Strasse zwischen kahlen Bäumen, unter blassem Licht.",
            "Turner stellt das Bild 1813 an der Royal Academy aus.",
            "Es ist in der Tate in London."
          ],
          "fact": "1813. Tate, London."
        },
        {
          "pid": "tuapullia",
          "text": [
            "In einer weiten klassischen Landschaft sucht Apullia ihren verwandelten Begleiter Appullus.",
            "Turner stellt das Bild 1814 aus.",
            "Es ist in der Tate in London."
          ],
          "fact": "1814. Tate, London."
        },
        {
          "pid": "tudido",
          "text": [
            "Im Morgenlicht entsteht Karthago: Gebäude am Wasser, Figuren am Ufer, eine grosse Sonne.",
            "Turner stellt das Bild 1815 an der Royal Academy aus.",
            "Es hängt in der National Gallery in London."
          ],
          "fact": "1815. National Gallery, London."
        },
        {
          "pid": "tuavernus",
          "text": [
            "Am Averner See stehen Aeneas und die Sibylle von Cumae, in einer stillen klassischen Landschaft.",
            "Das Bild entsteht 1814 bis 1815 und ist im Yale Center for British Art in New Haven."
          ],
          "fact": "1814–1815. Yale Center for British Art, New Haven."
        }
      ]
    },
    {
      "id": "turhine",
      "place": "Yorkshire, der Rhein und die Schwelle zu Italien",
      "when": "1816–1819",
      "map": {
        "x": 162,
        "y": 90
      },
      "mapLabel": "Rhein",
      "intro": [
        "Um 1816 malt Turner Hackfall in Yorkshire. 1817 reist er durch Belgien und Holland, über das Schlachtfeld von Waterloo und den Rhein; etwa fünfzig Rhein-Aquarelle verkauft er an seinen Förderer Walter Fawkes, darunter den Regenbogen über Osterspai und Filsen und den römischen Turm in Andernach.",
        "1818 stellt er Dort aus, das Paketboot aus Rotterdam in der Flaute. Im selben Jahr entsteht ein Linienschiff, das Proviant übernimmt, und 1819 der Leuchtturm von Bell Rock. Im Januar 1819 erscheinen die letzten Platten des Liber Studiorum. Im August bricht Turner nach Italien auf."
      ],
      "works": [
        {
          "pid": "tuhackfall",
          "text": [
            "Im Wald von Hackfall in Yorkshire fliesst ein Fluss zwischen Bäumen; Figuren gehen am Ufer.",
            "Das Aquarell entsteht um 1816 und ist in der Wallace Collection in London."
          ],
          "fact": "um 1816. Wallace Collection, London."
        },
        {
          "pid": "turainbow",
          "text": [
            "Ein Regenbogen steht über dem Rhein bei Osterspai und Filsen.",
            "Das Aquarell gehört zu den etwa fünfzig Rheinblättern, die Turner 1817 an Walter Fawkes verkauft.",
            "Es ist im Cantor Arts Center in Stanford."
          ],
          "fact": "1817. Cantor Arts Center, Stanford."
        },
        {
          "pid": "tuandernach",
          "text": [
            "Der runde römische Turm von Andernach steht am Rhein, mit Häusern und dem Ufer im Abendlicht.",
            "Auch dieses Blatt von 1817 gehört zu den Rhein-Aquarellen für Fawkes.",
            "Es ist im Isabella Stewart Gardner Museum in Boston."
          ],
          "fact": "1817. Isabella Stewart Gardner Museum, Boston."
        },
        {
          "pid": "tudort",
          "text": [
            "Vor Dordrecht liegt das Paketboot aus Rotterdam in der Flaute, unter einem weiten, feuchten Himmel.",
            "Turner stellt das Bild 1818 an der Royal Academy aus.",
            "Es ist im Yale Center for British Art in New Haven."
          ],
          "fact": "1818. Yale Center for British Art, New Haven."
        },
        {
          "pid": "tukirkby",
          "text": [
            "Vom Kirchhof von Kirkby Lonsdale fällt der Blick ins Tal der Lune, mit Bäumen, Figuren und einem weiten Himmel.",
            "Das Aquarell entsteht um 1818 und befindet sich in einer Privatsammlung."
          ],
          "fact": "um 1818. Privatsammlung."
        },
        {
          "pid": "tufirstrate",
          "text": [
            "Ein Linienschiff ersten Ranges liegt in bewegter See und übernimmt Proviant; kleinere Boote kommen heran.",
            "Das Aquarell von 1818 ist im The Higgins in Bedford."
          ],
          "fact": "1818. The Higgins, Bedford."
        },
        {
          "pid": "tubellrock",
          "text": [
            "In schwerer See steht der Leuchtturm von Bell Rock vor der schottischen Küste, von Wellen umspült.",
            "Turner malt das Aquarell 1819, im Jahr der Abreise nach Italien.",
            "Es ist in den National Galleries of Scotland in Edinburgh."
          ],
          "fact": "1819. National Galleries of Scotland, Edinburgh."
        }
      ]
    }
  ]
};
  window.PATHS = (window.PATHS || []).concat([path]);
})();
