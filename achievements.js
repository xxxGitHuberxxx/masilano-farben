(function () {
  'use strict';
  const ACH_KEY = 'masilano.achievements.v1';
  const DELIGHT_KEY = 'masilano.delight.v1';
  const SETS = {
    lilies: ['lilies','lily1908','lilyaic','lilyblue','lilybridge','lilybs','lilyga2','lilyga431','lilyga462','lilymet2','lilypondga','lilypondnl','lilypool','lilyset','lilytoledo','lilywl'],
    fuji: ['amiura','artistsfuji','ashishiro','chinowa','fujimi','fujimitsui','fujinibon','fujisundai','fujisuri','fujitotomi','fujitsukuda','futomi','gotenyama','kanaya','mikiri','minobu','murasame','oigawafuji','redfuji','sankifuji','thunder','wave'],
    sunflowers: ['sunflowers','sunflowermunich']
  };
  const PATH_IDS = ['vangogh','monet','hokusai','klimt','anker','hodler','cezanne','hiroshige','renoir','pissarro','turner','rembrandt','sisley','friedrich'];
  const PATH_MOTIF = {
    vangogh:'sunflower', monet:'lily', hokusai:'wave', klimt:'mosaic',
    anker:'house', hodler:'mountain', cezanne:'apple', hiroshige:'bridge',
    renoir:'rose', pissarro:'tree', turner:'suncloud', rembrandt:'hat',
    sisley:'river', friedrich:'peak'
  };
  const GROUPS = [
    { id:'start', ach:['first','n5','n25','n100','n250','n500'] },
    { id:'paths', ach:['pathFirst','stationFirst'].concat(PATH_IDS.map(function (id) { return 'path:' + id; })) },
    { id:'streak', ach:['streak3','streak7','streak30'] },
    { id:'collect', ach:['set:lilies','set:fuji','set:sunflowers','cat:flowers','cat:landscapes','cat:water','cat:animals','cat:portraits','cat:city'] },
    { id:'explore', ach:['painters10','vgDelight'] }
  ];
  const TEXTS = {
  "de": {
    "title": "Ehrenvitrine",
    "lead": "Medaillen für Wege, Werkgruppen und Treue.",
    "date": "Festgehalten am {d}",
    "progress": "{n} von {N}",
    "lockedAria": "Noch nicht erreicht, {n} von {N}",
    "openHint": "Zur Ehrenvitrine",
    "groups": {
      "start": "Anfänge",
      "paths": "Malerwege",
      "streak": "Treue",
      "collect": "Sammler",
      "explore": "Entdecker"
    },
    "ach": {
      "first": {
        "n": "Erstes Bild",
        "d": "Dein erstes fertiges Bild hat seinen Platz im Album gefunden.",
        "t": "Dein erstes Bild ist fertig."
      },
      "n5": {
        "n": "Fünf Meisterwerke",
        "d": "Fünf Bilder sind fertig gemalt.",
        "t": "Fünf Meisterwerke in deinem Album."
      },
      "n25": {
        "n": "Fünfundzwanzig Meisterwerke",
        "d": "Fünfundzwanzig Bilder sind fertig gemalt.",
        "t": "Fünfundzwanzig Meisterwerke."
      },
      "n100": {
        "n": "Hundert Meisterwerke",
        "d": "Hundert Bilder sind fertig gemalt.",
        "t": "Hundert Meisterwerke."
      },
      "n250": {
        "n": "Zweihundertfünfzig Meisterwerke",
        "d": "Zweihundertfünfzig Bilder sind fertig gemalt.",
        "t": "Zweihundertfünfzig Meisterwerke."
      },
      "n500": {
        "n": "Fünfhundert Meisterwerke",
        "d": "Fünfhundert Bilder sind fertig gemalt.",
        "t": "Fünfhundert Meisterwerke."
      },
      "pathFirst": {
        "n": "Erste Station",
        "d": "Du hast das erste Bild eines Malerwegs fertig gemalt.",
        "t": "Die erste Station ist eröffnet."
      },
      "stationFirst": {
        "n": "Eine Station vollständig",
        "d": "Alle Bilder einer Station auf einem Malerweg sind fertig.",
        "t": "Eine ganze Station ist vollständig."
      },
      "streak3": {
        "n": "Drei Tage",
        "d": "An drei Tagen hast du das Bild des Tages fertig gemalt.",
        "t": "Drei Tage mit dem Bild des Tages."
      },
      "streak7": {
        "n": "Sieben Tage",
        "d": "An sieben Tagen hast du das Bild des Tages fertig gemalt.",
        "t": "Sieben Tage mit dem Bild des Tages."
      },
      "streak30": {
        "n": "Dreissig Tage",
        "d": "An dreissig Tagen hast du das Bild des Tages fertig gemalt.",
        "t": "Dreissig Tage mit dem Bild des Tages."
      },
      "set:lilies": {
        "n": "Monets Seerosen",
        "d": "Claude Monet malte die Seerosen in seinem Garten in Giverny. Du hast alle Seerosen-Bilder in Masilano fertig gemalt.",
        "t": "Alle Seerosen von Monet sind fertig."
      },
      "set:fuji": {
        "n": "Ansichten des Fuji",
        "d": "Hokusais Folge «36 Ansichten des Berges Fuji» zeigt den Berg bei Wind, Sonne und Sturm. Du hast die Fuji- und Wellenblätter in Masilano fertig gemalt.",
        "t": "Die Fuji-Ansichten sind vollständig."
      },
      "set:sunflowers": {
        "n": "Van Goghs Sonnenblumen",
        "d": "Van Gogh malte mehrere Sonnenblumen-Stillleben in Arles. Du hast die Sonnenblumen-Bilder in Masilano fertig gemalt.",
        "t": "Die Sonnenblumen sind fertig."
      },
      "cat:flowers": {
        "n": "Blumen",
        "d": "Du hast alle Bilder der Kategorie Blumen in der Galerie fertig gemalt.",
        "t": "Die Kategorie Blumen ist vollständig."
      },
      "cat:landscapes": {
        "n": "Landschaften",
        "d": "Du hast alle Bilder der Kategorie Landschaften in der Galerie fertig gemalt.",
        "t": "Die Kategorie Landschaften ist vollständig."
      },
      "cat:water": {
        "n": "Meer und Wasser",
        "d": "Du hast alle Bilder der Kategorie Meer und Wasser in der Galerie fertig gemalt.",
        "t": "Die Kategorie Meer und Wasser ist vollständig."
      },
      "cat:animals": {
        "n": "Tiere",
        "d": "Du hast alle Bilder der Kategorie Tiere in der Galerie fertig gemalt.",
        "t": "Die Kategorie Tiere ist vollständig."
      },
      "cat:portraits": {
        "n": "Porträts",
        "d": "Du hast alle Bilder der Kategorie Porträts in der Galerie fertig gemalt.",
        "t": "Die Kategorie Porträts ist vollständig."
      },
      "cat:city": {
        "n": "Stadt und Architektur",
        "d": "Du hast alle Bilder der Kategorie Stadt und Architektur in der Galerie fertig gemalt.",
        "t": "Die Kategorie Stadt und Architektur ist vollständig."
      },
      "painters10": {
        "n": "Zehn Maler",
        "d": "Du hast Bilder von zehn verschiedenen Malern fertig gemalt.",
        "t": "Bilder von zehn Malern sind fertig."
      },
      "vgDelight": {
        "n": "Musik und Wort",
        "d": "Auf Van Goghs Lebensweg hast du die Musik seiner Zeit oder das Vorlesen genutzt.",
        "t": "Musik oder Vorlesen auf Van Goghs Weg."
      },
      "pathDone": {
        "d": "Du hast alle Bilder auf diesem Lebensweg fertig gemalt.",
        "t": "Ein Lebensweg ist vollständig."
      }
    }
  },
  "en": {
    "title": "Cabinet of Honour",
    "lead": "Medals for paths, groups of works, and loyalty.",
    "date": "Recorded on {d}",
    "progress": "{n} of {N}",
    "lockedAria": "Not yet earned, {n} of {N}",
    "openHint": "Open the cabinet of honour",
    "groups": {
      "start": "Beginnings",
      "paths": "Painters’ paths",
      "streak": "Loyalty",
      "collect": "Collecting",
      "explore": "Discovery"
    },
    "ach": {
      "first": {
        "n": "First picture",
        "d": "Your first finished picture has found its place in the album.",
        "t": "Your first picture is finished."
      },
      "n5": {
        "n": "Five masterpieces",
        "d": "Five pictures have been coloured.",
        "t": "Five masterpieces in your album."
      },
      "n25": {
        "n": "Twenty-five masterpieces",
        "d": "Twenty-five pictures have been coloured.",
        "t": "Twenty-five masterpieces."
      },
      "n100": {
        "n": "A hundred masterpieces",
        "d": "A hundred pictures have been coloured.",
        "t": "A hundred masterpieces."
      },
      "n250": {
        "n": "Two hundred and fifty masterpieces",
        "d": "Two hundred and fifty pictures have been coloured.",
        "t": "Two hundred and fifty masterpieces."
      },
      "n500": {
        "n": "Five hundred masterpieces",
        "d": "Five hundred pictures have been coloured.",
        "t": "Five hundred masterpieces."
      },
      "pathFirst": {
        "n": "First station",
        "d": "You have finished the first picture on a painter’s path.",
        "t": "The first station is open."
      },
      "stationFirst": {
        "n": "A station completed",
        "d": "Every picture in a station on a painter’s path is finished.",
        "t": "A whole station is complete."
      },
      "streak3": {
        "n": "Three days",
        "d": "You have finished the picture of the day on three days.",
        "t": "Three days with the picture of the day."
      },
      "streak7": {
        "n": "Seven days",
        "d": "You have finished the picture of the day on seven days.",
        "t": "Seven days with the picture of the day."
      },
      "streak30": {
        "n": "Thirty days",
        "d": "You have finished the picture of the day on thirty days.",
        "t": "Thirty days with the picture of the day."
      },
      "set:lilies": {
        "n": "Monet’s Water Lilies",
        "d": "Claude Monet painted the water lilies in his garden at Giverny. You have finished every water-lily picture in Masilano.",
        "t": "All of Monet’s water lilies are finished."
      },
      "set:fuji": {
        "n": "Views of Mount Fuji",
        "d": "Hokusai’s series «36 Views of Mount Fuji» shows the mountain in wind, sun and storm. You have finished the Fuji and wave prints in Masilano.",
        "t": "The views of Mount Fuji are complete."
      },
      "set:sunflowers": {
        "n": "Van Gogh’s Sunflowers",
        "d": "Van Gogh painted several sunflower still lifes in Arles. You have finished the sunflower pictures in Masilano.",
        "t": "The sunflowers are finished."
      },
      "cat:flowers": {
        "n": "Flowers",
        "d": "You have finished every picture in the Flowers category in the gallery.",
        "t": "The Flowers category is complete."
      },
      "cat:landscapes": {
        "n": "Landscapes",
        "d": "You have finished every picture in the Landscapes category in the gallery.",
        "t": "The Landscapes category is complete."
      },
      "cat:water": {
        "n": "Sea and water",
        "d": "You have finished every picture in the Sea and water category in the gallery.",
        "t": "The Sea and water category is complete."
      },
      "cat:animals": {
        "n": "Animals",
        "d": "You have finished every picture in the Animals category in the gallery.",
        "t": "The Animals category is complete."
      },
      "cat:portraits": {
        "n": "Portraits",
        "d": "You have finished every picture in the Portraits category in the gallery.",
        "t": "The Portraits category is complete."
      },
      "cat:city": {
        "n": "City and architecture",
        "d": "You have finished every picture in the City and architecture category in the gallery.",
        "t": "The City and architecture category is complete."
      },
      "painters10": {
        "n": "Ten painters",
        "d": "You have finished pictures by ten different painters.",
        "t": "Pictures by ten painters are finished."
      },
      "vgDelight": {
        "n": "Music and words",
        "d": "On Van Gogh’s path you have used the music of his time or the read-aloud.",
        "t": "Music or read-aloud on Van Gogh’s path."
      },
      "pathDone": {
        "d": "You have finished every picture on this life path.",
        "t": "A life path is complete."
      }
    }
  },
  "es": {
    "title": "Vitrina de honor",
    "lead": "Medallas por caminos, grupos de obras y constancia.",
    "date": "Registrado el {d}",
    "progress": "{n} de {N}",
    "lockedAria": "Aún no conseguida, {n} de {N}",
    "openHint": "Abrir la vitrina de honor",
    "groups": {
      "start": "Comienzos",
      "paths": "Caminos de pintores",
      "streak": "Constancia",
      "collect": "Colección",
      "explore": "Descubrimiento"
    },
    "ach": {
      "first": {
        "n": "Primer cuadro",
        "d": "Tu primer cuadro terminado ha encontrado su lugar en el álbum.",
        "t": "Tu primer cuadro está terminado."
      },
      "n5": {
        "n": "Cinco obras maestras",
        "d": "Cinco cuadros están terminados.",
        "t": "Cinco obras maestras en tu álbum."
      },
      "n25": {
        "n": "Veinticinco obras maestras",
        "d": "Veinticinco cuadros están terminados.",
        "t": "Veinticinco obras maestras."
      },
      "n100": {
        "n": "Cien obras maestras",
        "d": "Cien cuadros están terminados.",
        "t": "Cien obras maestras."
      },
      "n250": {
        "n": "Doscientas cincuenta obras maestras",
        "d": "Doscientos cincuenta cuadros están terminados.",
        "t": "Doscientas cincuenta obras maestras."
      },
      "n500": {
        "n": "Quinientas obras maestras",
        "d": "Quinientos cuadros están terminados.",
        "t": "Quinientas obras maestras."
      },
      "pathFirst": {
        "n": "Primera estación",
        "d": "Has terminado el primer cuadro de un camino de pintor.",
        "t": "La primera estación está abierta."
      },
      "stationFirst": {
        "n": "Una estación completa",
        "d": "Todos los cuadros de una estación en un camino están terminados.",
        "t": "Una estación entera está completa."
      },
      "streak3": {
        "n": "Tres días",
        "d": "Has terminado el cuadro del día en tres días.",
        "t": "Tres días con el cuadro del día."
      },
      "streak7": {
        "n": "Siete días",
        "d": "Has terminado el cuadro del día en siete días.",
        "t": "Siete días con el cuadro del día."
      },
      "streak30": {
        "n": "Treinta días",
        "d": "Has terminado el cuadro del día en treinta días.",
        "t": "Treinta días con el cuadro del día."
      },
      "set:lilies": {
        "n": "Los nenúfares de Monet",
        "d": "Claude Monet pintó los nenúfares en su jardín de Giverny. Has terminado todos los nenúfares de Masilano.",
        "t": "Todos los nenúfares de Monet están terminados."
      },
      "set:fuji": {
        "n": "Vistas del Fuji",
        "d": "La serie de Hokusai «36 vistas del monte Fuji» muestra la montaña con viento, sol y tormenta. Has terminado las estampas del Fuji y de la ola en Masilano.",
        "t": "Las vistas del Fuji están completas."
      },
      "set:sunflowers": {
        "n": "Los girasoles de Van Gogh",
        "d": "Van Gogh pintó varios bodegones de girasoles en Arlés. Has terminado los girasoles de Masilano.",
        "t": "Los girasoles están terminados."
      },
      "cat:flowers": {
        "n": "Flores",
        "d": "Has terminado todos los cuadros de la categoría Flores en la galería.",
        "t": "La categoría Flores está completa."
      },
      "cat:landscapes": {
        "n": "Paisajes",
        "d": "Has terminado todos los cuadros de la categoría Paisajes en la galería.",
        "t": "La categoría Paisajes está completa."
      },
      "cat:water": {
        "n": "Mar y agua",
        "d": "Has terminado todos los cuadros de la categoría Mar y agua en la galería.",
        "t": "La categoría Mar y agua está completa."
      },
      "cat:animals": {
        "n": "Animales",
        "d": "Has terminado todos los cuadros de la categoría Animales en la galería.",
        "t": "La categoría Animales está completa."
      },
      "cat:portraits": {
        "n": "Retratos",
        "d": "Has terminado todos los cuadros de la categoría Retratos en la galería.",
        "t": "La categoría Retratos está completa."
      },
      "cat:city": {
        "n": "Ciudad y arquitectura",
        "d": "Has terminado todos los cuadros de la categoría Ciudad y arquitectura en la galería.",
        "t": "La categoría Ciudad y arquitectura está completa."
      },
      "painters10": {
        "n": "Diez pintores",
        "d": "Has terminado cuadros de diez pintores distintos.",
        "t": "Cuadros de diez pintores están terminados."
      },
      "vgDelight": {
        "n": "Música y palabra",
        "d": "En el camino de Van Gogh has usado la música de su tiempo o la lectura en voz alta.",
        "t": "Música o lectura en el camino de Van Gogh."
      },
      "pathDone": {
        "d": "Has terminado todos los cuadros de este camino de vida.",
        "t": "Un camino de vida está completo."
      }
    }
  },
  "fr": {
    "title": "Vitrine d’honneur",
    "lead": "Médailles pour les chemins, les groupes d’œuvres et la fidélité.",
    "date": "Enregistré le {d}",
    "progress": "{n} sur {N}",
    "lockedAria": "Pas encore obtenue, {n} sur {N}",
    "openHint": "Ouvrir la vitrine d’honneur",
    "groups": {
      "start": "Commencements",
      "paths": "Chemins de peintres",
      "streak": "Fidélité",
      "collect": "Collection",
      "explore": "Découverte"
    },
    "ach": {
      "first": {
        "n": "Premier tableau",
        "d": "Ton premier tableau achevé a trouvé sa place dans l’album.",
        "t": "Ton premier tableau est achevé."
      },
      "n5": {
        "n": "Cinq chefs-d’œuvre",
        "d": "Cinq tableaux sont achevés.",
        "t": "Cinq chefs-d’œuvre dans ton album."
      },
      "n25": {
        "n": "Vingt-cinq chefs-d’œuvre",
        "d": "Vingt-cinq tableaux sont achevés.",
        "t": "Vingt-cinq chefs-d’œuvre."
      },
      "n100": {
        "n": "Cent chefs-d’œuvre",
        "d": "Cent tableaux sont achevés.",
        "t": "Cent chefs-d’œuvre."
      },
      "n250": {
        "n": "Deux cent cinquante chefs-d’œuvre",
        "d": "Deux cent cinquante tableaux sont achevés.",
        "t": "Deux cent cinquante chefs-d’œuvre."
      },
      "n500": {
        "n": "Cinq cents chefs-d’œuvre",
        "d": "Cinq cents tableaux sont achevés.",
        "t": "Cinq cents chefs-d’œuvre."
      },
      "pathFirst": {
        "n": "Première station",
        "d": "Tu as achevé le premier tableau d’un chemin de peintre.",
        "t": "La première station est ouverte."
      },
      "stationFirst": {
        "n": "Une station complète",
        "d": "Tous les tableaux d’une station sur un chemin sont achevés.",
        "t": "Toute une station est complète."
      },
      "streak3": {
        "n": "Trois jours",
        "d": "Tu as achevé le tableau du jour à trois reprises.",
        "t": "Trois jours avec le tableau du jour."
      },
      "streak7": {
        "n": "Sept jours",
        "d": "Tu as achevé le tableau du jour à sept reprises.",
        "t": "Sept jours avec le tableau du jour."
      },
      "streak30": {
        "n": "Trente jours",
        "d": "Tu as achevé le tableau du jour à trente reprises.",
        "t": "Trente jours avec le tableau du jour."
      },
      "set:lilies": {
        "n": "Les Nymphéas de Monet",
        "d": "Claude Monet a peint les Nymphéas dans son jardin à Giverny. Tu as achevé tous les Nymphéas de Masilano.",
        "t": "Tous les Nymphéas de Monet sont achevés."
      },
      "set:fuji": {
        "n": "Vues du Fuji",
        "d": "La série d’Hokusai « 36 vues du mont Fuji » montre la montagne dans le vent, le soleil et l’orage. Tu as achevé les estampes du Fuji et de la vague dans Masilano.",
        "t": "Les vues du Fuji sont complètes."
      },
      "set:sunflowers": {
        "n": "Les Tournesols de Van Gogh",
        "d": "Van Gogh a peint plusieurs natures mortes de tournesols à Arles. Tu as achevé les tournesols de Masilano.",
        "t": "Les tournesols sont achevés."
      },
      "cat:flowers": {
        "n": "Fleurs",
        "d": "Tu as achevé tous les tableaux de la catégorie Fleurs dans la galerie.",
        "t": "La catégorie Fleurs est complète."
      },
      "cat:landscapes": {
        "n": "Paysages",
        "d": "Tu as achevé tous les tableaux de la catégorie Paysages dans la galerie.",
        "t": "La catégorie Paysages est complète."
      },
      "cat:water": {
        "n": "Mer et eau",
        "d": "Tu as achevé tous les tableaux de la catégorie Mer et eau dans la galerie.",
        "t": "La catégorie Mer et eau est complète."
      },
      "cat:animals": {
        "n": "Animaux",
        "d": "Tu as achevé tous les tableaux de la catégorie Animaux dans la galerie.",
        "t": "La catégorie Animaux est complète."
      },
      "cat:portraits": {
        "n": "Portraits",
        "d": "Tu as achevé tous les tableaux de la catégorie Portraits dans la galerie.",
        "t": "La catégorie Portraits est complète."
      },
      "cat:city": {
        "n": "Ville et architecture",
        "d": "Tu as achevé tous les tableaux de la catégorie Ville et architecture dans la galerie.",
        "t": "La catégorie Ville et architecture est complète."
      },
      "painters10": {
        "n": "Dix peintres",
        "d": "Tu as achevé des tableaux de dix peintres différents.",
        "t": "Des tableaux de dix peintres sont achevés."
      },
      "vgDelight": {
        "n": "Musique et parole",
        "d": "Sur le chemin de Van Gogh, tu as utilisé la musique de son temps ou la lecture à voix haute.",
        "t": "Musique ou lecture sur le chemin de Van Gogh."
      },
      "pathDone": {
        "d": "Tu as achevé tous les tableaux de ce chemin de vie.",
        "t": "Un chemin de vie est complet."
      }
    }
  },
  "it": {
    "title": "Vetrina d’onore",
    "lead": "Medaglie per i percorsi, i gruppi di opere e la costanza.",
    "date": "Registrato il {d}",
    "progress": "{n} di {N}",
    "lockedAria": "Non ancora ottenuta, {n} di {N}",
    "openHint": "Aprire la vetrina d’onore",
    "groups": {
      "start": "Inizi",
      "paths": "Percorsi dei pittori",
      "streak": "Costanza",
      "collect": "Collezione",
      "explore": "Scoperta"
    },
    "ach": {
      "first": {
        "n": "Primo quadro",
        "d": "Il tuo primo quadro finito ha trovato posto nell’album.",
        "t": "Il tuo primo quadro è finito."
      },
      "n5": {
        "n": "Cinque capolavori",
        "d": "Cinque quadri sono finiti.",
        "t": "Cinque capolavori nel tuo album."
      },
      "n25": {
        "n": "Venticinque capolavori",
        "d": "Venticinque quadri sono finiti.",
        "t": "Venticinque capolavori."
      },
      "n100": {
        "n": "Cento capolavori",
        "d": "Cento quadri sono finiti.",
        "t": "Cento capolavori."
      },
      "n250": {
        "n": "Duecentocinquanta capolavori",
        "d": "Duecentocinquanta quadri sono finiti.",
        "t": "Duecentocinquanta capolavori."
      },
      "n500": {
        "n": "Cinquecento capolavori",
        "d": "Cinquecento quadri sono finiti.",
        "t": "Cinquecento capolavori."
      },
      "pathFirst": {
        "n": "Prima stazione",
        "d": "Hai finito il primo quadro di un percorso di pittore.",
        "t": "La prima stazione è aperta."
      },
      "stationFirst": {
        "n": "Una stazione completa",
        "d": "Tutti i quadri di una stazione su un percorso sono finiti.",
        "t": "Un’intera stazione è completa."
      },
      "streak3": {
        "n": "Tre giorni",
        "d": "Hai finito il quadro del giorno in tre giorni.",
        "t": "Tre giorni con il quadro del giorno."
      },
      "streak7": {
        "n": "Sette giorni",
        "d": "Hai finito il quadro del giorno in sette giorni.",
        "t": "Sette giorni con il quadro del giorno."
      },
      "streak30": {
        "n": "Trenta giorni",
        "d": "Hai finito il quadro del giorno in trenta giorni.",
        "t": "Trenta giorni con il quadro del giorno."
      },
      "set:lilies": {
        "n": "Le Ninfee di Monet",
        "d": "Claude Monet dipinse le Ninfee nel suo giardino a Giverny. Hai finito tutte le ninfee di Masilano.",
        "t": "Tutte le Ninfee di Monet sono finite."
      },
      "set:fuji": {
        "n": "Vedute del Fuji",
        "d": "La serie di Hokusai «36 vedute del monte Fuji» mostra la montagna con vento, sole e temporale. Hai finito le stampe del Fuji e dell’onda in Masilano.",
        "t": "Le vedute del Fuji sono complete."
      },
      "set:sunflowers": {
        "n": "I Girasoli di Van Gogh",
        "d": "Van Gogh dipinse diverse nature morte di girasoli ad Arles. Hai finito i girasoli di Masilano.",
        "t": "I girasoli sono finiti."
      },
      "cat:flowers": {
        "n": "Fiori",
        "d": "Hai finito tutti i quadri della categoria Fiori in galleria.",
        "t": "La categoria Fiori è completa."
      },
      "cat:landscapes": {
        "n": "Paesaggi",
        "d": "Hai finito tutti i quadri della categoria Paesaggi in galleria.",
        "t": "La categoria Paesaggi è completa."
      },
      "cat:water": {
        "n": "Mare e acqua",
        "d": "Hai finito tutti i quadri della categoria Mare e acqua in galleria.",
        "t": "La categoria Mare e acqua è completa."
      },
      "cat:animals": {
        "n": "Animali",
        "d": "Hai finito tutti i quadri della categoria Animali in galleria.",
        "t": "La categoria Animali è completa."
      },
      "cat:portraits": {
        "n": "Ritratti",
        "d": "Hai finito tutti i quadri della categoria Ritratti in galleria.",
        "t": "La categoria Ritratti è completa."
      },
      "cat:city": {
        "n": "Città e architettura",
        "d": "Hai finito tutti i quadri della categoria Città e architettura in galleria.",
        "t": "La categoria Città e architettura è completa."
      },
      "painters10": {
        "n": "Dieci pittori",
        "d": "Hai finito quadri di dieci pittori diversi.",
        "t": "Quadri di dieci pittori sono finiti."
      },
      "vgDelight": {
        "n": "Musica e parola",
        "d": "Sul percorso di Van Gogh hai usato la musica del suo tempo o la lettura ad alta voce.",
        "t": "Musica o lettura sul percorso di Van Gogh."
      },
      "pathDone": {
        "d": "Hai finito tutti i quadri di questo percorso di vita.",
        "t": "Un percorso di vita è completo."
      }
    }
  }
};

  let host = null;
  let toastQ = [];
  let toastBusy = false;
  let toastT = 0;

  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function pack(){ return TEXTS[lang()] || TEXTS.de; }
  function fill(s, vars){
    return String(s || '').replace(/\{(\w+)\}/g, function (_, k) { return (vars && vars[k] != null) ? vars[k] : ''; });
  }
  function esc(s){ return String(s || '').replace(/[&<>"']/g, function (c) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }

  function loadStore(){
    try { return JSON.parse(localStorage.getItem(ACH_KEY) || 'null') || { unlocked: {} }; }
    catch (e) { return { unlocked: {} }; }
  }
  function saveStore(o){ try { localStorage.setItem(ACH_KEY, JSON.stringify(o)); } catch (e) {} }
  function delightOn(){
    try { const o = JSON.parse(localStorage.getItem(DELIGHT_KEY) || 'null') || {}; return !!o.vgMusic; }
    catch (e) { return false; }
  }

  function catalog(){
    const rows = [
      { id:'first', group:'start', tier:'bronze', motif:'star', kind:'count', n:1 },
      { id:'n5', group:'start', tier:'bronze', motif:'palette', kind:'count', n:5 },
      { id:'n25', group:'start', tier:'silver', motif:'palette', kind:'count', n:25 },
      { id:'n100', group:'start', tier:'gold', motif:'laurel', kind:'count', n:100 },
      { id:'n250', group:'start', tier:'gold', motif:'laurel', kind:'count', n:250 },
      { id:'n500', group:'start', tier:'gold', motif:'laurel', kind:'count', n:500 },
      { id:'pathFirst', group:'paths', tier:'bronze', motif:'sign', kind:'pathWork' },
      { id:'stationFirst', group:'paths', tier:'silver', motif:'sign', kind:'station' }
    ];
    PATH_IDS.forEach(function (pid) {
      rows.push({ id:'path:' + pid, group:'paths', tier:'gold', motif: PATH_MOTIF[pid] || 'sign', kind:'path', path:pid });
    });
    rows.push(
      { id:'streak3', group:'streak', tier:'bronze', motif:'sun', kind:'streak', n:3 },
      { id:'streak7', group:'streak', tier:'silver', motif:'sun', kind:'streak', n:7 },
      { id:'streak30', group:'streak', tier:'gold', motif:'sun', kind:'streak', n:30 },
      { id:'set:lilies', group:'collect', tier:'gold', motif:'lily', kind:'set', set:'lilies' },
      { id:'set:fuji', group:'collect', tier:'gold', motif:'wave', kind:'set', set:'fuji' },
      { id:'set:sunflowers', group:'collect', tier:'gold', motif:'sunflower', kind:'set', set:'sunflowers' },
      { id:'cat:flowers', group:'collect', tier:'silver', motif:'blossom', kind:'cat', cat:'flowers' },
      { id:'cat:landscapes', group:'collect', tier:'silver', motif:'mountain', kind:'cat', cat:'landscapes' },
      { id:'cat:water', group:'collect', tier:'silver', motif:'wave', kind:'cat', cat:'water' },
      { id:'cat:animals', group:'collect', tier:'silver', motif:'hare', kind:'cat', cat:'animals' },
      { id:'cat:portraits', group:'collect', tier:'silver', motif:'portrait', kind:'cat', cat:'portraits' },
      { id:'cat:city', group:'collect', tier:'silver', motif:'facade', kind:'cat', cat:'city' },
      { id:'painters10', group:'explore', tier:'bronze', motif:'compass', kind:'painters', n:10 },
      { id:'vgDelight', group:'explore', tier:'silver', motif:'lyre', kind:'delight' }
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
  function pathWorksDone(){
    let n = 0;
    ((host && host.PATHS) || []).forEach(function (p) {
      (host.pathSteps(p) || []).forEach(function (s) { if (s.pid && host.isDone(s.pid)) n++; });
    });
    return n;
  }
  function stationsDone(){
    let n = 0;
    ((host && host.PATHS) || []).forEach(function (p) {
      (p.stations || []).forEach(function (st) { if (st.works && st.works.length && host.stationDone(st)) n++; });
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
    if (ach.kind === 'pathWork') {
      const n = pathWorksDone() > 0 ? 1 : 0;
      return { n:n, N:1, done: n >= 1 };
    }
    if (ach.kind === 'station') {
      const n = stationsDone() > 0 ? 1 : 0;
      return { n:n, N:1, done: n >= 1 };
    }
    if (ach.kind === 'path') {
      const path = ((host.PATHS || []).find(function (p) { return p.id === ach.path; })) || null;
      if (!path) return { n:0, N:1, done:false };
      const steps = host.pathSteps(path) || [];
      const n = steps.filter(function (s) { return host.isDone(s.pid); }).length;
      return { n:n, N: steps.length || 1, done: steps.length > 0 && n >= steps.length };
    }
    if (ach.kind === 'set') {
      const ids = unique(SETS[ach.set] || []);
      const n = doneOf(ids);
      return { n:n, N: ids.length || 1, done: ids.length > 0 && n >= ids.length };
    }
    if (ach.kind === 'cat') {
      const ids = unique((host.galCats && host.galCats[ach.cat]) || []);
      const n = doneOf(ids);
      return { n:n, N: ids.length || 1, done: ids.length > 0 && n >= ids.length };
    }
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

  function textsFor(id){
    const P = pack();
    const A = (P.ach && P.ach[id]) || {};
    if (id.indexOf('path:') === 0) {
      const pid = id.slice(5);
      const path = ((host && host.PATHS) || []).find(function (p) { return p.id === pid; });
      const name = (path && host && host.L) ? (host.L(path, 'title') || path.title) : (path && path.title) || pid;
      return { n: name, d: (P.ach.pathDone && P.ach.pathDone.d) || '', t: (P.ach.pathDone && P.ach.pathDone.t) || '' };
    }
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

  function motifPath(name){
    const m = {
      star: '<polygon points="40,16 44,32 60,32 47,42 52,58 40,48 28,58 33,42 20,32 36,32"/>',
      palette: '<path d="M26 26c-7 7-8 20 1 27 7 5 16 4 20-2 2-3 0-6-3-6-3 0-5 2-7 2-4 0-6-3-6-6s2-5 6-5c2 0 3 1 5 1 3 0 5-3 5-6 0-7-7-12-16-12-2 0-4 0-5 1z"/><circle cx="34" cy="30" r="2"/><circle cx="43" cy="27" r="2"/><circle cx="50" cy="32" r="2"/><circle cx="33" cy="40" r="2"/>',
      laurel: '<path fill="none" stroke-width="2" d="M40 18v44M40 28c-10 4-16 14-16 24M40 28c10 4 16 14 16 24M28 36c-2 2-4 6-4 10M52 36c2 2 4 6 4 10"/>',
      sunflower: '<circle cx="40" cy="40" r="7"/><g fill="none" stroke-width="2">'+[0,30,60,90,120,150].map(function(a){return '<ellipse transform="rotate('+a+' 40 40)" cx="40" cy="24" rx="5" ry="9"/>';}).join('')+'</g>',
      lily: '<path d="M40 58c0-8 0-16 0-22 8 2 16 10 16 20 0 0-8 2-16 2zM40 58c0-8 0-16 0-22-8 2-16 10-16 20 0 0 8 2 16 2z"/><path d="M40 20c2 8 4 12 8 16-6 0-8 2-8 10 0-8-2-10-8-10 4-4 6-8 8-16z"/>',
      wave: '<path fill="none" stroke-width="2.2" d="M14 48c8-14 12-22 20-22 8 0 8 14 16 14 8 0 10-10 16-16"/><path fill="none" stroke-width="2.2" d="M16 58c10-6 16-4 24-4 10 0 14-6 22-12"/>',
      mosaic: '<rect x="24" y="22" width="14" height="14" rx="1"/><rect x="42" y="22" width="14" height="14" rx="1"/><rect x="24" y="40" width="14" height="14" rx="1"/><rect x="42" y="40" width="10" height="10" rx="1"/><rect x="54" y="42" width="6" height="14" rx="1"/>',
      mountain: '<path d="M12 58l18-28 8 12 10-18 20 34z"/>',
      peak: '<path d="M16 58l14-26 8 10 6-14 20 30z"/><path fill="none" stroke-width="1.6" d="M30 32l4 4 4-3"/>',
      apple: '<path d="M40 24c2 6 2 8 0 10-10-2-18 6-18 16 0 12 10 20 18 20s18-8 18-20c0-10-8-18-18-16z"/><path fill="none" stroke-width="1.8" d="M40 24c2-8 8-10 12-10"/>',
      bridge: '<path fill="none" stroke-width="2" d="M14 50h52M20 50V36c10-10 30-10 40 0v14M26 50v8M54 50v8"/>',
      rose: '<circle cx="40" cy="40" r="5"/><path fill="none" stroke-width="1.8" d="M40 28c8 2 12 8 12 14M40 28c-8 2-12 8-12 14M28 44c4 10 12 14 12 14s8-4 12-14"/>',
      tree: '<path d="M40 58V36"/><path d="M40 40c-10-2-16-12-8-18 2 6 6 6 8 4 2 2 6 2 8-4 8 6 2 16-8 18z"/>',
      sun: '<circle cx="40" cy="40" r="10"/><g fill="none" stroke-width="2" stroke-linecap="round"><path d="M40 18v6M40 56v6M18 40h6M56 40h6M24 24l4 4M52 52l4 4M24 56l4-4M52 28l4-4"/></g>',
      suncloud: '<circle cx="36" cy="34" r="8"/><path d="M28 50h26c4 0 8-3 8-7s-4-7-8-7c-1-6-6-9-11-8-3 4-3 8-2 10-6 0-13 4-13 12z"/>',
      hat: '<path d="M22 48h36c0-2-2-4-6-5-2-10-10-16-12-16s-10 6-12 16c-4 1-6 3-6 5z"/>',
      river: '<path fill="none" stroke-width="2.2" d="M18 28c12 6 12 10 0 16 14 6 14 10 2 16M40 24c12 6 12 10 0 16 14 6 14 10 2 16"/>',
      house: '<path d="M20 44l20-18 20 18v18H20z"/><path d="M36 62V50h8v12"/>',
      sign: '<rect x="36" y="22" width="8" height="40" rx="1"/><path d="M44 26h16l-4 8 4 8H44z"/>',
      blossom: '<circle cx="40" cy="40" r="5"/><ellipse cx="40" cy="26" rx="6" ry="9"/><ellipse cx="40" cy="54" rx="6" ry="9"/><ellipse cx="26" cy="40" rx="9" ry="6"/><ellipse cx="54" cy="40" rx="9" ry="6"/>',
      hare: '<path d="M28 50c0-8 6-14 14-14 4 0 6 1 8 2 2-8 4-16 8-20 1 8-1 16-4 20 4 3 6 8 4 14-3 8-14 12-22 10-6-2-8-6-8-12z"/>',
      portrait: '<circle cx="40" cy="32" r="9"/><path d="M22 58c2-12 10-16 18-16s16 4 18 16z"/>',
      facade: '<path d="M20 58V28l20-12 20 12v30z"/><path fill="none" stroke-width="1.6" d="M32 58V42h16v16M28 34h6M46 34h6M28 44h6"/>',
      compass: '<circle cx="40" cy="40" r="16" fill="none" stroke-width="2"/><path d="M40 20v6M40 54v6M20 40h6M54 40h6"/><path d="M40 26l6 22-6-4-6 4z"/>',
      lyre: '<path fill="none" stroke-width="2" d="M28 22c0 16 4 28 12 28s12-12 12-28"/><path d="M36 50h8v10h-8z"/><path fill="none" stroke-width="1.6" d="M32 24h16M32 32h16M32 40h16"/>'
    };
    return m[name] || m.star;
  }

  const DEFS = '<defs>'
    + '<radialGradient id="achGoldFill" cx="38%" cy="32%"><stop offset="0%" stop-color="#fff4d2"/><stop offset="45%" stop-color="#e2c57a"/><stop offset="100%" stop-color="#a87a32"/></radialGradient>'
    + '<radialGradient id="achSilverFill" cx="38%" cy="32%"><stop offset="0%" stop-color="#f7f8fa"/><stop offset="50%" stop-color="#c5c9ce"/><stop offset="100%" stop-color="#7e868e"/></radialGradient>'
    + '<radialGradient id="achBronzeFill" cx="38%" cy="32%"><stop offset="0%" stop-color="#f3d2b0"/><stop offset="50%" stop-color="#c4844e"/><stop offset="100%" stop-color="#7a4a28"/></radialGradient>'
    + '</defs>';

  function beads(){
    let s = '';
    for (let i = 0; i < 16; i++) {
      const a = (Math.PI * 2 * i) / 16;
      s += '<circle class="m-bead" cx="'+(40 + Math.cos(a) * 36.2).toFixed(1)+'" cy="'+(40 + Math.sin(a) * 36.2).toFixed(1)+'" r="1.4"/>';
    }
    return s;
  }

  function medalSvg(ach){
    return '<svg viewBox="0 0 80 80" aria-hidden="true">'+DEFS
      + '<circle class="m-fill" cx="40" cy="40" r="31"/>'
      + '<circle class="m-rim" cx="40" cy="40" r="37.5" fill="none" stroke-width="3"/>'
      + '<circle class="m-rim" cx="40" cy="40" r="33" fill="none" stroke-width="1.2" opacity=".85"/>'
      + beads()
      + '<g class="m-motif">'+motifPath(ach.motif)+'</g>'
      + '</svg>';
  }

  function medalMarkup(ach, pr, unlocked){
    const tx = textsFor(ach.id);
    const P = pack();
    const label = unlocked ? tx.n : fill(P.lockedAria, pr) + ', ' + tx.n;
    let plaque = '<span class="medal-plaque"><span class="nm">'+esc(tx.n)+'</span>';
    if (!unlocked && pr.N) plaque += '<span class="pr">'+esc(fill(P.progress, pr))+'</span>';
    plaque += '</span>';
    return '<button type="button" class="medal '+ach.tier+(unlocked?'':' locked')+'" data-ach="'+esc(ach.id)+'" aria-label="'+esc(label)+'">'
      + '<span class="medal-face">'+medalSvg(ach)+'</span>'+plaque+'</button>';
  }

  function bindMedals(root){
    if (!root) return;
    root.querySelectorAll('.medal').forEach(function (b) {
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
    let html = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">'+DEFS+'</svg>';
    html += '<h2 class="vitrine-title">'+esc(P.title)+'</h2><p class="vitrine-lead">'+esc(P.lead)+'</p>';
    GROUPS.forEach(function (g) {
      html += '<section class="vitrine-group" data-group="'+g.id+'"><div class="vitrine-kicker">'+esc(P.groups[g.id] || g.id)+'</div><div class="vitrine-grid">';
      g.ach.forEach(function (id) {
        const ach = byId[id]; if (!ach) return;
        const pr = progress(ach);
        const rec = store.unlocked[id];
        html += medalMarkup(ach, pr, !!(rec || pr.done));
      });
      html += '</div></section>';
    });
    el.innerHTML = html;
    bindMedals(el);
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
        let at = today;
        if (ach.kind === 'path' && host.certDate) {
          const cd = host.certDate(ach.path);
          if (cd) at = cd;
        }
        store.unlocked[ach.id] = { at: at };
        newly.push(ach);
      }
    });
    if (newly.length) saveStore(store);
    if (opts.toast && newly.length) enqueueToasts(newly);
    const root = document.getElementById('vitrine');
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
    const tx = textsFor(ach.id);
    const P = pack();
    el.hidden = false;
    el.innerHTML = '<div class="medal-face medal '+ach.tier+'">'+medalSvg(ach)+'</div>'
      + '<div class="ach-name">'+esc(tx.n)+'</div><p class="ach-line">'+esc(tx.t)+'</p>';
    el.setAttribute('aria-label', tx.n + '. ' + tx.t + '. ' + P.openHint);
    el.classList.add('show');
    el.onclick = function () {
      hideToast();
      if (host && host.showAlbum) host.showAlbum();
      setTimeout(function () {
        const v = document.getElementById('vitrine');
        if (v) v.scrollIntoView({ block:'start', behavior: (host && host.reduceMotion && host.reduceMotion()) ? 'auto' : 'smooth' });
      }, 200);
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

  function openDetail(id){
    const ach = catalog().find(function (a) { return a.id === id; });
    const sh = document.getElementById('achView');
    if (!ach || !sh) return;
    const store = loadStore();
    const rec = store.unlocked[id];
    const pr = progress(ach);
    const unlocked = !!(rec || pr.done);
    const tx = textsFor(id);
    const P = pack();
    const hold = document.getElementById('achViewMedal');
    if (hold) hold.innerHTML = '<div class="medal-face medal '+ach.tier+(unlocked?'':' locked')+'">'+medalSvg(ach)+'</div>';
    const title = document.getElementById('achViewTitle');
    if (title) title.textContent = tx.n;
    const desc = document.getElementById('achViewDesc');
    if (desc) desc.textContent = tx.d;
    const date = document.getElementById('achViewDate');
    if (date) {
      if (unlocked && rec && rec.at) date.textContent = fill(P.date, { d: formatDate(rec.at) });
      else if (!unlocked) date.textContent = fill(P.progress, pr);
      else date.textContent = '';
    }
    sh.classList.remove('hidden');
    const cl = document.getElementById('achViewClose');
    if (cl) cl.focus();
  }
  function closeDetail(){
    const sh = document.getElementById('achView');
    if (sh) sh.classList.add('hidden');
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

  const api = { init:init, sync:sync, render:render, showToast:showToast, hideToast:hideToast, openDetail:openDetail, closeDetail:closeDetail, onDelight:onDelight, catalog:catalog, progress:progress, textsFor:textsFor, loadStore:loadStore };
  window.MASILANO_ACHIEVEMENTS = api;
})();
