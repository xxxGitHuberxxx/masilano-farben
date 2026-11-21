/* v10.25 Saal der Vollendung: exclusive Museums-Zifferblaetter (Wear OS) as Lebensweg rewards. */
(function () {
  'use strict';
  const CLAIM_KEY = 'masilano.faceClaims.v1';
  const FACES = [
    { id:'monet', path:'monet', artist:'Claude Monet', year:'1875',
      m:{ de:'National Gallery of Art, Washington', en:'National Gallery of Art, Washington', fr:'National Gallery of Art, Washington', it:'National Gallery of Art, Washington', es:'National Gallery of Art, Washington' },
      n:{ de:'Frau mit Sonnenschirm', en:'Woman with a Parasol', fr:'La Femme à l’ombrelle', it:'Donna con parasole', es:'Mujer con sombrilla' },
      w:{ de:'Frau mit Sonnenschirm – Madame Monet und ihr Sohn', en:'Woman with a Parasol – Madame Monet and Her Son', fr:'La Femme à l’ombrelle – Madame Monet et son fils', it:'Donna con parasole – Madame Monet e suo figlio', es:'Mujer con sombrilla – Madame Monet y su hijo' } },
    { id:'lilybridge', path:'monet', artist:'Claude Monet', year:'1899',
      n:{ de:'Seerosenbrücke', en:'Water Lily Bridge', fr:'Le Pont japonais', it:'Il ponte giapponese', es:'El puente japonés' },
      w:{ de:'Seerosen und japanische Brücke', en:'Water Lilies and Japanese Bridge', fr:'Nymphéas et pont japonais', it:'Ninfee e ponte giapponese', es:'Nenúfares y puente japonés' } },
    { id:'wave', path:'hokusai', artist:'Katsushika Hokusai', year:'1830–1832',
      n:{ de:'Die grosse Welle', en:'The Great Wave', fr:'La Grande Vague', it:'La grande onda', es:'La gran ola' },
      w:{ de:'Die grosse Welle vor Kanagawa', en:'The Great Wave off Kanagawa', fr:'La Grande Vague de Kanagawa', it:'La grande onda di Kanagawa', es:'La gran ola de Kanagawa' } },
    { id:'redfuji', path:'hokusai', artist:'Katsushika Hokusai', year:'1830–1832',
      n:{ de:'Roter Fuji', en:'Red Fuji', fr:'Fuji rouge', it:'Fuji rosso', es:'Fuji rojo' },
      w:{ de:'Feiner Wind, klarer Morgen', en:'Fine Wind, Clear Morning', fr:'Vent du sud, ciel clair', it:'Vento del sud, cielo sereno', es:'Viento del sur, cielo despejado' } },
    { id:'almond', path:'vangogh', artist:'Vincent van Gogh', year:'1890',
      n:{ de:'Mandelblüte', en:'Almond Blossom', fr:'Amandier en fleurs', it:'Mandorlo in fiore', es:'Almendro en flor' },
      w:{ de:'Mandelblüte', en:'Almond Blossom', fr:'Amandier en fleurs', it:'Mandorlo in fiore', es:'Almendro en flor' } },
    { id:'kiss', path:'klimt', artist:'Gustav Klimt', year:'1907–1908',
      n:{ de:'Der Kuss', en:'The Kiss', fr:'Le Baiser', it:'Il bacio', es:'El beso' },
      w:{ de:'Der Kuss', en:'The Kiss', fr:'Le Baiser', it:'Il bacio', es:'El beso' } },
    { id:'ohashi', path:'hiroshige', artist:'Utagawa Hiroshige', year:'1857',
      n:{ de:'Shin-Ohashi', en:'Shin-Ōhashi', fr:'Shin-Ōhashi', it:'Shin-Ōhashi', es:'Shin-Ōhashi' },
      w:{ de:'Plötzlicher Regen über der Shin-Ohashi-Brücke', en:'Sudden Shower over Shin-Ōhashi Bridge', fr:'Averse soudaine sur le pont Shin-Ōhashi', it:'Acquazzone improvviso sul ponte Shin-Ōhashi', es:'Chaparrón repentino sobre el puente Shin-Ōhashi' } },
    { id:'wanderer', path:'friedrich', artist:'Caspar David Friedrich', year:'1817',
      n:{ de:'Der Wanderer', en:'The Wanderer', fr:'Le Voyageur', it:'Il viandante', es:'El caminante' },
      w:{ de:'Der Wanderer über dem Nebelmeer', en:'Wanderer above the Sea of Fog', fr:'Le Voyageur contemplant une mer de nuages', it:'Viandante sul mare di nebbia', es:'El caminante sobre el mar de nubes' } },
    { id:'thunersee', path:'hodler', artist:'Ferdinand Hodler', year:'1905',
      n:{ de:'Thunersee', en:'Lake Thun', fr:'Lac de Thoune', it:'Lago di Thun', es:'Lago de Thun' },
      w:{ de:'Thunersee mit symmetrischer Spiegelung', en:'Lake Thun, Symmetrical Reflection', fr:'Le lac de Thoune, reflet symétrique', it:'Lago di Thun con riflesso simmetrico', es:'Lago de Thun con reflejo simétrico' } },
    { id:'niesen', path:'hodler', artist:'Ferdinand Hodler', year:'1910',
      n:{ de:'Der Niesen', en:'The Niesen', fr:'Le Niesen', it:'Il Niesen', es:'El Niesen' },
      w:{ de:'Der Niesen', en:'The Niesen', fr:'Le Niesen', it:'Il Niesen', es:'El Niesen' } },
    { id:'segantini', path:'segantini', artist:'Giovanni Segantini', year:'1891',
      n:{ de:'Mittag in den Alpen', en:'Midday in the Alps', fr:'Midi dans les Alpes', it:'Mezzogiorno sulle Alpi', es:'Mediodía en los Alpes' },
      w:{ de:'Mittag in den Alpen', en:'Midday in the Alps', fr:'Midi dans les Alpes', it:'Mezzogiorno sulle Alpi', es:'Mediodía en los Alpes' } },
    { id:'ballon', path:'vallotton', artist:'Félix Vallotton', year:'1899',
      n:{ de:'Der Ball', en:'The Ball', fr:'Le Ballon', it:'Il pallone', es:'El balón' },
      w:{ de:'Der Ball', en:'The Ball', fr:'Le Ballon', it:'Il pallone', es:'El balón' } },
    { id:'silsersee', path:'giacometti', artist:'Giovanni Giacometti', year:'1927',
      n:{ de:'Silsersee', en:'Lake Sils', fr:'Lac de Sils', it:'Lago di Sils', es:'Lago de Sils' },
      w:{ de:'Blick auf den Silsersee von Capolago', en:'View of Lake Sils from Capolago', fr:'Vue du lac de Sils depuis Capolago', it:'Veduta del lago di Sils da Capolago', es:'Vista del lago de Sils desde Capolago' } },
    { id:'buecherwurm', path:'spitzweg', artist:'Carl Spitzweg', year:'um 1850',
      n:{ de:'Der Bücherwurm', en:'The Bookworm', fr:'Le Bibliomane', it:'Il topo di biblioteca', es:'El ratón de biblioteca' },
      w:{ de:'Der Bücherwurm', en:'The Bookworm', fr:'Le Bibliomane', it:'Il topo di biblioteca', es:'El ratón de biblioteca' } },
    { id:'primeln', path:'moser', artist:'Koloman Moser', year:'um 1912',
      n:{ de:'Primeln', en:'Primroses', fr:'Primevères', it:'Primule', es:'Primaveras' },
      w:{ de:'Primeln im Korb', en:'Primroses in a Basket', fr:'Primevères dans un panier', it:'Primule in un cesto', es:'Primaveras en un cesto' } },
    { id:'ernte', path:'zuend', artist:'Robert Zünd', year:'1860',
      n:{ de:'Die Ernte', en:'The Harvest', fr:'La Moisson', it:'La mietitura', es:'La cosecha' },
      w:{ de:'Die Ernte', en:'The Harvest', fr:'La Moisson', it:'La mietitura', es:'La cosecha' } },
    { id:'montreux', path:'calame', artist:'Alexandre Calame', year:'1863',
      n:{ de:'Montreux', en:'Montreux', fr:'Montreux', it:'Montreux', es:'Montreux' },
      w:{ de:'Das Ende des Genfersees bei Montreux', en:'The Head of Lake Geneva near Montreux', fr:'Vue de l’extrémité du lac de Genève près de Montreux', it:'L’estremità del lago Lemano presso Montreux', es:'El extremo del lago Lemán cerca de Montreux' } },
    { id:'gletscher', path:'wolf', artist:'Caspar Wolf', year:'1774',
      n:{ de:'Der Gletscher', en:'The Glacier', fr:'Le Glacier', it:'Il ghiacciaio', es:'El glaciar' },
      w:{ de:'Der Untere Grindelwaldgletscher', en:'The Lower Grindelwald Glacier', fr:'Le glacier inférieur de Grindelwald', it:'Il ghiacciaio inferiore di Grindelwald', es:'El glaciar inferior de Grindelwald' } },
    { id:'sonnenschein', path:'ancher', artist:'Anna Ancher', year:'1891',
      n:{ de:'Sonnenschein', en:'Sunlight', fr:'Soleil', it:'Sole', es:'Luz de sol' },
      w:{ de:'Sonnenschein im blauen Zimmer', en:'Sunlight in the Blue Room', fr:'Soleil dans la chambre bleue', it:'Sole nella stanza blu', es:'Luz de sol en la habitación azul' } },
    { id:'prater', path:'blau', artist:'Tina Blau', year:'1882',
      n:{ de:'Frühling im Prater', en:'Spring in the Prater', fr:'Printemps au Prater', it:'Primavera al Prater', es:'Primavera en el Prater' },
      w:{ de:'Frühling im Prater', en:'Spring in the Prater', fr:'Printemps au Prater', it:'Primavera al Prater', es:'Primavera en el Prater' } },
    { id:'gotthard', path:'koller', artist:'Rudolf Koller', year:'1873',
      n:{ de:'Die Gotthardpost', en:'The Gotthard Post', fr:'La diligence du Gothard', it:'La diligenza del Gottardo', es:'La diligencia del Gotardo' },
      w:{ de:'Die Gotthardpost', en:'The Gotthard Post', fr:'La diligence du Gothard', it:'La diligenza del Gottardo', es:'La diligencia del Gotardo' } },
    { id:'gewitter', path:'diday', artist:'François Diday', year:'1839',
      n:{ de:'Das Gewitter', en:'The Storm', fr:'L’Orage', it:'Il temporale', es:'La tormenta' },
      w:{ de:'Gewitter über dem Genfersee', en:'Storm over Lake Geneva', fr:'Orage sur le Léman', it:'Temporale sul Lemano', es:'Tormenta sobre el lago Lemán' } },
    { id:'hacking', path:'schindler', artist:'Emil Jakob Schindler', year:'1883',
      n:{ de:'Frühling in Hacking', en:'Spring in Hacking', fr:'Printemps à Hacking', it:'Primavera a Hacking', es:'Primavera en Hacking' },
      w:{ de:'Frühling in Hacking', en:'Spring in Hacking', fr:'Printemps à Hacking', it:'Primavera a Hacking', es:'Primavera en Hacking' } },
    { id:'pergola', path:'egner', artist:'Marie Egner', year:'1910',
      n:{ de:'Die Pergola', en:'The Pergola', fr:'La Pergola', it:'Il pergolato', es:'La pérgola' },
      w:{ de:'In der Pergola', en:'In the Pergola', fr:'Sous la pergola', it:'Sotto il pergolato', es:'En la pérgola' } },
    { id:'mohn', path:'wisinger', artist:'Olga Wisinger-Florian', year:'um 1895',
      n:{ de:'Blühender Mohn', en:'Poppies in Bloom', fr:'Coquelicots en fleurs', it:'Papaveri in fiore', es:'Amapolas en flor' },
      w:{ de:'Blühender Mohn', en:'Poppies in Bloom', fr:'Coquelicots en fleurs', it:'Papaveri in fiore', es:'Amapolas en flor' } },
    { id:'schulexamen', path:'anker', artist:'Albert Anker', year:'1862',
      m:{ de:'Privatbesitz (Foto: SIK-ISEA)', en:'Private collection (photo: SIK-ISEA)', fr:'Collection privée (photo : SIK-ISEA)', it:'Collezione privata (foto: SIK-ISEA)', es:'Colección privada (foto: SIK-ISEA)' },
      n:{ de:'Das Schulexamen', en:'The School Exam', fr:'L’Examen à l’école', it:'L’esame a scuola', es:'El examen escolar' },
      w:{ de:'Das Schulexamen', en:'The School Exam', fr:'L’Examen à l’école', it:'L’esame a scuola', es:'El examen escolar' } },
    { id:'nightwatch', path:'rembrandt', artist:'Rembrandt van Rijn', year:'1642',
      m:{ de:'Rijksmuseum, Amsterdam', en:'Rijksmuseum, Amsterdam', fr:'Rijksmuseum, Amsterdam', it:'Rijksmuseum, Amsterdam', es:'Rijksmuseum, Ámsterdam' },
      n:{ de:'Die Nachtwache', en:'The Night Watch', fr:'La Ronde de nuit', it:'La ronda di notte', es:'La ronda de noche' },
      w:{ de:'Die Nachtwache', en:'The Night Watch', fr:'La Ronde de nuit', it:'La ronda di notte', es:'La ronda de noche' } },
    { id:'sisters', path:'renoir', artist:'Pierre-Auguste Renoir', year:'1881',
      m:{ de:'The Art Institute of Chicago', en:'The Art Institute of Chicago', fr:'The Art Institute of Chicago', it:'The Art Institute of Chicago', es:'The Art Institute of Chicago' },
      n:{ de:'Zwei Schwestern', en:'Two Sisters', fr:'Les Deux Sœurs', it:'Le due sorelle', es:'Las dos hermanas' },
      w:{ de:'Zwei Schwestern (Auf der Terrasse)', en:'Two Sisters (On the Terrace)', fr:'Les Deux Sœurs (Sur la terrasse)', it:'Le due sorelle (Sulla terrazza)', es:'Las dos hermanas (En la terraza)' } },
    { id:'cardplayers', path:'cezanne', artist:'Paul Cézanne', year:'1890–1892',
      m:{ de:'The Metropolitan Museum of Art, New York', en:'The Metropolitan Museum of Art, New York', fr:'The Metropolitan Museum of Art, New York', it:'The Metropolitan Museum of Art, New York', es:'The Metropolitan Museum of Art, Nueva York' },
      n:{ de:'Die Kartenspieler', en:'The Card Players', fr:'Les Joueurs de cartes', it:'I giocatori di carte', es:'Los jugadores de cartas' },
      w:{ de:'Die Kartenspieler', en:'The Card Players', fr:'Les Joueurs de cartes', it:'I giocatori di carte', es:'Los jugadores de cartas' } },
    { id:'temeraire', path:'turner', artist:'J. M. W. Turner', year:'1839',
      m:{ de:'The National Gallery, London', en:'The National Gallery, London', fr:'The National Gallery, Londres', it:'The National Gallery, Londra', es:'The National Gallery, Londres' },
      n:{ de:'Die Temeraire', en:'The Fighting Temeraire', fr:'Le Téméraire', it:'Il Temeraire', es:'El Temeraire' },
      w:{ de:'Die letzte Fahrt der Temeraire', en:'The Fighting Temeraire', fr:'Le Dernier Voyage du Téméraire', it:'L’ultimo viaggio del Temeraire', es:'El último viaje del Temeraire' } },
    { id:'montmartre', path:'pissarro', artist:'Camille Pissarro', year:'1897',
      m:{ de:'The Metropolitan Museum of Art, New York', en:'The Metropolitan Museum of Art, New York', fr:'The Metropolitan Museum of Art, New York', it:'The Metropolitan Museum of Art, New York', es:'The Metropolitan Museum of Art, Nueva York' },
      n:{ de:'Boulevard Montmartre', en:'Boulevard Montmartre', fr:'Boulevard Montmartre', it:'Boulevard Montmartre', es:'Bulevar Montmartre' },
      w:{ de:'Der Boulevard Montmartre an einem Wintermorgen', en:'The Boulevard Montmartre on a Winter Morning', fr:'Le Boulevard Montmartre, matin d’hiver', it:'Il Boulevard Montmartre in un mattino d’inverno', es:'El bulevar Montmartre en una mañana de invierno' } },
    { id:'villeneuve', path:'sisley', artist:'Alfred Sisley', year:'1872',
      m:{ de:'The Metropolitan Museum of Art, New York', en:'The Metropolitan Museum of Art, New York', fr:'The Metropolitan Museum of Art, New York', it:'The Metropolitan Museum of Art, New York', es:'The Metropolitan Museum of Art, Nueva York' },
      n:{ de:'Brücke von Villeneuve', en:'Bridge at Villeneuve', fr:'Le Pont de Villeneuve', it:'Il ponte di Villeneuve', es:'El puente de Villeneuve' },
      w:{ de:'Die Brücke von Villeneuve-la-Garenne', en:'The Bridge at Villeneuve-la-Garenne', fr:'Le Pont à Villeneuve-la-Garenne', it:'Il ponte di Villeneuve-la-Garenne', es:'El puente de Villeneuve-la-Garenne' } }
  ];
  const TX = {
    de: {
      room:'Saal der Vollendung', title:'Zifferblätter', motto:'Normal unbezahlbar, nur für Vollender',
      lead:'Museums-Zifferblätter für Wear-OS-Uhren, jedes in seinem eigenen Goldrahmen. Normalerweise unbezahlbar: Wer den Lebensweg eines Malers vollendet, erhält dessen Zifferblatt als Belohnung, mit einem persönlichen Code. Für die Apple Watch gibt es das Gemälde für das Zifferblatt «Fotos».',
      entryK:'Exklusiv', entryS:'Zweiunddreissig Meisterwerke am Handgelenk',
      earned:'Verliehen', claimed:'Angefordert', soon:'In Arbeit', prog:'{n} von {N} Bildern',
      onPath:'Lohn für {path}', soonLong:'Der Lebensweg von {artist} ist in Vorbereitung. Bis dahin bleibt dieses Zifferblatt hinter Glas.',
      lockedLong:'Dieses Zifferblatt erhält, wer das Sammelalbum vollendet. Wer den Lebensweg schon vollendet hat, behält es.',
      earnedLong:'Dieses Zifferblatt ist deins.',
      claimBtn:'Zifferblatt anfordern', toPath:'Zum Lebensweg', close:'Schliessen', toHall:'Zum Saal der Vollendung',
      claimedLong:'Angefordert am {d}. Die Zifferblätter erscheinen bald im Play Store. Dann wird dein persönlicher Code hier und in der Ehrenvitrine angezeigt. Dein Anspruch ist auf diesem Gerät vermerkt.',
      pending:'Persönlicher Code: folgt beim Erscheinen',
      fine:'Für Uhren mit Wear OS 4 oder neuer. Ein persönlicher Code je vollendetem Lebensweg, einlösbar im Google Play Store.',
      rewardK:'Am Ende dieses Weges', rewardKDone:'Dein Lohn', rewardLead:'Das exklusive Museums-Zifferblatt, normal unbezahlbar, nur für Vollender.',
      rewardSoonK:'Zifferblatt in Arbeit', rewardSoonLead:'Ein Museums-Zifferblatt zu diesem Album ist in Arbeit. Es erscheint hier, sobald es fertig ist.',
      certN:'Zifferblatt «{f}»', certD:'Vollende {path}, um das Zifferblatt «{f}» zu erhalten.', certT:'Das Museums-Zifferblatt «{f}» gehört dir.',
      chooseK:'Wie möchtest du dein Zifferblatt erhalten?',wearOs:'Wear OS',wearOsHint:'Persönlicher Code für den Google Play Store, sobald die Zifferblätter erscheinen.',appleWatch:'Apple Watch',appleHint:'Lade das Gemälde herunter und setze es über das Zifferblatt «Fotos».',appleHow:'In der Watch-App auf dem iPhone: Zifferblattgalerie > Fotos, dann das Bild wählen.',appleDl:'Bild herunterladen',
      group:'Zifferblätter', back:'Zurück'
    },
    en: {
      room:'Hall of Completion', title:'Watch Faces', motto:'Normally priceless, only for those who finish',
      lead:'Museum watch faces for Wear OS watches, each in its own gilded frame. Normally priceless: anyone who completes a painter\u2019s life path receives that painter\u2019s watch face as a reward, with a personal code. For the Apple Watch, the painting is provided for the Photos watch face.',
      entryK:'Exclusive', entryS:'Thirty-two masterpieces on your wrist',
      earned:'Awarded', claimed:'Requested', soon:'In progress', prog:'{n} of {N} pictures',
      onPath:'Reward for {path}', soonLong:'{artist}\u2019s life path is in preparation. Until then this watch face stays behind glass.',
      lockedLong:'This watch face is for those who complete the collection album. Anyone who has already finished the life path keeps it.',
      earnedLong:'This watch face is yours.',
      claimBtn:'Request watch face', toPath:'Go to the life path', close:'Close', toHall:'To the Hall of Completion',
      claimedLong:'Requested on {d}. The watch faces will appear on the Play Store soon. Your personal code will then be shown here and in the Cabinet of Honour. Your claim is noted on this device.',
      pending:'Personal code: follows at launch',
      fine:'For watches with Wear OS 4 or newer. One personal code per finished life path, redeemable on Google Play.',
      rewardK:'At the end of this path', rewardKDone:'Your reward', rewardLead:'The exclusive museum watch face, normally priceless, only for those who finish.',
      rewardSoonK:'Watch face in progress', rewardSoonLead:'A museum watch face for this album is in progress. It will appear here when it is ready.',
      certN:'Watch face \u201c{f}\u201d', certD:'Finish {path} to receive the watch face \u201c{f}\u201d.', certT:'The museum watch face \u201c{f}\u201d is yours.',
      chooseK:'How would you like to receive your watch face?',wearOs:'Wear OS',wearOsHint:'A personal code for the Google Play Store, once the watch faces appear.',appleWatch:'Apple Watch',appleHint:'Download the painting and set it with the Photos watch face.',appleHow:'On iPhone, open the Watch app > Face Gallery > Photos, then choose the image.',appleDl:'Download image',
      group:'Watch faces', back:'Back'
    },
    fr: {
      room:'Salle de l\u2019accomplissement', title:'Cadrans', motto:'D\u2019ordinaire inestimables, réservés à qui va jusqu\u2019au bout',
      lead:'Des cadrans de musée pour montres Wear OS, chacun dans son propre cadre doré. Normalement inestimables : qui achève le parcours de vie d\u2019un peintre reçoit son cadran en récompense, avec un code personnel. Pour l\u2019Apple Watch, le tableau est prévu pour le cadran « Photos ».',
      entryK:'Exclusif', entryS:'Trente-deux chefs-d\u2019œuvre au poignet',
      earned:'Décerné', claimed:'Demandé', soon:'En préparation', prog:'{n} sur {N} tableaux',
      onPath:'Récompense de {path}', soonLong:'Le parcours de vie de {artist} est en préparation. D\u2019ici là, ce cadran reste sous vitrine.',
      lockedLong:'Ce cadran revient à qui complète l’album. Quiconque a déjà achevé le parcours le conserve.',
      earnedLong:'Ce cadran est à toi.',
      claimBtn:'Demander le cadran', toPath:'Vers le parcours', close:'Fermer', toHall:'Vers la salle de l\u2019accomplissement',
      claimedLong:'Demandé le {d}. Les cadrans paraîtront bientôt sur le Play Store. Votre code personnel s\u2019affichera alors ici et dans la vitrine d\u2019honneur. Votre droit est noté sur cet appareil.',
      pending:'Code personnel : à la parution',
      fine:'Pour montres sous Wear OS 4 ou plus récent. Un code personnel par parcours achevé, à utiliser sur Google Play.',
      rewardK:'Au bout de ce chemin', rewardKDone:'Votre récompense', rewardLead:'Le cadran de musée exclusif, d\u2019ordinaire inestimable, réservé à qui va jusqu\u2019au bout.',
      rewardSoonK:'Cadran en préparation', rewardSoonLead:'Un cadran de musée pour cet album est en préparation. Il apparaîtra ici dès qu’il sera prêt.',
      certN:'Cadran « {f} »', certD:'Achevez {path} pour recevoir le cadran « {f} ».', certT:'Le cadran de musée « {f} » est à vous.',
      chooseK:'Comment souhaitez-vous recevoir votre cadran ?',wearOs:'Wear OS',wearOsHint:'Un code personnel pour le Google Play Store, dès que les cadrans paraîtront.',appleWatch:'Apple Watch',appleHint:'Téléchargez le tableau et utilisez-le avec le cadran « Photos ».',appleHow:'Dans l\u2019app Watch sur l\u2019iPhone : Galerie de cadrans > Photos, puis choisissez l\u2019image.',appleDl:'Télécharger l\u2019image',
      group:'Cadrans', back:'Retour'
    },
    it: {
      room:'Sala del compimento', title:'Quadranti', motto:'Di norma impagabili, solo per chi arriva in fondo',
      lead:'Quadranti da museo per orologi Wear OS, ciascuno nella propria cornice dorata. Di norma impagabili: chi completa il percorso di vita di un pittore riceve il suo quadrante come premio, con un codice personale. Per l\u2019Apple Watch c\u2019è il dipinto per il quadrante «Foto».',
      entryK:'Esclusivo', entryS:'Trentadue capolavori al polso',
      earned:'Conferito', claimed:'Richiesto', soon:'In lavorazione', prog:'{n} di {N} quadri',
      onPath:'Premio per {path}', soonLong:'Il percorso di vita di {artist} è in preparazione. Fino ad allora questo quadrante resta dietro il vetro.',
      lockedLong:'Questo quadrante è per chi completa l’album. Chi ha già finito il percorso lo conserva.',
      earnedLong:'Questo quadrante è tuo.',
      claimBtn:'Richiedi il quadrante', toPath:'Al percorso', close:'Chiudi', toHall:'Alla sala del compimento',
      claimedLong:'Richiesto il {d}. I quadranti arriveranno presto sul Play Store. Il tuo codice personale apparirà allora qui e nella teca d\u2019onore. Il tuo diritto è annotato su questo dispositivo.',
      pending:'Codice personale: all\u2019uscita',
      fine:'Per orologi con Wear OS 4 o successivo. Un codice personale per ogni percorso completato, da riscattare su Google Play.',
      rewardK:'Alla fine di questo percorso', rewardKDone:'Il tuo premio', rewardLead:'L\u2019esclusivo quadrante da museo, di norma impagabile, solo per chi arriva in fondo.',
      rewardSoonK:'Quadrante in lavorazione', rewardSoonLead:'Un quadrante da museo per questo album è in lavorazione. Apparirà qui non appena sarà pronto.',
      certN:'Quadrante «{f}»', certD:'Completa {path} per ricevere il quadrante «{f}».', certT:'Il quadrante da museo «{f}» è tuo.',
      chooseK:'Come vuoi ricevere il tuo quadrante?',wearOs:'Wear OS',wearOsHint:'Un codice personale per il Google Play Store, quando i quadranti saranno disponibili.',appleWatch:'Apple Watch',appleHint:'Scarica il dipinto e impostalo con il quadrante «Foto».',appleHow:'Nell\u2019app Watch su iPhone: Galleria quadranti > Foto, poi scegli l\u2019immagine.',appleDl:'Scarica l\u2019immagine',
      group:'Quadranti', back:'Indietro'
    },
    es: {
      room:'Sala de la culminación', title:'Esferas', motto:'Normalmente impagables, solo para quien llega al final',
      lead:'Esferas de museo para relojes Wear OS, cada una en su propio marco dorado. Normalmente impagables: quien completa el camino de vida de un pintor recibe su esfera como recompensa, con un código personal. Para el Apple Watch, la pintura se ofrece para la esfera «Fotos».',
      entryK:'Exclusivo', entryS:'Treinta y dos obras maestras en la muñeca',
      earned:'Concedida', claimed:'Solicitada', soon:'En preparación', prog:'{n} de {N} cuadros',
      onPath:'Premio por {path}', soonLong:'El camino de vida de {artist} está en preparación. Hasta entonces, esta esfera permanece tras el cristal.',
      lockedLong:'Esta esfera es para quien completa el álbum. Quien ya ha terminado el camino la conserva.',
      earnedLong:'Esta esfera es tuya.',
      claimBtn:'Solicitar la esfera', toPath:'Al camino de vida', close:'Cerrar', toHall:'A la sala de la culminación',
      claimedLong:'Solicitada el {d}. Las esferas llegarán pronto a Play Store. Entonces tu código personal aparecerá aquí y en la vitrina de honor. Tu derecho queda anotado en este dispositivo.',
      pending:'Código personal: al publicarse',
      fine:'Para relojes con Wear OS 4 o posterior. Un código personal por cada camino completado, canjeable en Google Play.',
      rewardK:'Al final de este camino', rewardKDone:'Tu premio', rewardLead:'La esfera de museo exclusiva, normalmente impagable, solo para quien llega al final.',
      rewardSoonK:'Esfera en preparación', rewardSoonLead:'Una esfera de museo para este álbum está en preparación. Aparecerá aquí en cuanto esté lista.',
      certN:'Esfera «{f}»', certD:'Completa {path} para recibir la esfera «{f}».', certT:'La esfera de museo «{f}» es tuya.',
      chooseK:'¿Cómo quieres recibir tu esfera?',wearOs:'Wear OS',wearOsHint:'Un código personal para Google Play Store, cuando las esferas estén disponibles.',appleWatch:'Apple Watch',appleHint:'Descarga la pintura y configúrala con la esfera «Fotos».',appleHow:'En la app Watch del iPhone: Galería de esferas > Fotos, y elige la imagen.',appleDl:'Descargar imagen',
      group:'Esferas', back:'Volver'
    }
  };
  let host = null;
  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function T(){ return TX[lang()] || TX.de; }
  function fill(s, v){ return String(s || '').replace(/\{(\w+)\}/g, (_, k) => (v && v[k] != null) ? v[k] : ''); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }
  function loc(o){ return (o && (o[lang()] || o.de)) || ''; }
  function face(id){ return FACES.find(f => f.id === id) || null; }
  var IMGV = '?v=1037';
  function img(f){ return 'img/faces/' + f.id + '.webp' + IMGV; }
  function appleImg(f){ return 'img/watch-apple/' + f.id + '.jpg' + IMGV; }
  function appleFile(f){ return 'Masilano-' + f.id + '.jpg'; }
  function downloadApple(f){
    const a = document.createElement('a');
    a.href = appleImg(f);
    a.download = appleFile(f);
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  function chooseHtml(f, claimed){
    const P = T();
    let h = '<div class="zf-choose">';
    if (!claimed) {
      h += '<p class="zf-choose-k">' + esc(P.chooseK) + '</p>';
      h += '<button type="button" class="btn goldcta" data-zf="claim-wear">' + esc(P.wearOs) + '</button>';
      h += '<p class="zf-opt-h">' + esc(P.wearOsHint) + '</p>';
    }
    h += '<button type="button" class="btn' + (claimed ? ' goldcta' : '') + '" data-zf="claim-apple">' + esc(P.appleWatch) + '</button>';
    h += '<p class="zf-opt-h">' + esc(P.appleHint) + '</p>';
    h += '<div class="zf-apple hidden">';
    h += '<img src="' + esc(appleImg(f)) + '" alt="" width="422" height="514" loading="lazy" decoding="async">';
    h += '<p class="zf-apple-how">' + esc(P.appleHow) + '</p>';
    h += '<a class="btn goldcta" data-zf="apple-dl" href="' + esc(appleImg(f)) + '" download="' + esc(appleFile(f)) + '">' + esc(P.appleDl) + '</a>';
    h += '</div></div>';
    return h;
  }
  function pathOf(f){ return (f && f.path && host && (host.PATHS || []).find(p => p.id === f.path)) || null; }
  function pathTitle(p){ return p ? ((host.L && host.L(p, 'title')) || p.title || p.id) : ''; }
  function state(f){
    const p = pathOf(f);
    if (!p) return { soon:true, n:0, N:0, done:false, path:null };
    const steps = host.pathSteps(p) || [];
    const pathN = steps.filter(s => host.isDone(s.pid)).length;
    const pathDone = steps.length > 0 && pathN >= steps.length;
    const album = host.albumStats ? host.albumStats(f.path) : null;
    const n = album && album.N ? album.n : pathN;
    const N = album && album.N ? album.N : steps.length;
    const albumDone = !!(album && album.complete);
    const claimed = !!claimOf(f.id);
    const unlocked = claimed || pathDone || albumDone || !!(host.faceUnlocked && host.faceUnlocked(p));
    return { soon:false, n, N, done: unlocked, path:p, pathDone, albumDone };
  }
  function loadClaims(){ try { return JSON.parse(localStorage.getItem(CLAIM_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function claimOf(id){ return loadClaims()[id] || null; }
  function claim(id){
    const c = loadClaims();
    if (!c[id]) c[id] = { at: (host && host.todayKey && host.todayKey()) || new Date().toISOString().slice(0, 10), code: null };
    try { localStorage.setItem(CLAIM_KEY, JSON.stringify(c)); } catch (e) {}
    return c[id];
  }
  function fmtDate(iso){
    const p = String(iso || '').split('-').map(Number);
    if (p.length < 3 || !p[0]) return iso || '';
    const L = ({ de:'de-CH', en:'en-GB', es:'es-ES', fr:'fr-FR', it:'it-IT' })[lang()] || 'de-CH';
    try { return new Date(p[0], p[1] - 1, p[2]).toLocaleDateString(L, { day:'numeric', month:'long', year:'numeric' }); } catch (e) { return iso; }
  }
  function badge(f, st){
    const P = T();
    if (st.soon) return '<span class="zf-state soon">' + esc(P.soon) + '</span>';
    if (st.done) return '<span class="zf-state earned">' + esc(claimOf(f.id) ? P.claimed : P.earned) + '</span>';
    return '<span class="zf-state">' + esc(fill(P.prog, st)) + '</span>';
  }
  function cardHtml(f){
    const st = state(f);
    const cls = 'zf-card' + (st.done ? ' is-earned' : '') + (st.soon ? ' is-soon' : '');
    return '<button type="button" class="' + cls + '" data-face="' + f.id + '" aria-label="' + esc(loc(f.n) + ', ' + f.artist) + '">' +
      '<span class="zf-vitrine frame-baroque"><span class="zf-velvet"><img class="zf-img" src="' + img(f) + '" alt="" width="440" height="440" loading="lazy" decoding="async"></span></span>' +
      '<span class="plaque zf-plaque"><span class="n">' + esc(loc(f.n)) + '</span><span class="a">' + esc(f.artist) + '</span></span>' +
      badge(f, st) + '</button>';
  }
  function renderHall(el){
    if (!el) return;
    const P = T();
    el.innerHTML = '<header class="zf-head"><p class="roomlab">' + esc(P.room) + '</p><h1 class="zf-title">' + esc(P.title) + '</h1>' +
      '<div class="orn" aria-hidden="true"></div><p class="zf-motto">' + esc(P.motto) + '</p><p class="zf-lead">' + esc(P.lead) + '</p></header>' +
      '<div class="zf-grid">' + FACES.map(cardHtml).join('') + '</div><p class="zf-fine">' + esc(P.fine) + '</p>';
    el.querySelectorAll('.zf-card').forEach(b => { b.onclick = () => openFace(b.getAttribute('data-face')); });
  }
  function entryHtml(){
    const P = T();
    const pick = ['wave', 'kiss', 'almond'].map(face);
    return '<button type="button" class="zf-entry" aria-label="' + esc(P.toHall) + '">' +
      '<span class="zf-entry-faces">' + pick.map(f => '<img src="' + img(f) + '" alt="" width="88" height="88" loading="lazy" decoding="async">').join('') + '</span>' +
      '<span class="zf-entry-tx"><span class="k">' + esc(P.entryK) + '</span><span class="n">' + esc(P.room) + '</span>' +
      '<span class="m">' + esc(P.motto) + '</span></span><span class="go" aria-hidden="true">›</span></button>';
  }
  function renderEntry(el){
    if (!el) return;
    el.innerHTML = entryHtml();
    const b = el.querySelector('.zf-entry');
    if (b) b.onclick = () => { if (host && host.showHall) host.showHall(); };
  }
  function detailHtml(f){
    const P = T(), st = state(f), c = claimOf(f.id);
    const pt = pathTitle(st.path);
    let body, btns = '';
    if (st.soon) body = '<p>' + esc(fill(P.soonLong, { artist: f.artist })) + '</p>';
    else if (st.done) {
      body = '<p class="zf-ok">' + esc(fill(P.earnedLong, { path: pt })) + '</p>';
      if (c) body += '<p class="zf-claim">' + esc(fill(P.claimedLong, { d: fmtDate(c.at) })) + '</p><p class="zf-code">' + esc(P.pending) + '</p>';
      body += chooseHtml(f, !!c);
    } else body = '<p>' + esc(fill(P.lockedLong, { path: pt })) + '</p><div class="zf-prog"><span>' + esc(fill(P.prog, st)) + '</span><div class="bar"><div style="width:' + (st.N ? Math.round(100 * st.n / st.N) : 0) + '%"></div></div></div>';
    if (st.path) btns += '<button type="button" class="btn' + (st.done && !c ? ' ghost' : '') + '" data-zf="path">' + esc(P.toPath) + '</button>';
    btns += '<button type="button" class="btn ghost" data-zf="close">' + esc(P.close) + '</button>';
    return '<div class="zf-big' + (st.done ? ' is-earned' : '') + '" data-face="' + f.id + '"><img src="' + img(f) + '" alt="" width="440" height="440"></div>' +
      '<p class="zf-kick">' + esc(st.soon ? P.soon : (st.done ? P.rewardKDone : fill(P.onPath, { path: pt }))) + '</p>' +
      '<h2 id="zfTitle">' + esc(loc(f.n)) + '</h2>' +
      '<p class="zf-meta">' + esc(f.artist) + ' · ' + esc(loc(f.w)) + ', ' + esc(f.year) + (f.m ? ' · ' + esc(loc(f.m)) : '') + '</p>' +
      '<div class="zf-body">' + body + '</div><div class="btns zf-btns">' + btns + '</div><p class="zf-fine">' + esc(P.fine) + '</p>';
  }
  function openFace(id){
    const f = face(id), sh = document.getElementById('faceView');
    if (!f || !sh) return;
    const card = sh.querySelector('.card');
    card.innerHTML = detailHtml(f);
    card.scrollTop = 0;
    card.querySelectorAll('[data-zf]').forEach(b => {
      b.onclick = (ev) => {
        const a = b.getAttribute('data-zf');
        if (a === 'apple-dl' && ev && ev.preventDefault) ev.preventDefault();
        if (a === 'claim' || a === 'claim-wear') { claim(f.id); openFace(f.id); refresh(); if (host.onClaim) host.onClaim(f); return; }
        if (a === 'claim-apple') {
          const box = card.querySelector('.zf-apple');
          if (box) { box.classList.remove('hidden'); box.scrollIntoView({ block:'nearest', behavior:'smooth' }); }
          return;
        }
        if (a === 'apple-dl') { downloadApple(f); return; }
        if (a === 'close') { host.closeSheet(); return; }
        if (a === 'path') { const p = pathOf(f); host.closeSheet(); if (p) setTimeout(() => host.openPath(p), 30); }
      };
    });
    if (host && host.revealSheet) host.revealSheet('#faceView'); else sh.classList.remove('hidden');
  }
  function facesFor(pid){ return FACES.filter(f => f.path === pid); }
  function rewardEl(path, done){
    const list = facesFor(path && path.id);
    if (!list.length) {
      if (!path) return null;
      const P = T();
      const box = document.createElement('section');
      box.className = 'zf-reward zf-reward-soon';
      box.innerHTML = '<div class="zf-rk">' + esc(P.rewardSoonK) + '</div>' +
        '<p class="zf-rlead">' + esc(P.rewardSoonLead) + '</p>';
      return box;
    }
    const P = T();
    const open = done ? list.find(f => !claimOf(f.id)) : null;
    const box = document.createElement('section');
    box.className = 'zf-reward' + (done ? ' is-earned' : '');
    box.innerHTML = '<div class="zf-rk">' + esc(done ? P.rewardKDone : P.rewardK) + '</div>' +
      '<div class="zf-rfaces">' + list.map(f => {
        const c = claimOf(f.id);
        return '<button type="button" class="zf-rface" data-face="' + f.id + '"><img src="' + img(f) + '" alt="" width="440" height="440" loading="lazy" decoding="async">' +
          '<span class="plaque"><span class="n">' + esc(loc(f.n)) + '</span><span class="a">' + esc(done ? (c ? P.claimed : P.earned) : P.motto) + '</span></span></button>';
      }).join('') + '</div><p class="zf-rlead">' + esc(P.rewardLead) + '</p>' +
      (done ? '<p class="zf-code">' + esc(P.pending) + '</p>' : '') +
      '<div class="btns"><button type="button" class="btn ' + (open ? 'goldcta' : 'ghost') + '" data-zf="hall">' + esc(open ? P.claimBtn : P.toHall) + '</button></div>';
    box.querySelectorAll('.zf-rface').forEach(b => { b.onclick = () => openFace(b.getAttribute('data-face')); });
    box.querySelector('[data-zf="hall"]').onclick = () => { if (open) openFace(open.id); else host.showHall(); };
    return box;
  }
  function achRows(){
    return FACES.filter(f => f.path).map(f => ({ id:'face:' + f.id, group:'faces', tier:'gold', kind:'path', path:f.path, trophy:'diploma', face:f.id, img: img(f) }));
  }
  function achTexts(id){
    const f = face(String(id).replace(/^face:/, ''));
    if (!f) return null;
    const P = T(), pt = pathTitle(pathOf(f)), fn = loc(f.n);
    return { n: fill(P.certN, { f: fn }), s: fn, d: fill(P.certD, { f: fn, path: pt }), t: fill(P.certT, { f: fn }) };
  }
  function refresh(){
    const hall = document.getElementById('facesBody');
    if (hall && document.getElementById('faces') && document.getElementById('faces').classList.contains('active')) renderHall(hall);
    renderEntry(document.getElementById('facesEntryT'));
    renderEntry(document.getElementById('facesEntryW'));
  }
  function init(h){ host = h; refresh(); return api; }
  const api = { init, FACES, face, state, renderHall, renderEntry, openFace, rewardEl, facesFor, achRows, achTexts, claimOf, claim, refresh, texts: () => T() };
  window.MASILANO_FACES = api;
})();
