(function () {
  'use strict';
  const ACH_KEY = 'masilano.achievements.v1';
  const DELIGHT_KEY = 'masilano.delight.v1';
  const SETS = {
    lilies: ['lilies','lily1908','lilyaic','lilyblue','lilybridge','lilybs','lilyga2','lilyga431','lilyga462','lilymet2','lilypondga','lilypondnl','lilypool','lilyset','lilytoledo','lilywl'],
    fuji: ['amiura','artistsfuji','ashishiro','chinowa','fujimi','fujimitsui','fujinibon','fujisundai','fujisuri','fujitotomi','fujitsukuda','futomi','gotenyama','kanaya','mikiri','minobu','murasame','oigawafuji','redfuji','sankifuji','thunder','wave'],
    sunflowers: ['sunflowers','sunflowermunich']
  };
  const PATH_IDS = ['vangogh','monet','hokusai','klimt','anker','hodler','cezanne','hiroshige','renoir','pissarro','turner','rembrandt','sisley','friedrich','segantini','vallotton','giacometti','spitzweg','moser'];
  const CATS = ['flowers','landscapes','water','animals','portraits','city'];
  const TROPHY = {
    first:'cup', n10:'cup', n50:'cup',
    n100:'statue', n250:'statue', n500:'statue',
    streak3:'victory', streak7:'victory', streak30:'victory',
    painters3:'badge', painters10:'badge', painters25:'badge',
    vgDelight:'diploma'
  };
  const GROUPS = [
    { id:'start', ach:['first','n10','n50','n100','n250','n500'] },
    { id:'paths', ach: PATH_IDS.reduce(function (a, id) { return a.concat(['path:'+id+':b','path:'+id+':s','path:'+id]); }, []) },
    { id:'faces', ach: (window.MASILANO_FACES ? window.MASILANO_FACES.achRows().map(function (r) { return r.id; }) : []) },
    { id:'streak', ach:['streak3','streak7','streak30'] },
    { id:'collect', ach:['set:lilies:b','set:lilies:s','set:lilies','set:fuji:b','set:fuji:s','set:fuji','set:sunflowers:b','set:sunflowers:s','set:sunflowers','imp:b','imp:s','imp:g'].concat(CATS.reduce(function (a, c) { return a.concat(['cat:'+c+':b','cat:'+c+':s','cat:'+c+':g']); }, [])) },
    { id:'explore', ach:['painters3','painters10','painters25','vgDelight'] }
  ];
  const TEXTS = {
  "de": {
    "title": "Ehrentitel",
    "lead": "Ehrentitel in Bronze, Silber und Gold für Wege, Werkgruppen und Treue.",
    "date": "Verliehen am {d}",
    "progress": "{n} von {N}",
    "lockedAria": "Noch nicht erreicht, {n} von {N}",
    "lockedHint": "Noch zu tun",
    "openHint": "Zu den Trophäen",
    "tier": {
      "bronze": "Bronze",
      "silver": "Silber",
      "gold": "Gold"
    },
    "groups": {
      "start": "Im Atelier",
      "paths": "Malerwege",
      "streak": "Treue",
      "collect": "Sammler",
      "explore": "Entdecker"
    },
    "pathBronze": {
      "n": "Erste Station bei {name}",
      "d": "Schliesse eine Station auf {name} ab.",
      "t": "Die erste Station bei {name} ist vollendet."
    },
    "pathSilver": {
      "n": "Auf halbem Weg mit {name}",
      "d": "Male die Hälfte der Bilder auf {name} fertig.",
      "t": "Der Weg mit {name} ist zur Hälfte geschafft."
    },
    "pathGold": {
      "n": "Den Weg mit {name} vollendet",
      "d": "Male alle Bilder auf {name} fertig.",
      "t": "Der Lebensweg mit {name} ist vollständig."
    },
    "ach": {
      "first": {
        "n": "Erster Pinselstrich",
        "d": "Male dein erstes Bild fertig.",
        "t": "Dein erstes Bild ist fertig."
      },
      "n10": {
        "n": "Geübte Hand",
        "d": "Male zehn Bilder fertig.",
        "t": "Zehn Meisterwerke in deinem Album."
      },
      "n50": {
        "n": "Meister im Atelier",
        "d": "Male fünfzig Bilder fertig.",
        "t": "Fünfzig Meisterwerke."
      },
      "n100": {
        "n": "Hundert Meisterwerke",
        "d": "Male hundert Bilder fertig.",
        "t": "Hundert Meisterwerke."
      },
      "n250": {
        "n": "Grosses Oeuvre",
        "d": "Male zweihundertfünfzig Bilder fertig.",
        "t": "Ein grosses Oeuvre."
      },
      "n500": {
        "n": "Ein Lebenswerk",
        "d": "Male fünfhundert Bilder fertig.",
        "t": "Ein Lebenswerk im Album."
      },
      "streak3": {
        "n": "Treuer Besuch",
        "d": "Male an drei Tagen das Bild des Tages fertig.",
        "t": "Drei Tage mit dem Bild des Tages."
      },
      "streak7": {
        "n": "Eine Woche im Saal",
        "d": "Male an sieben Tagen das Bild des Tages fertig.",
        "t": "Sieben Tage mit dem Bild des Tages."
      },
      "streak30": {
        "n": "Immer im Museum",
        "d": "Male an dreissig Tagen das Bild des Tages fertig.",
        "t": "Dreissig Tage mit dem Bild des Tages."
      },
      "set:lilies:b": {
        "n": "Erste Seerose",
        "d": "Male eine der Seerosen von Monet fertig.",
        "t": "Die erste Seerose ist fertig."
      },
      "set:lilies:s": {
        "n": "Kenner der Seerosen",
        "d": "Male die Hälfte der Seerosen-Bilder fertig.",
        "t": "Die Hälfte der Seerosen ist fertig."
      },
      "set:lilies": {
        "n": "Meister der Seerosen",
        "d": "Male alle Seerosen-Bilder von Monet fertig.",
        "t": "Alle Seerosen von Monet sind fertig."
      },
      "set:fuji:b": {
        "n": "Erster Blick auf den Fuji",
        "d": "Male eine Fuji- oder Wellenansicht fertig.",
        "t": "Der erste Blick auf den Fuji."
      },
      "set:fuji:s": {
        "n": "Kenner des Fuji",
        "d": "Male die Hälfte der Fuji- und Wellenblätter fertig.",
        "t": "Die Hälfte der Fuji-Ansichten ist fertig."
      },
      "set:fuji": {
        "n": "Alle Ansichten des Fuji",
        "d": "Male alle Fuji- und Wellenblätter fertig.",
        "t": "Die Fuji-Ansichten sind vollständig."
      },
      "set:sunflowers:b": {
        "n": "Erste Sonnenblume",
        "d": "Male eine der Sonnenblumen von Van Gogh fertig.",
        "t": "Die erste Sonnenblume ist fertig."
      },
      "set:sunflowers:s": {
        "n": "Unter Sonnenblumen",
        "d": "Male die Hälfte der Sonnenblumen-Bilder fertig.",
        "t": "Unter Van Goghs Sonnenblumen."
      },
      "set:sunflowers": {
        "n": "Van Goghs Sonnenblumen",
        "d": "Male alle Sonnenblumen-Bilder von Van Gogh fertig.",
        "t": "Die Sonnenblumen sind fertig."
      },
      "cat:flowers:b": {
        "n": "Erste Blüte",
        "d": "Male ein Bild der Kategorie Blumen fertig.",
        "t": "Die erste Blüte ist gemalt."
      },
      "cat:flowers:s": {
        "n": "Blütenkenner",
        "d": "Male die Hälfte der Blumen-Bilder fertig.",
        "t": "Die Hälfte der Blumen ist fertig."
      },
      "cat:flowers:g": {
        "n": "Garten voller Blüten",
        "d": "Male alle Bilder der Kategorie Blumen fertig.",
        "t": "Die Kategorie Blumen ist vollständig."
      },
      "cat:landscapes:b": {
        "n": "Erste Landschaft",
        "d": "Male ein Bild der Kategorie Landschaften fertig.",
        "t": "Die erste Landschaft ist gemalt."
      },
      "cat:landscapes:s": {
        "n": "Weite Wege",
        "d": "Male die Hälfte der Landschaften fertig.",
        "t": "Die Hälfte der Landschaften ist fertig."
      },
      "cat:landscapes:g": {
        "n": "Weite Landschaften",
        "d": "Male alle Bilder der Kategorie Landschaften fertig.",
        "t": "Die Kategorie Landschaften ist vollständig."
      },
      "cat:water:b": {
        "n": "Am Ufer",
        "d": "Male ein Bild der Kategorie Meer und Wasser fertig.",
        "t": "Das erste Wasserbild ist gemalt."
      },
      "cat:water:s": {
        "n": "Kenner der Wasser",
        "d": "Male die Hälfte der Wasser-Bilder fertig.",
        "t": "Die Hälfte der Wasser-Bilder ist fertig."
      },
      "cat:water:g": {
        "n": "Meer und Wasser",
        "d": "Male alle Bilder der Kategorie Meer und Wasser fertig.",
        "t": "Die Kategorie Meer und Wasser ist vollständig."
      },
      "cat:animals:b": {
        "n": "Erstes Tierbild",
        "d": "Male ein Bild der Kategorie Tiere fertig.",
        "t": "Das erste Tierbild ist gemalt."
      },
      "cat:animals:s": {
        "n": "Tierkenner",
        "d": "Male die Hälfte der Tierbilder fertig.",
        "t": "Die Hälfte der Tierbilder ist fertig."
      },
      "cat:animals:g": {
        "n": "Alle Tiere",
        "d": "Male alle Bilder der Kategorie Tiere fertig.",
        "t": "Die Kategorie Tiere ist vollständig."
      },
      "cat:portraits:b": {
        "n": "Erstes Bildnis",
        "d": "Male ein Bild der Kategorie Porträts fertig.",
        "t": "Das erste Bildnis ist gemalt."
      },
      "cat:portraits:s": {
        "n": "Kenner der Bildnisse",
        "d": "Male die Hälfte der Porträts fertig.",
        "t": "Die Hälfte der Bildnisse ist fertig."
      },
      "cat:portraits:g": {
        "n": "Saal der Bildnisse",
        "d": "Male alle Bilder der Kategorie Porträts fertig.",
        "t": "Die Kategorie Porträts ist vollständig."
      },
      "cat:city:b": {
        "n": "Erste Stadtansicht",
        "d": "Male ein Bild der Kategorie Stadt und Architektur fertig.",
        "t": "Die erste Stadtansicht ist gemalt."
      },
      "cat:city:s": {
        "n": "Durch die Städte",
        "d": "Male die Hälfte der Stadtansichten fertig.",
        "t": "Die Hälfte der Stadtansichten ist fertig."
      },
      "cat:city:g": {
        "n": "Stadt und Architektur",
        "d": "Male alle Bilder der Kategorie Stadt und Architektur fertig.",
        "t": "Die Kategorie Stadt und Architektur ist vollständig."
      },
      "imp:b": {
        "n": "Erstes Licht",
        "d": "Male ein Bild der Impressionisten fertig.",
        "t": "Das erste impressionistische Bild ist fertig."
      },
      "imp:s": {
        "n": "Kenner des Impressionismus",
        "d": "Male die Hälfte der impressionistischen Bilder fertig.",
        "t": "Die Hälfte der impressionistischen Bilder ist fertig."
      },
      "imp:g": {
        "n": "Im Licht der Impressionisten",
        "d": "Male alle Bilder der Impressionisten fertig.",
        "t": "Die impressionistischen Bilder sind vollständig."
      },
      "painters3": {
        "n": "Drei Meister",
        "d": "Male Bilder von drei verschiedenen Malern fertig.",
        "t": "Bilder von drei Malern sind fertig."
      },
      "painters10": {
        "n": "Kenner der Schulen",
        "d": "Male Bilder von zehn verschiedenen Malern fertig.",
        "t": "Bilder von zehn Malern sind fertig."
      },
      "painters25": {
        "n": "Weites Haus",
        "d": "Male Bilder von fünfundzwanzig verschiedenen Malern fertig.",
        "t": "Bilder von fünfundzwanzig Malern sind fertig."
      },
      "vgDelight": {
        "n": "Klang der Briefe",
        "d": "Nutze auf Van Goghs Lebensweg die Musik seiner Zeit oder das Vorlesen.",
        "t": "Musik oder Vorlesen auf Van Goghs Weg."
      }
    }
  },
  "en": {
    "title": "Honorary titles",
    "lead": "Honorary titles in bronze, silver and gold for paths, groups of works, and loyalty.",
    "date": "Awarded on {d}",
    "progress": "{n} of {N}",
    "lockedAria": "Not yet earned, {n} of {N}",
    "lockedHint": "Still to do",
    "openHint": "Open the trophies",
    "tier": {
      "bronze": "Bronze",
      "silver": "Silver",
      "gold": "Gold"
    },
    "groups": {
      "start": "In the studio",
      "paths": "Painters’ paths",
      "streak": "Loyalty",
      "collect": "Collecting",
      "explore": "Discovery"
    },
    "pathBronze": {
      "n": "First station with {name}",
      "d": "Finish one station on {name}.",
      "t": "The first station with {name} is complete."
    },
    "pathSilver": {
      "n": "Halfway with {name}",
      "d": "Finish half of the pictures on {name}.",
      "t": "The path with {name} is halfway done."
    },
    "pathGold": {
      "n": "The path with {name} completed",
      "d": "Finish every picture on {name}.",
      "t": "The life journey with {name} is complete."
    },
    "ach": {
      "first": {
        "n": "First brushstroke",
        "d": "Finish your first picture.",
        "t": "Your first picture is finished."
      },
      "n10": {
        "n": "A practised hand",
        "d": "Finish ten pictures.",
        "t": "Ten masterpieces in your album."
      },
      "n50": {
        "n": "Master of the studio",
        "d": "Finish fifty pictures.",
        "t": "Fifty masterpieces."
      },
      "n100": {
        "n": "A hundred masterpieces",
        "d": "Finish a hundred pictures.",
        "t": "A hundred masterpieces."
      },
      "n250": {
        "n": "A grand oeuvre",
        "d": "Finish two hundred and fifty pictures.",
        "t": "A grand oeuvre."
      },
      "n500": {
        "n": "A life’s work",
        "d": "Finish five hundred pictures.",
        "t": "A life’s work in the album."
      },
      "streak3": {
        "n": "A loyal visit",
        "d": "Finish the painting of the day on three days.",
        "t": "Three days with the painting of the day."
      },
      "streak7": {
        "n": "A week in the hall",
        "d": "Finish the painting of the day on seven days.",
        "t": "Seven days with the painting of the day."
      },
      "streak30": {
        "n": "Always at the museum",
        "d": "Finish the painting of the day on thirty days.",
        "t": "Thirty days with the painting of the day."
      },
      "set:lilies:b": {
        "n": "First water lily",
        "d": "Finish one of Monet’s water lilies.",
        "t": "The first water lily is finished."
      },
      "set:lilies:s": {
        "n": "Connoisseur of the lilies",
        "d": "Finish half of the water-lily pictures.",
        "t": "Half of the water lilies are finished."
      },
      "set:lilies": {
        "n": "Master of the water lilies",
        "d": "Finish all of Monet’s water-lily pictures.",
        "t": "All of Monet’s water lilies are finished."
      },
      "set:fuji:b": {
        "n": "First view of Fuji",
        "d": "Finish one Fuji or wave print.",
        "t": "The first view of Fuji."
      },
      "set:fuji:s": {
        "n": "Connoisseur of Fuji",
        "d": "Finish half of the Fuji and wave prints.",
        "t": "Half of the Fuji views are finished."
      },
      "set:fuji": {
        "n": "All views of Fuji",
        "d": "Finish all of the Fuji and wave prints.",
        "t": "The Fuji views are complete."
      },
      "set:sunflowers:b": {
        "n": "First sunflower",
        "d": "Finish one of Van Gogh’s sunflowers.",
        "t": "The first sunflower is finished."
      },
      "set:sunflowers:s": {
        "n": "Among sunflowers",
        "d": "Finish half of the sunflower pictures.",
        "t": "Among Van Gogh’s sunflowers."
      },
      "set:sunflowers": {
        "n": "Van Gogh’s sunflowers",
        "d": "Finish all of Van Gogh’s sunflower pictures.",
        "t": "The sunflowers are finished."
      },
      "cat:flowers:b": {
        "n": "First blossom",
        "d": "Finish one picture in the Flowers category.",
        "t": "The first blossom is painted."
      },
      "cat:flowers:s": {
        "n": "Connoisseur of blossoms",
        "d": "Finish half of the flower pictures.",
        "t": "Half of the flowers are finished."
      },
      "cat:flowers:g": {
        "n": "A garden of blossoms",
        "d": "Finish every picture in the Flowers category.",
        "t": "The Flowers category is complete."
      },
      "cat:landscapes:b": {
        "n": "First landscape",
        "d": "Finish one picture in the Landscapes category.",
        "t": "The first landscape is painted."
      },
      "cat:landscapes:s": {
        "n": "Open roads",
        "d": "Finish half of the landscapes.",
        "t": "Half of the landscapes are finished."
      },
      "cat:landscapes:g": {
        "n": "Open landscapes",
        "d": "Finish every picture in the Landscapes category.",
        "t": "The Landscapes category is complete."
      },
      "cat:water:b": {
        "n": "At the shore",
        "d": "Finish one picture in the Sea and Water category.",
        "t": "The first water picture is painted."
      },
      "cat:water:s": {
        "n": "Connoisseur of the waters",
        "d": "Finish half of the water pictures.",
        "t": "Half of the water pictures are finished."
      },
      "cat:water:g": {
        "n": "Sea and water",
        "d": "Finish every picture in the Sea and Water category.",
        "t": "The Sea and Water category is complete."
      },
      "cat:animals:b": {
        "n": "First animal picture",
        "d": "Finish one picture in the Animals category.",
        "t": "The first animal picture is painted."
      },
      "cat:animals:s": {
        "n": "Connoisseur of animals",
        "d": "Finish half of the animal pictures.",
        "t": "Half of the animal pictures are finished."
      },
      "cat:animals:g": {
        "n": "All the animals",
        "d": "Finish every picture in the Animals category.",
        "t": "The Animals category is complete."
      },
      "cat:portraits:b": {
        "n": "First likeness",
        "d": "Finish one picture in the Portraits category.",
        "t": "The first likeness is painted."
      },
      "cat:portraits:s": {
        "n": "Connoisseur of likenesses",
        "d": "Finish half of the portraits.",
        "t": "Half of the likenesses are finished."
      },
      "cat:portraits:g": {
        "n": "Hall of likenesses",
        "d": "Finish every picture in the Portraits category.",
        "t": "The Portraits category is complete."
      },
      "cat:city:b": {
        "n": "First city view",
        "d": "Finish one picture in the City and Architecture category.",
        "t": "The first city view is painted."
      },
      "cat:city:s": {
        "n": "Through the cities",
        "d": "Finish half of the city views.",
        "t": "Half of the city views are finished."
      },
      "cat:city:g": {
        "n": "City and architecture",
        "d": "Finish every picture in the City and Architecture category.",
        "t": "The City and Architecture category is complete."
      },
      "imp:b": {
        "n": "First light",
        "d": "Finish one Impressionist picture.",
        "t": "The first Impressionist picture is finished."
      },
      "imp:s": {
        "n": "Connoisseur of Impressionism",
        "d": "Finish half of the Impressionist pictures.",
        "t": "Half of the Impressionist pictures are finished."
      },
      "imp:g": {
        "n": "In the light of the Impressionists",
        "d": "Finish all of the Impressionist pictures.",
        "t": "The Impressionist pictures are complete."
      },
      "painters3": {
        "n": "Three masters",
        "d": "Finish pictures by three different painters.",
        "t": "Pictures by three painters are finished."
      },
      "painters10": {
        "n": "Connoisseur of the schools",
        "d": "Finish pictures by ten different painters.",
        "t": "Pictures by ten painters are finished."
      },
      "painters25": {
        "n": "A wide house",
        "d": "Finish pictures by twenty-five different painters.",
        "t": "Pictures by twenty-five painters are finished."
      },
      "vgDelight": {
        "n": "The sound of letters",
        "d": "On Van Gogh’s life journey, use the music of his time or the reading aloud.",
        "t": "Music or reading on Van Gogh’s path."
      }
    }
  },
  "es": {
    "title": "Títulos de honor",
    "lead": "Títulos de honor en bronce, plata y oro por caminos, grupos de obras y fidelidad.",
    "date": "Concedido el {d}",
    "progress": "{n} de {N}",
    "lockedAria": "Aún no alcanzado, {n} de {N}",
    "lockedHint": "Aún por hacer",
    "openHint": "Abrir los trofeos",
    "tier": {
      "bronze": "Bronce",
      "silver": "Plata",
      "gold": "Oro"
    },
    "groups": {
      "start": "En el taller",
      "paths": "Caminos de los pintores",
      "streak": "Fidelidad",
      "collect": "Colección",
      "explore": "Descubrimiento"
    },
    "pathBronze": {
      "n": "Primera estación con {name}",
      "d": "Termina una estación en {name}.",
      "t": "La primera estación con {name} está completa."
    },
    "pathSilver": {
      "n": "A mitad de camino con {name}",
      "d": "Termina la mitad de los cuadros en {name}.",
      "t": "El camino con {name} está a mitad."
    },
    "pathGold": {
      "n": "El camino con {name} concluido",
      "d": "Termina todos los cuadros en {name}.",
      "t": "El camino de vida con {name} está completo."
    },
    "ach": {
      "first": {
        "n": "Primera pincelada",
        "d": "Termina tu primer cuadro.",
        "t": "Tu primer cuadro está terminado."
      },
      "n10": {
        "n": "Mano ejercitada",
        "d": "Termina diez cuadros.",
        "t": "Diez obras maestras en tu álbum."
      },
      "n50": {
        "n": "Maestro del taller",
        "d": "Termina cincuenta cuadros.",
        "t": "Cincuenta obras maestras."
      },
      "n100": {
        "n": "Cien obras maestras",
        "d": "Termina cien cuadros.",
        "t": "Cien obras maestras."
      },
      "n250": {
        "n": "Gran obra",
        "d": "Termina doscientos cincuenta cuadros.",
        "t": "Una gran obra."
      },
      "n500": {
        "n": "Una obra de una vida",
        "d": "Termina quinientos cuadros.",
        "t": "Una obra de una vida en el álbum."
      },
      "streak3": {
        "n": "Visita leal",
        "d": "Termina el cuadro del día en tres días.",
        "t": "Tres días con el cuadro del día."
      },
      "streak7": {
        "n": "Una semana en la sala",
        "d": "Termina el cuadro del día en siete días.",
        "t": "Siete días con el cuadro del día."
      },
      "streak30": {
        "n": "Siempre en el museo",
        "d": "Termina el cuadro del día en treinta días.",
        "t": "Treinta días con el cuadro del día."
      },
      "set:lilies:b": {
        "n": "Primer nenúfar",
        "d": "Termina uno de los nenúfares de Monet.",
        "t": "El primer nenúfar está terminado."
      },
      "set:lilies:s": {
        "n": "Conocedor de los nenúfares",
        "d": "Termina la mitad de los nenúfares.",
        "t": "La mitad de los nenúfares está terminada."
      },
      "set:lilies": {
        "n": "Maestro de los nenúfares",
        "d": "Termina todos los nenúfares de Monet.",
        "t": "Todos los nenúfares de Monet están terminados."
      },
      "set:fuji:b": {
        "n": "Primera vista del Fuji",
        "d": "Termina una vista del Fuji o de las olas.",
        "t": "La primera vista del Fuji."
      },
      "set:fuji:s": {
        "n": "Conocedor del Fuji",
        "d": "Termina la mitad de las vistas del Fuji y de las olas.",
        "t": "La mitad de las vistas del Fuji está terminada."
      },
      "set:fuji": {
        "n": "Todas las vistas del Fuji",
        "d": "Termina todas las vistas del Fuji y de las olas.",
        "t": "Las vistas del Fuji están completas."
      },
      "set:sunflowers:b": {
        "n": "Primer girasol",
        "d": "Termina uno de los girasoles de Van Gogh.",
        "t": "El primer girasol está terminado."
      },
      "set:sunflowers:s": {
        "n": "Entre girasoles",
        "d": "Termina la mitad de los girasoles.",
        "t": "Entre los girasoles de Van Gogh."
      },
      "set:sunflowers": {
        "n": "Los girasoles de Van Gogh",
        "d": "Termina todos los girasoles de Van Gogh.",
        "t": "Los girasoles están terminados."
      },
      "cat:flowers:b": {
        "n": "Primera flor",
        "d": "Termina un cuadro de la categoría Flores.",
        "t": "La primera flor está pintada."
      },
      "cat:flowers:s": {
        "n": "Conocedor de las flores",
        "d": "Termina la mitad de los cuadros de flores.",
        "t": "La mitad de las flores está terminada."
      },
      "cat:flowers:g": {
        "n": "Jardín en flor",
        "d": "Termina todos los cuadros de la categoría Flores.",
        "t": "La categoría Flores está completa."
      },
      "cat:landscapes:b": {
        "n": "Primer paisaje",
        "d": "Termina un cuadro de la categoría Paisajes.",
        "t": "El primer paisaje está pintado."
      },
      "cat:landscapes:s": {
        "n": "Caminos abiertos",
        "d": "Termina la mitad de los paisajes.",
        "t": "La mitad de los paisajes está terminada."
      },
      "cat:landscapes:g": {
        "n": "Paisajes abiertos",
        "d": "Termina todos los cuadros de la categoría Paisajes.",
        "t": "La categoría Paisajes está completa."
      },
      "cat:water:b": {
        "n": "A orillas del agua",
        "d": "Termina un cuadro de la categoría Mar y agua.",
        "t": "El primer cuadro de agua está pintado."
      },
      "cat:water:s": {
        "n": "Conocedor de las aguas",
        "d": "Termina la mitad de los cuadros de agua.",
        "t": "La mitad de los cuadros de agua está terminada."
      },
      "cat:water:g": {
        "n": "Mar y agua",
        "d": "Termina todos los cuadros de la categoría Mar y agua.",
        "t": "La categoría Mar y agua está completa."
      },
      "cat:animals:b": {
        "n": "Primer animal",
        "d": "Termina un cuadro de la categoría Animales.",
        "t": "El primer animal está pintado."
      },
      "cat:animals:s": {
        "n": "Conocedor de los animales",
        "d": "Termina la mitad de los cuadros de animales.",
        "t": "La mitad de los animales está terminada."
      },
      "cat:animals:g": {
        "n": "Todos los animales",
        "d": "Termina todos los cuadros de la categoría Animales.",
        "t": "La categoría Animales está completa."
      },
      "cat:portraits:b": {
        "n": "Primer retrato",
        "d": "Termina un cuadro de la categoría Retratos.",
        "t": "El primer retrato está pintado."
      },
      "cat:portraits:s": {
        "n": "Conocedor de los retratos",
        "d": "Termina la mitad de los retratos.",
        "t": "La mitad de los retratos está terminada."
      },
      "cat:portraits:g": {
        "n": "Sala de retratos",
        "d": "Termina todos los cuadros de la categoría Retratos.",
        "t": "La categoría Retratos está completa."
      },
      "cat:city:b": {
        "n": "Primera vista urbana",
        "d": "Termina un cuadro de la categoría Ciudad y arquitectura.",
        "t": "La primera vista urbana está pintada."
      },
      "cat:city:s": {
        "n": "Por las ciudades",
        "d": "Termina la mitad de las vistas urbanas.",
        "t": "La mitad de las vistas urbanas está terminada."
      },
      "cat:city:g": {
        "n": "Ciudad y arquitectura",
        "d": "Termina todos los cuadros de la categoría Ciudad y arquitectura.",
        "t": "La categoría Ciudad y arquitectura está completa."
      },
      "imp:b": {
        "n": "Primera luz",
        "d": "Termina un cuadro impresionista.",
        "t": "El primer cuadro impresionista está terminado."
      },
      "imp:s": {
        "n": "Conocedor del impresionismo",
        "d": "Termina la mitad de los cuadros impresionistas.",
        "t": "La mitad de los cuadros impresionistas está terminada."
      },
      "imp:g": {
        "n": "A la luz de los impresionistas",
        "d": "Termina todos los cuadros impresionistas.",
        "t": "Los cuadros impresionistas están completos."
      },
      "painters3": {
        "n": "Tres maestros",
        "d": "Termina cuadros de tres pintores distintos.",
        "t": "Hay cuadros de tres pintores terminados."
      },
      "painters10": {
        "n": "Conocedor de las escuelas",
        "d": "Termina cuadros de diez pintores distintos.",
        "t": "Hay cuadros de diez pintores terminados."
      },
      "painters25": {
        "n": "Casa vasta",
        "d": "Termina cuadros de veinticinco pintores distintos.",
        "t": "Hay cuadros de veinticinco pintores terminados."
      },
      "vgDelight": {
        "n": "El sonido de las cartas",
        "d": "En el camino de Van Gogh, usa la música de su tiempo o la lectura en voz alta.",
        "t": "Música o lectura en el camino de Van Gogh."
      }
    }
  },
  "fr": {
    "title": "Titres d’honneur",
    "lead": "Titres d’honneur en bronze, argent et or pour les parcours, les groupes d’œuvres et la fidélité.",
    "date": "Décerné le {d}",
    "progress": "{n} sur {N}",
    "lockedAria": "Pas encore obtenu, {n} sur {N}",
    "lockedHint": "Encore à faire",
    "openHint": "Ouvrir les trophées",
    "tier": {
      "bronze": "Bronze",
      "silver": "Argent",
      "gold": "Or"
    },
    "groups": {
      "start": "À l’atelier",
      "paths": "Parcours des peintres",
      "streak": "Fidélité",
      "collect": "Collection",
      "explore": "Découverte"
    },
    "pathBronze": {
      "n": "Première station avec {name}",
      "d": "Termine une station sur {name}.",
      "t": "La première station avec {name} est achevée."
    },
    "pathSilver": {
      "n": "À mi-chemin avec {name}",
      "d": "Termine la moitié des tableaux sur {name}.",
      "t": "Le parcours avec {name} est à mi-chemin."
    },
    "pathGold": {
      "n": "Le parcours avec {name} achevé",
      "d": "Termine tous les tableaux sur {name}.",
      "t": "Le parcours de vie avec {name} est complet."
    },
    "ach": {
      "first": {
        "n": "Premier coup de pinceau",
        "d": "Termine ton premier tableau.",
        "t": "Ton premier tableau est terminé."
      },
      "n10": {
        "n": "Main exercée",
        "d": "Termine dix tableaux.",
        "t": "Dix chefs-d’œuvre dans ton album."
      },
      "n50": {
        "n": "Maître de l’atelier",
        "d": "Termine cinquante tableaux.",
        "t": "Cinquante chefs-d’œuvre."
      },
      "n100": {
        "n": "Cent chefs-d’œuvre",
        "d": "Termine cent tableaux.",
        "t": "Cent chefs-d’œuvre."
      },
      "n250": {
        "n": "Grand œuvre",
        "d": "Termine deux cent cinquante tableaux.",
        "t": "Un grand œuvre."
      },
      "n500": {
        "n": "Une œuvre d’une vie",
        "d": "Termine cinq cents tableaux.",
        "t": "Une œuvre d’une vie dans l’album."
      },
      "streak3": {
        "n": "Visite fidèle",
        "d": "Termine le tableau du jour pendant trois jours.",
        "t": "Trois jours avec le tableau du jour."
      },
      "streak7": {
        "n": "Une semaine dans la salle",
        "d": "Termine le tableau du jour pendant sept jours.",
        "t": "Sept jours avec le tableau du jour."
      },
      "streak30": {
        "n": "Toujours au musée",
        "d": "Termine le tableau du jour pendant trente jours.",
        "t": "Trente jours avec le tableau du jour."
      },
      "set:lilies:b": {
        "n": "Premier nymphéa",
        "d": "Termine l’un des nymphéas de Monet.",
        "t": "Le premier nymphéa est terminé."
      },
      "set:lilies:s": {
        "n": "Connaisseur des nymphéas",
        "d": "Termine la moitié des nymphéas.",
        "t": "La moitié des nymphéas est terminée."
      },
      "set:lilies": {
        "n": "Maître des nymphéas",
        "d": "Termine tous les nymphéas de Monet.",
        "t": "Tous les nymphéas de Monet sont terminés."
      },
      "set:fuji:b": {
        "n": "Premier regard sur le Fuji",
        "d": "Termine une vue du Fuji ou des vagues.",
        "t": "Le premier regard sur le Fuji."
      },
      "set:fuji:s": {
        "n": "Connaisseur du Fuji",
        "d": "Termine la moitié des vues du Fuji et des vagues.",
        "t": "La moitié des vues du Fuji est terminée."
      },
      "set:fuji": {
        "n": "Toutes les vues du Fuji",
        "d": "Termine toutes les vues du Fuji et des vagues.",
        "t": "Les vues du Fuji sont complètes."
      },
      "set:sunflowers:b": {
        "n": "Premier tournesol",
        "d": "Termine l’un des tournesols de Van Gogh.",
        "t": "Le premier tournesol est terminé."
      },
      "set:sunflowers:s": {
        "n": "Parmi les tournesols",
        "d": "Termine la moitié des tournesols.",
        "t": "Parmi les tournesols de Van Gogh."
      },
      "set:sunflowers": {
        "n": "Les tournesols de Van Gogh",
        "d": "Termine tous les tournesols de Van Gogh.",
        "t": "Les tournesols sont terminés."
      },
      "cat:flowers:b": {
        "n": "Première fleur",
        "d": "Termine un tableau de la catégorie Fleurs.",
        "t": "La première fleur est peinte."
      },
      "cat:flowers:s": {
        "n": "Connaisseur des fleurs",
        "d": "Termine la moitié des tableaux de fleurs.",
        "t": "La moitié des fleurs est terminée."
      },
      "cat:flowers:g": {
        "n": "Jardin en fleurs",
        "d": "Termine tous les tableaux de la catégorie Fleurs.",
        "t": "La catégorie Fleurs est complète."
      },
      "cat:landscapes:b": {
        "n": "Premier paysage",
        "d": "Termine un tableau de la catégorie Paysages.",
        "t": "Le premier paysage est peint."
      },
      "cat:landscapes:s": {
        "n": "Chemins ouverts",
        "d": "Termine la moitié des paysages.",
        "t": "La moitié des paysages est terminée."
      },
      "cat:landscapes:g": {
        "n": "Paysages ouverts",
        "d": "Termine tous les tableaux de la catégorie Paysages.",
        "t": "La catégorie Paysages est complète."
      },
      "cat:water:b": {
        "n": "Au bord de l’eau",
        "d": "Termine un tableau de la catégorie Mer et eau.",
        "t": "Le premier tableau d’eau est peint."
      },
      "cat:water:s": {
        "n": "Connaisseur des eaux",
        "d": "Termine la moitié des tableaux d’eau.",
        "t": "La moitié des tableaux d’eau est terminée."
      },
      "cat:water:g": {
        "n": "Mer et eau",
        "d": "Termine tous les tableaux de la catégorie Mer et eau.",
        "t": "La catégorie Mer et eau est complète."
      },
      "cat:animals:b": {
        "n": "Premier animal",
        "d": "Termine un tableau de la catégorie Animaux.",
        "t": "Le premier animal est peint."
      },
      "cat:animals:s": {
        "n": "Connaisseur des animaux",
        "d": "Termine la moitié des tableaux d’animaux.",
        "t": "La moitié des animaux est terminée."
      },
      "cat:animals:g": {
        "n": "Tous les animaux",
        "d": "Termine tous les tableaux de la catégorie Animaux.",
        "t": "La catégorie Animaux est complète."
      },
      "cat:portraits:b": {
        "n": "Premier portrait",
        "d": "Termine un tableau de la catégorie Portraits.",
        "t": "Le premier portrait est peint."
      },
      "cat:portraits:s": {
        "n": "Connaisseur des portraits",
        "d": "Termine la moitié des portraits.",
        "t": "La moitié des portraits est terminée."
      },
      "cat:portraits:g": {
        "n": "Salle des portraits",
        "d": "Termine tous les tableaux de la catégorie Portraits.",
        "t": "La catégorie Portraits est complète."
      },
      "cat:city:b": {
        "n": "Première vue urbaine",
        "d": "Termine un tableau de la catégorie Ville et architecture.",
        "t": "La première vue urbaine est peinte."
      },
      "cat:city:s": {
        "n": "À travers les villes",
        "d": "Termine la moitié des vues urbaines.",
        "t": "La moitié des vues urbaines est terminée."
      },
      "cat:city:g": {
        "n": "Ville et architecture",
        "d": "Termine tous les tableaux de la catégorie Ville et architecture.",
        "t": "La catégorie Ville et architecture est complète."
      },
      "imp:b": {
        "n": "Première lumière",
        "d": "Termine un tableau impressionniste.",
        "t": "Le premier tableau impressionniste est terminé."
      },
      "imp:s": {
        "n": "Connaisseur de l’impressionnisme",
        "d": "Termine la moitié des tableaux impressionnistes.",
        "t": "La moitié des tableaux impressionnistes est terminée."
      },
      "imp:g": {
        "n": "Dans la lumière des impressionnistes",
        "d": "Termine tous les tableaux impressionnistes.",
        "t": "Les tableaux impressionnistes sont complets."
      },
      "painters3": {
        "n": "Trois maîtres",
        "d": "Termine des tableaux de trois peintres différents.",
        "t": "Des tableaux de trois peintres sont terminés."
      },
      "painters10": {
        "n": "Connaisseur des écoles",
        "d": "Termine des tableaux de dix peintres différents.",
        "t": "Des tableaux de dix peintres sont terminés."
      },
      "painters25": {
        "n": "Maison vaste",
        "d": "Termine des tableaux de vingt-cinq peintres différents.",
        "t": "Des tableaux de vingt-cinq peintres sont terminés."
      },
      "vgDelight": {
        "n": "Le chant des lettres",
        "d": "Sur le parcours de Van Gogh, utilise la musique de son temps ou la lecture à voix haute.",
        "t": "Musique ou lecture sur le parcours de Van Gogh."
      }
    }
  },
  "it": {
    "title": "Titoli onorifici",
    "lead": "Titoli onorifici in bronzo, argento e oro per i percorsi, i gruppi di opere e la fedeltà.",
    "date": "Conferito il {d}",
    "progress": "{n} di {N}",
    "lockedAria": "Non ancora ottenuto, {n} di {N}",
    "lockedHint": "Ancora da fare",
    "openHint": "Apri i trofei",
    "tier": {
      "bronze": "Bronzo",
      "silver": "Argento",
      "gold": "Oro"
    },
    "groups": {
      "start": "In atelier",
      "paths": "Percorsi dei pittori",
      "streak": "Fedeltà",
      "collect": "Collezione",
      "explore": "Scoperta"
    },
    "pathBronze": {
      "n": "Prima stazione con {name}",
      "d": "Termina una stazione in {name}.",
      "t": "La prima stazione con {name} è completa."
    },
    "pathSilver": {
      "n": "A metà strada con {name}",
      "d": "Termina la metà dei quadri in {name}.",
      "t": "Il percorso con {name} è a metà."
    },
    "pathGold": {
      "n": "Il percorso con {name} compiuto",
      "d": "Termina tutti i quadri in {name}.",
      "t": "Il percorso di vita con {name} è completo."
    },
    "ach": {
      "first": {
        "n": "Prima pennellata",
        "d": "Termina il tuo primo quadro.",
        "t": "Il tuo primo quadro è finito."
      },
      "n10": {
        "n": "Mano esercitata",
        "d": "Termina dieci quadri.",
        "t": "Dieci capolavori nel tuo album."
      },
      "n50": {
        "n": "Maestro dell’atelier",
        "d": "Termina cinquanta quadri.",
        "t": "Cinquanta capolavori."
      },
      "n100": {
        "n": "Cento capolavori",
        "d": "Termina cento quadri.",
        "t": "Cento capolavori."
      },
      "n250": {
        "n": "Grande opera",
        "d": "Termina duecentocinquanta quadri.",
        "t": "Una grande opera."
      },
      "n500": {
        "n": "Un’opera di una vita",
        "d": "Termina cinquecento quadri.",
        "t": "Un’opera di una vita nell’album."
      },
      "streak3": {
        "n": "Visita fedele",
        "d": "Termina il quadro del giorno in tre giorni.",
        "t": "Tre giorni con il quadro del giorno."
      },
      "streak7": {
        "n": "Una settimana in sala",
        "d": "Termina il quadro del giorno in sette giorni.",
        "t": "Sette giorni con il quadro del giorno."
      },
      "streak30": {
        "n": "Sempre al museo",
        "d": "Termina il quadro del giorno in trenta giorni.",
        "t": "Trenta giorni con il quadro del giorno."
      },
      "set:lilies:b": {
        "n": "Prima ninfea",
        "d": "Termina una delle ninfee di Monet.",
        "t": "La prima ninfea è finita."
      },
      "set:lilies:s": {
        "n": "Conoscitore delle ninfee",
        "d": "Termina la metà delle ninfee.",
        "t": "La metà delle ninfee è finita."
      },
      "set:lilies": {
        "n": "Maestro delle ninfee",
        "d": "Termina tutte le ninfee di Monet.",
        "t": "Tutte le ninfee di Monet sono finite."
      },
      "set:fuji:b": {
        "n": "Primo sguardo al Fuji",
        "d": "Termina una veduta del Fuji o delle onde.",
        "t": "Il primo sguardo al Fuji."
      },
      "set:fuji:s": {
        "n": "Conoscitore del Fuji",
        "d": "Termina la metà delle vedute del Fuji e delle onde.",
        "t": "La metà delle vedute del Fuji è finita."
      },
      "set:fuji": {
        "n": "Tutte le vedute del Fuji",
        "d": "Termina tutte le vedute del Fuji e delle onde.",
        "t": "Le vedute del Fuji sono complete."
      },
      "set:sunflowers:b": {
        "n": "Primo girasole",
        "d": "Termina uno dei girasoli di Van Gogh.",
        "t": "Il primo girasole è finito."
      },
      "set:sunflowers:s": {
        "n": "Tra i girasoli",
        "d": "Termina la metà dei girasoli.",
        "t": "Tra i girasoli di Van Gogh."
      },
      "set:sunflowers": {
        "n": "I girasoli di Van Gogh",
        "d": "Termina tutti i girasoli di Van Gogh.",
        "t": "I girasoli sono finiti."
      },
      "cat:flowers:b": {
        "n": "Primo fiore",
        "d": "Termina un quadro della categoria Fiori.",
        "t": "Il primo fiore è dipinto."
      },
      "cat:flowers:s": {
        "n": "Conoscitore dei fiori",
        "d": "Termina la metà dei quadri di fiori.",
        "t": "La metà dei fiori è finita."
      },
      "cat:flowers:g": {
        "n": "Giardino in fiore",
        "d": "Termina tutti i quadri della categoria Fiori.",
        "t": "La categoria Fiori è completa."
      },
      "cat:landscapes:b": {
        "n": "Primo paesaggio",
        "d": "Termina un quadro della categoria Paesaggi.",
        "t": "Il primo paesaggio è dipinto."
      },
      "cat:landscapes:s": {
        "n": "Strade aperte",
        "d": "Termina la metà dei paesaggi.",
        "t": "La metà dei paesaggi è finita."
      },
      "cat:landscapes:g": {
        "n": "Paesaggi aperti",
        "d": "Termina tutti i quadri della categoria Paesaggi.",
        "t": "La categoria Paesaggi è completa."
      },
      "cat:water:b": {
        "n": "Sulla riva",
        "d": "Termina un quadro della categoria Mare e acqua.",
        "t": "Il primo quadro d’acqua è dipinto."
      },
      "cat:water:s": {
        "n": "Conoscitore delle acque",
        "d": "Termina la metà dei quadri d’acqua.",
        "t": "La metà dei quadri d’acqua è finita."
      },
      "cat:water:g": {
        "n": "Mare e acqua",
        "d": "Termina tutti i quadri della categoria Mare e acqua.",
        "t": "La categoria Mare e acqua è completa."
      },
      "cat:animals:b": {
        "n": "Primo animale",
        "d": "Termina un quadro della categoria Animali.",
        "t": "Il primo animale è dipinto."
      },
      "cat:animals:s": {
        "n": "Conoscitore degli animali",
        "d": "Termina la metà dei quadri di animali.",
        "t": "La metà degli animali è finita."
      },
      "cat:animals:g": {
        "n": "Tutti gli animali",
        "d": "Termina tutti i quadri della categoria Animali.",
        "t": "La categoria Animali è completa."
      },
      "cat:portraits:b": {
        "n": "Primo ritratto",
        "d": "Termina un quadro della categoria Ritratti.",
        "t": "Il primo ritratto è dipinto."
      },
      "cat:portraits:s": {
        "n": "Conoscitore dei ritratti",
        "d": "Termina la metà dei ritratti.",
        "t": "La metà dei ritratti è finita."
      },
      "cat:portraits:g": {
        "n": "Sala dei ritratti",
        "d": "Termina tutti i quadri della categoria Ritratti.",
        "t": "La categoria Ritratti è completa."
      },
      "cat:city:b": {
        "n": "Prima veduta urbana",
        "d": "Termina un quadro della categoria Città e architettura.",
        "t": "La prima veduta urbana è dipinta."
      },
      "cat:city:s": {
        "n": "Attraverso le città",
        "d": "Termina la metà delle vedute urbane.",
        "t": "La metà delle vedute urbane è finita."
      },
      "cat:city:g": {
        "n": "Città e architettura",
        "d": "Termina tutti i quadri della categoria Città e architettura.",
        "t": "La categoria Città e architettura è completa."
      },
      "imp:b": {
        "n": "Prima luce",
        "d": "Termina un quadro impressionista.",
        "t": "Il primo quadro impressionista è finito."
      },
      "imp:s": {
        "n": "Conoscitore dell’impressionismo",
        "d": "Termina la metà dei quadri impressionisti.",
        "t": "La metà dei quadri impressionisti è finita."
      },
      "imp:g": {
        "n": "Nella luce degli impressionisti",
        "d": "Termina tutti i quadri impressionisti.",
        "t": "I quadri impressionisti sono completi."
      },
      "painters3": {
        "n": "Tre maestri",
        "d": "Termina quadri di tre pittori diversi.",
        "t": "Ci sono quadri di tre pittori terminati."
      },
      "painters10": {
        "n": "Conoscitore delle scuole",
        "d": "Termina quadri di dieci pittori diversi.",
        "t": "Ci sono quadri di dieci pittori terminati."
      },
      "painters25": {
        "n": "Casa vasta",
        "d": "Termina quadri di venticinque pittori diversi.",
        "t": "Ci sono quadri di venticinque pittori terminati."
      },
      "vgDelight": {
        "n": "Il suono delle lettere",
        "d": "Sul percorso di Van Gogh, usa la musica del suo tempo o la lettura ad alta voce.",
        "t": "Musica o lettura sul percorso di Van Gogh."
      }
    }
  }
};
  const IMG = 'img/trophies/';
  let host = null, toastT = 0, toastQ = [], toastBusy = false;

  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function pack(){ return TEXTS[lang()] || TEXTS.de; }
  function fill(s, vars){
    return String(s || '').replace(/\{(\w+)\}/g, function (_, k) { return (vars && vars[k] != null) ? vars[k] : ''; });
  }
  function esc(s){ return String(s || '').replace(/[&<>"']/g, function (c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }

  function loadStore(){
    let o;
    try { o = JSON.parse(localStorage.getItem(ACH_KEY) || 'null') || { unlocked: {} }; }
    catch (e) { o = { unlocked: {} }; }
    if (!o.unlocked) o.unlocked = {};
    return o;
  }
  function saveStore(o){ try { localStorage.setItem(ACH_KEY, JSON.stringify(o)); } catch (e) {} }
  function delightOn(){
    try { const x = JSON.parse(localStorage.getItem(DELIGHT_KEY) || 'null') || {}; return !!x.vgMusic; }
    catch (e) { return false; }
  }

  function trophyType(ach){
    if (ach.trophy) return ach.trophy;
    if (TROPHY[ach.id]) return TROPHY[ach.id];
    if (ach.kind === 'pathStat' || ach.kind === 'path' || (ach.id && ach.id.indexOf('path:') === 0)) return 'badge';
    if (ach.kind === 'set' || ach.kind === 'cat' || ach.kind === 'pool' || ach.kind === 'delight') return 'diploma';
    return 'cup';
  }
  function trophySrc(ach, unlocked){
    if (ach.img) return ach.img;
    const type = trophyType(ach);
    const metal = ach.tier || 'gold';
    return IMG + type + '-' + metal + '.webp';
  }

  function catalog(){
    const rows = [
      { id:'first', group:'start', tier:'bronze', kind:'count', n:1, trophy:'cup' },
      { id:'n10', group:'start', tier:'silver', kind:'count', n:10, trophy:'cup' },
      { id:'n50', group:'start', tier:'gold', kind:'count', n:50, trophy:'cup' },
      { id:'n100', group:'start', tier:'bronze', kind:'count', n:100, trophy:'statue' },
      { id:'n250', group:'start', tier:'silver', kind:'count', n:250, trophy:'statue' },
      { id:'n500', group:'start', tier:'gold', kind:'count', n:500, trophy:'statue' }
    ];
    PATH_IDS.forEach(function (pid) {
      rows.push({ id:'path:' + pid + ':b', group:'paths', tier:'bronze', kind:'pathStat', path:pid, trophy:'badge' });
      rows.push({ id:'path:' + pid + ':s', group:'paths', tier:'silver', kind:'pathHalf', path:pid, trophy:'badge' });
      rows.push({ id:'path:' + pid, group:'paths', tier:'gold', kind:'path', path:pid, trophy:'badge' });
    });
    rows.push(
      { id:'streak3', group:'streak', tier:'bronze', kind:'streak', n:3, trophy:'victory' },
      { id:'streak7', group:'streak', tier:'silver', kind:'streak', n:7, trophy:'victory' },
      { id:'streak30', group:'streak', tier:'gold', kind:'streak', n:30, trophy:'victory' },
      { id:'set:lilies:b', group:'collect', tier:'bronze', kind:'set', set:'lilies', need:'one', trophy:'diploma' },
      { id:'set:lilies:s', group:'collect', tier:'silver', kind:'set', set:'lilies', need:'half', trophy:'diploma' },
      { id:'set:lilies', group:'collect', tier:'gold', kind:'set', set:'lilies', need:'all', trophy:'diploma' },
      { id:'set:fuji:b', group:'collect', tier:'bronze', kind:'set', set:'fuji', need:'one', trophy:'diploma' },
      { id:'set:fuji:s', group:'collect', tier:'silver', kind:'set', set:'fuji', need:'half', trophy:'diploma' },
      { id:'set:fuji', group:'collect', tier:'gold', kind:'set', set:'fuji', need:'all', trophy:'diploma' },
      { id:'set:sunflowers:b', group:'collect', tier:'bronze', kind:'set', set:'sunflowers', need:'one', trophy:'diploma' },
      { id:'set:sunflowers:s', group:'collect', tier:'silver', kind:'set', set:'sunflowers', need:'half', trophy:'diploma' },
      { id:'set:sunflowers', group:'collect', tier:'gold', kind:'set', set:'sunflowers', need:'all', trophy:'diploma' },
      { id:'imp:b', group:'collect', tier:'bronze', kind:'pool', pool:'impression', need:'one', trophy:'diploma' },
      { id:'imp:s', group:'collect', tier:'silver', kind:'pool', pool:'impression', need:'half', trophy:'diploma' },
      { id:'imp:g', group:'collect', tier:'gold', kind:'pool', pool:'impression', need:'all', trophy:'diploma' }
    );
    CATS.forEach(function (c) {
      rows.push({ id:'cat:' + c + ':b', group:'collect', tier:'bronze', kind:'cat', cat:c, need:'one', trophy:'diploma' });
      rows.push({ id:'cat:' + c + ':s', group:'collect', tier:'silver', kind:'cat', cat:c, need:'half', trophy:'diploma' });
      rows.push({ id:'cat:' + c + ':g', group:'collect', tier:'gold', kind:'cat', cat:c, need:'all', trophy:'diploma' });
    });
    if (window.MASILANO_FACES) window.MASILANO_FACES.achRows().forEach(function (r) { rows.push(r); });
    rows.push(
      { id:'painters3', group:'explore', tier:'bronze', kind:'painters', n:3, trophy:'badge' },
      { id:'painters10', group:'explore', tier:'silver', kind:'painters', n:10, trophy:'badge' },
      { id:'painters25', group:'explore', tier:'gold', kind:'painters', n:25, trophy:'badge' },
      { id:'vgDelight', group:'explore', tier:'gold', kind:'delight', trophy:'diploma' }
    );
    return rows;
  }

  function unique(ids){
    const s = [], seen = {};
    (ids || []).forEach(function (id) { if (id && !seen[id]) { seen[id] = 1; s.push(id); } });
    return s;
  }
  function doneOf(ids){
    let n = 0;
    (ids || []).forEach(function (id) { if (host.isDone(id)) n++; });
    return n;
  }
  function needOf(ids, need){
    const N = (ids || []).length;
    if (need === 'one') return 1;
    if (need === 'half') return Math.max(1, Math.ceil(N / 2));
    return Math.max(1, N);
  }
  function progressNeed(ids, need){
    const list = unique(ids);
    const n = doneOf(list);
    const N = needOf(list, need || 'all');
    return { n: Math.min(n, N), N: N, done: list.length > 0 && n >= N };
  }
  function impressionIds(){
    const re = /(^|\s)(claude\s+)?monet\b|(^|\s)renoir\b|(^|\s)pissarro\b|(^|\s)sisley\b|(^|\s)degas\b|(^|\s)(e|é)douard\s+manet\b|(^|\s)manet\b|(^|\s)morisot\b|(^|\s)cassatt\b/i;
    const ids = [];
    (host.ALL || []).forEach(function (p) {
      if (!p || !p.id) return;
      const a = String(p.artist || '');
      if (re.test(a)) ids.push(p.id);
    });
    return unique(ids);
  }
  function catIds(cat){
    if (host && typeof host.idsInCat === 'function') return unique(host.idsInCat(cat));
    return unique((host && host.galCats && host.galCats[cat]) || []);
  }
  function stationsDoneOn(path){
    let n = 0;
    (path.stations || []).forEach(function (st) {
      if (st.works && st.works.length && host.stationDone(st)) n++;
    });
    return n;
  }
  function progress(ach){
    if (!host) return { n:0, N:1, done:false };
    if (ach.kind === 'count') {
      const n = host.doneCount();
      return { n: Math.min(n, ach.n), N: ach.n, done: n >= ach.n };
    }
    if (ach.kind === 'streak') {
      const n = ((host.loadStreak() || {}).n) || 0;
      return { n: Math.min(n, ach.n), N: ach.n, done: n >= ach.n };
    }
    if (ach.kind === 'pathStat') {
      const path = ((host.PATHS || []).find(function (p) { return p.id === ach.path; })) || null;
      if (!path) return { n:0, N:1, done:false };
      const n = stationsDoneOn(path);
      return { n: Math.min(n, 1), N:1, done: n >= 1 };
    }
    if (ach.kind === 'pathHalf' || ach.kind === 'path') {
      const path = ((host.PATHS || []).find(function (p) { return p.id === ach.path; })) || null;
      if (!path) return { n:0, N:1, done:false };
      const steps = host.pathSteps(path) || [];
      const n = steps.filter(function (s) { return host.isDone(s.pid); }).length;
      if (ach.kind === 'pathHalf') {
        const N = Math.max(1, Math.ceil(steps.length / 2));
        return { n: Math.min(n, N), N: N, done: steps.length > 0 && n >= N };
      }
      return { n:n, N: steps.length || 1, done: steps.length > 0 && n >= steps.length };
    }
    if (ach.kind === 'set') return progressNeed(SETS[ach.set] || [], ach.need);
    if (ach.kind === 'cat') return progressNeed(catIds(ach.cat), ach.need);
    if (ach.kind === 'pool' && ach.pool === 'impression') return progressNeed(impressionIds(), ach.need);
    if (ach.kind === 'painters') {
      const seen = {};
      let n = 0;
      (host.ALL || []).forEach(function (p) {
        if (!p || !host.isDone(p.id) || !p.artist || seen[p.artist]) return;
        seen[p.artist] = 1; n++;
      });
      return { n: Math.min(n, ach.n), N: ach.n, done: n >= ach.n };
    }
    if (ach.kind === 'delight') {
      const n = delightOn() ? 1 : 0;
      return { n:n, N:1, done: n >= 1 };
    }
    return { n:0, N:1, done:false };
  }

  function pathName(pid){
    const path = ((host && host.PATHS) || []).find(function (p) { return p.id === pid; });
    if (path && host && host.L) return host.L(path, 'title') || path.title || pid;
    return (path && path.title) || pid;
  }
  function textsFor(idOrAch){
    const P = pack();
    const id = typeof idOrAch === 'string' ? idOrAch : (idOrAch && idOrAch.id);
    const m = id && /^path:([^:]+)(?::([bs]))?$/.exec(id);
    if (m) {
      const name = pathName(m[1]);
      const key = m[2] === 'b' ? 'pathBronze' : (m[2] === 's' ? 'pathSilver' : 'pathGold');
      const T = P[key] || {};
      return { n: fill(T.n, { name:name }), d: fill(T.d, { name:name }), t: fill(T.t, { name:name }) };
    }
    if (id && id.indexOf('face:') === 0 && window.MASILANO_FACES) {
      const ft = window.MASILANO_FACES.achTexts(id);
      if (ft) return ft;
    }
    const A = (P.ach && P.ach[id]) || {};
    return { n: A.n || id, d: A.d || '', t: A.t || '' };
  }

  function formatDate(iso){
    if (!iso) return '';
    const p = String(iso).split('-').map(Number);
    if (p.length < 3 || !p[0]) return iso;
    const dt = new Date(p[0], p[1] - 1, p[2]);
    const loc = ({ de:'de-CH', en:'en-GB', es:'es-ES', fr:'fr-FR', it:'it-IT' })[lang()] || lang();
    try { return dt.toLocaleDateString(loc, { day:'numeric', month:'long', year:'numeric' }); }
    catch (e) { return iso; }
  }

  function inheritIds(ach){
    const id = ach.id;
    const out = [];
    if (id === 'n10') out.push('n5','n25','n100','n250','n500');
    if (id === 'n50') out.push('n25','n100','n250','n500');
    if (id === 'painters3') out.push('painters10');
    const pm = /^path:([^:]+)(?::([bs]))?$/.exec(id);
    if (pm && pm[2]) out.push('path:' + pm[1]);
    const sm = /^(set:[^:]+):[bs]$/.exec(id);
    if (sm) out.push(sm[1]);
    const im = /^(imp):[bs]$/.exec(id);
    if (im) out.push('imp:g');
    return out;
  }
  function inheritDate(ach, store){
    const ids = inheritIds(ach);
    for (let i = 0; i < ids.length; i++) {
      const rec = store.unlocked[ids[i]];
      if (rec && rec.at) return rec.at;
    }
    return null;
  }

  function trophyMarkup(ach, pr, unlocked){
    const tx = textsFor(ach);
    const P = pack();
    const tierName = (P.tier && P.tier[ach.tier]) || ach.tier;
    const label = unlocked ? (tx.n + ', ' + tierName) : fill(P.lockedAria, pr) + ', ' + tx.n;
    const src = trophySrc(ach, unlocked);
    const img = '<img class="trophy-img" src="'+esc(src)+'" alt="" width="256" height="256" loading="lazy" decoding="async">';
    const face = unlocked
      ? '<span class="trophy-face">'+img+'</span>'
      : '<span class="trophy-face locked"><span class="trophy-sil">'+img+'</span></span>';
    let plaque = '<span class="trophy-plaque"><span class="nm">'+esc(tx.n)+'</span>';
    plaque += '<span class="tier tier-'+esc(ach.tier)+'">'+esc(tierName)+'</span>';
    if (!unlocked) plaque += '<span class="pr">'+esc(fill(P.progress, pr))+' · '+esc(tx.d)+'</span>';
    plaque += '</span>';
    return '<button type="button" class="trophy '+esc(ach.tier)+(unlocked?'':' locked')+'" data-ach="'+esc(ach.id)+'" data-kind="'+esc(trophyType(ach))+'" aria-label="'+esc(label)+'">'+face+plaque+'</button>';
  }

  function bindTrophies(root){
    if (!root) return;
    root.querySelectorAll('.trophy').forEach(function (b) {
      b.onclick = function () { openDetail(b.getAttribute('data-ach')); };
    });
  }

  function render(el){
    if (!el) return;
    const P = pack();
    const store = loadStore();
    const cat = catalog();
    const byId = {};
    cat.forEach(function (a) { byId[a.id] = a; });
    let html = '<h2 class="vitrine-title">'+esc(P.title)+'</h2><p class="vitrine-lead">'+esc(P.lead)+'</p>';
    GROUPS.forEach(function (g) {
      const gname = g.id === 'faces' && window.MASILANO_FACES ? window.MASILANO_FACES.texts().group : (P.groups[g.id] || g.id);
      html += '<section class="vitrine-group" data-group="'+g.id+'"><div class="vitrine-kicker">'+esc(gname)+'</div><div class="vitrine-grid">';
      g.ach.forEach(function (id) {
        const ach = byId[id]; if (!ach) return;
        const pr = progress(ach);
        const rec = store.unlocked[id];
        html += trophyMarkup(ach, pr, !!(rec || pr.done));
      });
      html += '</div></section>';
    });
    el.innerHTML = html;
    bindTrophies(el);
  }

  function sync(opts){
    opts = opts || {};
    const store = loadStore();
    if (!store.unlocked) store.unlocked = {};
    const newly = [];
    const today = (host && host.todayKey && host.todayKey()) || new Date().toISOString().slice(0, 10);
    catalog().forEach(function (ach) {
      const pr = progress(ach);
      if (!pr.done) return;
      if (!store.unlocked[ach.id]) {
        const inherited = inheritDate(ach, store);
        let at = inherited || today;
        if (ach.kind === 'path' && host.certDate) {
          const cd = host.certDate(ach.path);
          if (cd) at = cd;
        }
        store.unlocked[ach.id] = { at: at };
        if (!inherited) newly.push(ach);
      }
    });
    if (newly.length || true) saveStore(store);
    if (opts.toast && newly.length) enqueueToasts(newly);
    const root = document.getElementById('trophiesBody') || document.getElementById('vitrine');
    if (root) render(root);
    return newly;
  }

  function enqueueToasts(achs){
    achs.slice(0, 3).forEach(function (a) { toastQ.push(a); });
    if (!toastBusy) drainToast();
  }
  function drainToast(){
    if (!toastQ.length) { toastBusy = false; return; }
    toastBusy = true;
    showToast(toastQ.shift()).then(function () { drainToast(); });
  }
  function showToast(achOrId){
    const ach = typeof achOrId === 'string' ? catalog().find(function (a) { return a.id === achOrId; }) : achOrId;
    const el = document.getElementById('achToast');
    if (!ach || !el) return Promise.resolve();
    const tx = textsFor(ach);
    const P = pack();
    const tierName = (P.tier && P.tier[ach.tier]) || ach.tier;
    el.hidden = false;
    el.removeAttribute('hidden');
    el.innerHTML = '<div class="trophy-face">'+
      '<img class="trophy-img" src="'+esc(trophySrc(ach, true))+'" alt="" width="256" height="256">'+
      '</div><div class="ach-body"><div class="ach-tier">'+esc(tierName)+'</div>'+
      '<div class="ach-name">'+esc(tx.n)+'</div><p class="ach-line">'+esc(tx.t)+'</p></div>';
    el.setAttribute('aria-label', tx.n + '. ' + tierName + '. ' + tx.t + '. ' + P.openHint);
    el.classList.add('show');
    el.onclick = function () {
      hideToast();
      if (host && host.showTrophies) host.showTrophies();
    };
    return new Promise(function (res) {
      clearTimeout(toastT);
      toastT = setTimeout(function () { hideToast(); res(); }, 4800);
    });
  }
  function hideToast(){
    const el = document.getElementById('achToast');
    if (!el) return;
    el.classList.remove('show');
    el.onclick = null;
    clearTimeout(toastT);
    setTimeout(function () { if (el && !el.classList.contains('show')) el.hidden = true; }, 400);
  }


  function sealSvg(tier){
    const fills = {
      gold: { a:'#e8c56b', b:'#8a6a22', c:'#f6e4a8' },
      silver: { a:'#c5cdd4', b:'#5a646c', c:'#eef2f4' },
      bronze: { a:'#c47a3a', b:'#6a3e16', c:'#e8b07a' }
    };
    const c = fills[tier] || fills.gold;
    return '<svg viewBox="0 0 64 64" aria-hidden="true">'
      + '<defs><radialGradient id="ds'+tier+'" cx="38%" cy="32%" r="70%">'
      + '<stop offset="0%" stop-color="'+c.c+'"/><stop offset="55%" stop-color="'+c.a+'"/><stop offset="100%" stop-color="'+c.b+'"/></radialGradient></defs>'
      + '<circle cx="32" cy="32" r="30" fill="url(#ds'+tier+')"/>'
      + '<circle cx="32" cy="32" r="25" fill="none" stroke="'+c.b+'" stroke-width="1.4"/>'
      + '<circle cx="32" cy="32" r="22" fill="none" stroke="'+c.c+'" stroke-width="0.7" stroke-dasharray="2.2 1.6" opacity=".9"/>'
      + '</svg>';
  }

  function openDetail(id){
    const ach = catalog().find(function (a) { return a.id === id; });
    const sh = document.getElementById('achView');
    if (!ach || !sh) return;
    const store = loadStore();
    const rec = store.unlocked[id];
    const pr = progress(ach);
    const unlocked = !!(rec || pr.done);
    const tx = textsFor(ach);
    const P = pack();
    const isDip = trophyType(ach) === 'diploma' && unlocked;
    sh.classList.toggle('diploma', isDip);
    const hold = document.getElementById('achViewMedal');
    if (hold) {
      if (isDip) {
        const dateStr = (unlocked && rec && rec.at) ? fill(P.date, { d: formatDate(rec.at) }) : '';
        const tierName = (P.tier && P.tier[ach.tier]) || ach.tier;
        hold.innerHTML = '<div class="diploma-sheet diploma-tier-'+esc(ach.tier)+'">'+
          '<img class="diploma-frame" src="img/trophies/diploma-frame.webp" alt="" width="792" height="769" decoding="async" loading="eager">'+
          '<div class="diploma-inner">'+
          '<p class="diploma-kicker">'+esc(P.title)+'</p>'+
          '<h2 class="diploma-title">'+esc(tx.s || tx.n)+'</h2>'+
          (ach.img ? '<img class="diploma-face" src="'+esc(ach.img)+'" alt="" width="440" height="440" decoding="async">' : '')+
          (dateStr ? '<p class="diploma-date">'+esc(dateStr)+'</p>' : '')+
          '<p class="diploma-desc">'+esc(ach.img ? tx.t : tx.d)+'</p>'+
          (ach.img && window.MASILANO_FACES ? '<p class="diploma-code">'+esc(window.MASILANO_FACES.texts().pending)+'</p>' : '')+
          '<div class="diploma-seal '+esc(ach.tier)+'" aria-hidden="true">'+sealSvg(ach.tier)+'<span>'+esc(tierName)+'</span></div>'+
          '<p class="diploma-sign">Masilano · Meisterwerke</p>'+
          '</div></div>';
      } else {
        hold.innerHTML = '<div class="trophy-face trophy '+ach.tier+(unlocked?'':' locked')+'">'+
          '<img class="trophy-img" src="'+esc(trophySrc(ach, unlocked))+'" alt="" width="256" height="256">'+
          '</div>';
      }
    }
    const title = document.getElementById('achViewTitle');
    if (title) {
      title.textContent = isDip ? '' : tx.n;
      title.hidden = isDip;
    }
    const desc = document.getElementById('achViewDesc');
    if (desc) {
      desc.textContent = isDip ? '' : tx.d;
      desc.hidden = isDip;
    }
    const date = document.getElementById('achViewDate');
    if (date) {
      if (isDip) { date.textContent = ''; date.hidden = true; }
      else {
        date.hidden = false;
        if (unlocked && rec && rec.at) date.textContent = fill(P.date, { d: formatDate(rec.at) });
        else if (!unlocked) date.textContent = fill(P.progress, pr);
        else date.textContent = '';
      }
    }
    sh.classList.remove('hidden');
    const cl = document.getElementById('achViewClose');
    if (cl) cl.focus();
  }
  function closeDetail(){
    const sh = document.getElementById('achView');
    if (sh) { sh.classList.add('hidden'); sh.classList.remove('diploma'); }
  }

  function onDelight(){ sync({ toast: true }); }

  function init(h){
    host = h || host;
    const cl = document.getElementById('achViewClose');
    if (cl && !cl._achBound) { cl._achBound = 1; cl.onclick = closeDetail; }
    const sh = document.getElementById('achView');
    if (sh && !sh._achBound) {
      sh._achBound = 1;
      sh.addEventListener('click', function (e) { if (e.target === sh) closeDetail(); });
    }
    return api;
  }

  const api = { init:init, sync:sync, render:render, showToast:showToast, hideToast:hideToast, openDetail:openDetail, closeDetail:closeDetail, onDelight:onDelight, catalog:catalog, progress:progress, textsFor:textsFor, loadStore:loadStore, trophySrc:trophySrc, trophyType:trophyType };
  window.MASILANO_ACHIEVEMENTS = api;
})();
