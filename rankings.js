(function () {
  // Leave empty until the Worker is deployed. Empty = the section shows «Bald».
  var API = 'https://masilano-rangliste.masilano.workers.dev';
  var CRED_KEY = 'masilano.lb.cred.v1';
  var START_PFX = 'masilano.lb.start.';
  // v10.42r: opt-in only. Nobody is put on the boards automatically; joining needs
  // the confirmation «mindestens 16 Jahre» and an explicit consent (see privacy policy).
  // Accounts that were auto-enrolled before 10.42r are deleted once (migrateAuto).
  var AUTO = false;
  var OPTIN_NOTICE_KEY = 'masilano.lb.optinNotice.v1';
  // v10.31: own key. The certificate name (masilano.playerName.v1) is never
  // published; every player without a leaderboard name is asked once.
  var NAME_KEY = 'masilano.lb.name.v1';
  var PROMPTED_KEY = 'masilano.lb.namePrompted.v1';
  var HIDE_KEY = 'masilano.lb.hidden.v1';
  var BACKFILL_KEY = 'masilano.lb.backfill.v1';
  // Generated names: IDs only. Lists live in nameparts.js.
  var PAINTER_IDS = ['vangogh','monet','hokusai','klimt','anker','hodler','cezanne','hiroshige','renoir','pissarro','turner','rembrandt','sisley','friedrich'];
  var PAINTER_NAMES = {
    vangogh:'Vincent van Gogh', monet:'Claude Monet', hokusai:'Katsushika Hokusai', klimt:'Gustav Klimt',
    anker:'Albert Anker', hodler:'Ferdinand Hodler', cezanne:'Paul Cézanne', hiroshige:'Utagawa Hiroshige',
    renoir:'Pierre-Auguste Renoir', pissarro:'Camille Pissarro', turner:'J. M. W. Turner',
    rembrandt:'Rembrandt', sisley:'Alfred Sisley', friedrich:'Caspar David Friedrich'
  };
  var TX = {
    de: {
      welcome:'Willkommen im Atelier der Meister', nameDice:'Würfeln',
      nameSkip:'Nicht in der Rangliste zeigen', report:'Melden', reportTitle:'Spitznamen melden', reportAsk:'Ist der Spitzname «{n}» beleidigend oder unpassend? Die Meldung ist anonym; wir prüfen sie und ersetzen den Namen bei Bedarf.', reportYes:'Ja, melden', reported:'Danke, die Meldung ist eingegangen.', renameLimit:'Du kannst deinen Spitznamen dreimal in 30 Tagen ändern. Bitte versuche es später wieder.', renameRule:'Höchstens dreimal in 30 Tagen änderbar.',
      nameHint:'Ein Spitzname reicht, dein echter Name ist nicht nötig.',
      nameTitle:'Unter welchem möchtest du die Leinwände erobern?', nameLead:'Viele grosse Künstler hatten ein Pseudonym.',
      nameLabel:'Spitzname', nameGo:'Los geht’s', nameSave:'Speichern', nameNote:'Du kannst den Namen jederzeit in der Rangliste ändern oder dich ausblenden.',
      rename:'Namen ändern', hide:'Mich in der Rangliste ausblenden', hideAsk:'Dein Name und dein Spielstand werden von den Tafeln genommen. Du kannst dich später wieder zeigen.', hideYes:'Ja, ausblenden',
      hiddenTx:'Du bist in der Rangliste ausgeblendet.', unhide:'Wieder in der Rangliste zeigen',
      pending:'Ab deinem ersten vollendeten Bild erscheinst du als {n}.', badWord:'Bitte wähle einen anderen Namen.',
      autoFine:'Alle vollendeten Bilder zählen, auch frühere. Ein Bild braucht jeweils mehrere Minuten. Es gibt kein Konto mit E-Mail.',
      sugg:['Monet-Fan','Van-Gogh-Fan','Klimt-Fan','Hokusai-Fan','Hodler-Fan','Anker-Fan','Pinselheld','Farbenfee','Seerosenfreund','Sternennacht'],
      room:'Ehrenhalle', title:'Ranglisten', motto:'Welt, Land und Maler',
      lead:'Wer die meisten Meisterwerke vollendet, führt die Tafel. Ab deinem ersten vollendeten Bild bist du mit deinem Spitznamen dabei, ausblenden geht jederzeit.',
      leadOpt:'Wer die meisten Meisterwerke vollendet, führt die Tafel. Mitmachen ist freiwillig und ab 16 Jahren möglich; du kannst dich jederzeit wieder austragen.', optinNotice:'Die Ranglisten sind jetzt freiwillig. Dein bisheriger automatischer Eintrag wurde gelöscht. Wenn du möchtest, kannst du wieder mitmachen.', consentFine:'Öffentlich sichtbar sind nur der erwürfelte Spitzname, das Land und die Zahl der Bilder.', privacyLink:'Datenschutzerklärung',
      entryK:'Ranglisten', entryM:'Welt, Land und Maler', toHall:'Zu den Ranglisten',
      soon:'Bald', soonLead:'Die Ranglisten öffnen sich, sobald der Saal eingerichtet ist. Dann kannst du unter einem Spitznamen mit den Meistern um die Wette malen.',
      welt:'Welt', land:'Land', maler:'Maler',
      ch:'Schweiz', at:'Österreich', deLand:'Deutschland', other:'Andere',
      pictures:'{n} Bilder', picture1:'1 Bild', empty:'Noch niemand auf dieser Tafel.',
      loading:'Die Tafeln werden geholt …', error:'Die Rangliste ist gerade nicht erreichbar. Bitte versuche es später wieder.',
      join:'An der Rangliste teilnehmen', joinedAs:'Du malst als {n}',
      joinTitle:'Der Ehrenhalle beitreten', joinLead:'Wähle einen Spitznamen und dein Land. Beides erscheint öffentlich auf der Tafel.',
      nickLabel:'Spitzname', nickPh:'Dein Name in der Halle',
      countryLabel:'Land', age:'Ich bin mindestens 16 Jahre alt.',
      consent:'Ich möchte an den öffentlichen Ranglisten teilnehmen.',
      start:'Beitreten', cancel:'Abbrechen',
      haveCode:'Ich habe schon einen Wiederherstellungscode',
      codeLabel:'Wiederherstellungscode', codePh:'MASI-XXXX-XXXX-XXXX-XXXX', restore:'Konto zurückholen',
      codeTitle:'Dein persönlicher Code',
      codeLead:'Schreibe dir diesen Code auf oder mache ein Bild davon. Ohne ihn kannst du dein Konto auf einem neuen Gerät nicht zurückholen. Wir fragen keine E-Mail-Adresse.',
      codeSaved:'Code habe ich gesichert',
      remove:'Mich von der Rangliste nehmen',
      removeAsk:'Soll dein Spitzname und dein Spielstand wirklich von der Tafel genommen werden? Das lässt sich nicht rückgängig machen.',
      removeYes:'Ja, austragen', removed:'Du bist nicht mehr auf der Rangliste.',
      meRank:'Dein Platz: {n}', meNone:'Noch ohne Platzierung.',
      fine:'Alle vollendeten Bilder zählen, auch frühere. Ein Bild braucht jeweils mehrere Minuten. Es gibt kein Konto mit E-Mail.',
      badNick:'Der Spitzname braucht 3 bis 20 Zeichen und darf keine Adresse enthalten.',
      needAge:'Bitte bestätige, dass du mindestens 16 Jahre alt bist.',
      needConsent:'Bitte bestätige die Teilnahme.',
      badCode:'Dieser Code wurde nicht erkannt.',
      you:'Du'
    },
    en: {
      welcome:'Welcome to the Atelier of the Masters', nameDice:'Roll',
      nameSkip:'Don’t show me on the leaderboard', report:'Report', reportTitle:'Report nickname', reportAsk:'Is the nickname “{n}” offensive or inappropriate? Reports are anonymous; we review them and replace the name if needed.', reportYes:'Yes, report', reported:'Thank you, your report has been received.', renameLimit:'You can change your nickname three times in 30 days. Please try again later.', renameRule:'Can be changed at most three times in 30 days.',
      nameHint:'A nickname is enough; your real name is not needed.',
      nameTitle:'Under which name would you like to conquer the canvases?', nameLead:'Many great artists had a pseudonym.',
      nameLabel:'Nickname', nameGo:'Let’s go', nameSave:'Save', nameNote:'You can change the name in the leaderboard at any time, or hide yourself.',
      rename:'Change name', hide:'Hide me from the leaderboard', hideAsk:'Your name and score will be taken off the boards. You can show yourself again later.', hideYes:'Yes, hide me',
      hiddenTx:'You are hidden from the leaderboard.', unhide:'Show me on the leaderboard again',
      pending:'From your first finished picture you will appear as {n}.', badWord:'Please choose a different name.',
      autoFine:'All finished pictures count, earlier ones too. Each picture takes several minutes. There is no email account.',
      sugg:['Monet Fan','Van Gogh Fan','Klimt Fan','Hokusai Fan','Hodler Fan','Brush Hero','Colour Muse','Lily Lover','Starry Night','Turner Fan'],
      room:'Hall of Honour', title:'Leaderboards', motto:'World, country and painter',
      lead:'Whoever completes the most masterpieces leads the board. From your first finished picture you take part under your nickname; you can hide yourself at any time.',
      leadOpt:'Whoever completes the most masterpieces leads the board. Taking part is voluntary and possible from age 16; you can leave at any time.', optinNotice:'The leaderboards are now voluntary. Your earlier automatic entry has been deleted. You can join again if you like.', consentFine:'Only the rolled nickname, the country and the number of pictures are shown publicly.', privacyLink:'Privacy policy',
      entryK:'Leaderboards', entryM:'World, country and painter', toHall:'To the leaderboards',
      soon:'Soon', soonLead:'The leaderboards will open once the hall is ready. Then you can paint under a nickname and take your place among the masters.',
      welt:'World', land:'Country', maler:'Painter',
      ch:'Switzerland', at:'Austria', deLand:'Germany', other:'Other',
      pictures:'{n} paintings', picture1:'1 painting', empty:'No one on this board yet.',
      loading:'Fetching the boards …', error:'The leaderboard is unavailable just now. Please try again later.',
      join:'Join the leaderboard', joinedAs:'You paint as {n}',
      joinTitle:'Join the Hall of Honour', joinLead:'Choose a nickname and your country. Both appear publicly on the board.',
      nickLabel:'Nickname', nickPh:'Your name in the hall',
      countryLabel:'Country', age:'I am at least 16 years old.',
      consent:'I want to take part in the public leaderboards.',
      start:'Join', cancel:'Cancel',
      haveCode:'I already have a recovery code',
      codeLabel:'Recovery code', codePh:'MASI-XXXX-XXXX-XXXX-XXXX', restore:'Restore account',
      codeTitle:'Your personal code',
      codeLead:'Write this code down or take a picture of it. Without it you cannot restore your account on a new device. We do not ask for an email address.',
      codeSaved:'I have saved the code',
      remove:'Remove me from the leaderboard',
      removeAsk:'Remove your nickname and score from the board? This cannot be undone.',
      removeYes:'Yes, remove me', removed:'You are no longer on the leaderboard.',
      meRank:'Your place: {n}', meNone:'No place yet.',
      fine:'All finished pictures count, earlier ones too. Each picture takes several minutes. There is no email account.',
      badNick:'The nickname must be 3 to 20 characters and must not contain an address.',
      needAge:'Please confirm that you are at least 16 years old.',
      needConsent:'Please confirm that you want to join.',
      badCode:'This code was not recognised.',
      you:'You'
    },
    es: {
      welcome:'Bienvenidos al atelier de los maestros', nameDice:'Tirar',
      nameSkip:'No mostrarme en la clasificación', report:'Denunciar', reportTitle:'Denunciar apodo', reportAsk:'¿El apodo «{n}» es ofensivo o inapropiado? La denuncia es anónima; la revisamos y cambiamos el nombre si hace falta.', reportYes:'Sí, denunciar', reported:'Gracias, hemos recibido la denuncia.', renameLimit:'Puedes cambiar tu apodo tres veces en 30 días. Inténtalo más tarde.', renameRule:'Se puede cambiar como máximo tres veces en 30 días.',
      nameHint:'Basta un apodo; tu nombre real no es necesario.',
      nameTitle:'¿Con cuál quieres conquistar los lienzos?', nameLead:'Muchos grandes artistas tenían un seudónimo.',
      nameLabel:'Apodo', nameGo:'Vamos', nameSave:'Guardar', nameNote:'Puedes cambiar el nombre en la clasificación cuando quieras, u ocultarte.',
      rename:'Cambiar nombre', hide:'Ocultarme de la clasificación', hideAsk:'Tu nombre y tu puntuación se retirarán de las tablas. Más tarde puedes volver a mostrarte.', hideYes:'Sí, ocultarme',
      hiddenTx:'Estás oculto en la clasificación.', unhide:'Volver a mostrarme',
      pending:'Desde tu primer cuadro terminado aparecerás como {n}.', badWord:'Elige otro nombre, por favor.',
      autoFine:'Cuentan todos los cuadros terminados, también los anteriores. Cada cuadro lleva varios minutos. No hay cuenta con correo.',
      sugg:['Fan de Monet','Fan de Van Gogh','Fan de Klimt','Fan de Hokusai','Fan de Hodler','Pincel de oro','Musa del color','Nenúfar','Noche estrellada','Fan de Turner'],
      room:'Sala de honor', title:'Clasificaciones', motto:'Mundo, país y pintor',
      lead:'Quien completa más obras maestras encabeza la tabla. Desde tu primer cuadro terminado participas con tu apodo; puedes ocultarte cuando quieras.',
      leadOpt:'Quien completa más obras maestras encabeza la tabla. Participar es voluntario y posible a partir de los 16 años; puedes darte de baja en cualquier momento.', optinNotice:'Las clasificaciones ahora son voluntarias. Tu entrada automática anterior se ha eliminado. Si quieres, puedes volver a participar.', consentFine:'Solo se muestran públicamente el apodo sorteado, el país y el número de cuadros.', privacyLink:'Política de privacidad',
      entryK:'Clasificaciones', entryM:'Mundo, país y pintor', toHall:'A las clasificaciones',
      soon:'Pronto', soonLead:'Las clasificaciones se abrirán cuando la sala esté lista. Entonces podrás pintar con un apodo y ocupar tu lugar entre los maestros.',
      welt:'Mundo', land:'País', maler:'Pintor',
      ch:'Suiza', at:'Austria', deLand:'Alemania', other:'Otros',
      pictures:'{n} cuadros', picture1:'1 cuadro', empty:'Nadie en esta tabla todavía.',
      loading:'Se están trayendo las tablas …', error:'La clasificación no está disponible ahora. Inténtalo más tarde.',
      join:'Unirme a la clasificación', joinedAs:'Pintas como {n}',
      joinTitle:'Entrar en la sala de honor', joinLead:'Elige un apodo y tu país. Ambos aparecen en público en la tabla.',
      nickLabel:'Apodo', nickPh:'Tu nombre en la sala',
      countryLabel:'País', age:'Tengo al menos 16 años.',
      consent:'Quiero participar en las clasificaciones públicas.',
      start:'Unirme', cancel:'Cancelar',
      haveCode:'Ya tengo un código de recuperación',
      codeLabel:'Código de recuperación', codePh:'MASI-XXXX-XXXX-XXXX-XXXX', restore:'Recuperar cuenta',
      codeTitle:'Tu código personal',
      codeLead:'Anota este código o haz una foto. Sin él no podrás recuperar tu cuenta en otro dispositivo. No pedimos una dirección de correo.',
      codeSaved:'Ya he guardado el código',
      remove:'Quitarme de la clasificación',
      removeAsk:'¿Quitar tu apodo y tu puntuación de la tabla? Esta acción no se puede deshacer.',
      removeYes:'Sí, darme de baja', removed:'Ya no estás en la clasificación.',
      meRank:'Tu puesto: {n}', meNone:'Aún sin puesto.',
      fine:'Cuentan todos los cuadros terminados, también los anteriores. Cada cuadro lleva varios minutos. No hay cuenta con correo.',
      badNick:'El apodo debe tener de 3 a 20 caracteres y no puede contener una dirección.',
      needAge:'Confirma que tienes al menos 16 años.',
      needConsent:'Confirma que quieres participar.',
      badCode:'Este código no se ha reconocido.',
      you:'Tú'
    },
    fr: {
      welcome:'Bienvenue dans l’atelier des maîtres', nameDice:'Lancer',
      nameSkip:'Ne pas m’afficher dans le classement', report:'Signaler', reportTitle:'Signaler un pseudo', reportAsk:'Le pseudo « {n} » est-il offensant ou inapproprié ? Le signalement est anonyme ; nous le vérifions et remplaçons le nom si nécessaire.', reportYes:'Oui, signaler', reported:'Merci, ton signalement a été reçu.', renameLimit:'Tu peux changer ton pseudo trois fois en 30 jours. Réessaie plus tard.', renameRule:'Modifiable au plus trois fois en 30 jours.',
      nameHint:'Un pseudo suffit, ton vrai nom n’est pas nécessaire.',
      nameTitle:'Sous lequel veux-tu conquérir les toiles ?', nameLead:'Beaucoup de grands artistes avaient un pseudonyme.',
      nameLabel:'Pseudo', nameGo:'C’est parti', nameSave:'Enregistrer', nameNote:'Tu peux changer le nom dans le classement à tout moment, ou te masquer.',
      rename:'Changer de nom', hide:'Me masquer du classement', hideAsk:'Ton nom et ton score seront retirés des tableaux. Tu pourras réapparaître plus tard.', hideYes:'Oui, me masquer',
      hiddenTx:'Tu es masqué dans le classement.', unhide:'Réapparaître dans le classement',
      pending:'Dès ton premier tableau terminé, tu apparais sous le nom {n}.', badWord:'Choisis un autre nom, s’il te plaît.',
      autoFine:'Tous les tableaux terminés comptent, même les anciens. Chaque tableau prend plusieurs minutes. Il n’y a pas de compte avec e-mail.',
      sugg:['Fan de Monet','Fan de Van Gogh','Fan de Klimt','Fan de Hokusai','Fan de Hodler','Pinceau d’or','Muse des couleurs','Nymphéa','Nuit étoilée','Fan de Turner'],
      room:'Salle d’honneur', title:'Classements', motto:'Monde, pays et peintre',
      lead:'Celui ou celle qui termine le plus de chefs-d’œuvre mène le tableau. Dès ton premier tableau terminé, tu participes avec ton pseudo ; tu peux te masquer à tout moment.',
      leadOpt:'Celui ou celle qui termine le plus de chefs-d’œuvre mène le classement. La participation est volontaire et possible dès 16 ans ; tu peux te retirer à tout moment.', optinNotice:'Les classements sont désormais volontaires. Ton ancienne inscription automatique a été supprimée. Si tu le souhaites, tu peux participer à nouveau.', consentFine:'Seuls le pseudonyme tiré au sort, le pays et le nombre de tableaux sont visibles publiquement.', privacyLink:'Politique de confidentialité',
      entryK:'Classements', entryM:'Monde, pays et peintre', toHall:'Vers les classements',
      soon:'Bientôt', soonLead:'Les classements s’ouvriront lorsque la salle sera prête. Tu pourras alors peindre sous un surnom et prendre ta place parmi les maîtres.',
      welt:'Monde', land:'Pays', maler:'Peintre',
      ch:'Suisse', at:'Autriche', deLand:'Allemagne', other:'Autres',
      pictures:'{n} tableaux', picture1:'1 tableau', empty:'Personne sur ce tableau pour l’instant.',
      loading:'Les tableaux arrivent …', error:'Le classement est indisponible pour le moment. Réessaie plus tard.',
      join:'Rejoindre le classement', joinedAs:'Tu peins sous le nom {n}',
      joinTitle:'Entrer dans la salle d’honneur', joinLead:'Choisis un surnom et ton pays. Les deux apparaissent publiquement sur le tableau.',
      nickLabel:'Surnom', nickPh:'Ton nom dans la salle',
      countryLabel:'Pays', age:'J’ai au moins 16 ans.',
      consent:'Je souhaite participer aux classements publics.',
      start:'Rejoindre', cancel:'Annuler',
      haveCode:'J’ai déjà un code de récupération',
      codeLabel:'Code de récupération', codePh:'MASI-XXXX-XXXX-XXXX-XXXX', restore:'Récupérer le compte',
      codeTitle:'Ton code personnel',
      codeLead:'Note ce code ou prends-en une photo. Sans lui, tu ne pourras pas récupérer ton compte sur un nouvel appareil. Nous ne demandons pas d’adresse e-mail.',
      codeSaved:'J’ai conservé le code',
      remove:'Me retirer du classement',
      removeAsk:'Retirer ton surnom et ton score du tableau ? Cette action est définitive.',
      removeYes:'Oui, me retirer', removed:'Tu n’es plus au classement.',
      meRank:'Ta place : {n}', meNone:'Pas encore classé.',
      fine:'Tous les tableaux terminés comptent, même les anciens. Chaque tableau demande plusieurs minutes. Il n’y a pas de compte avec e-mail.',
      badNick:'Le surnom doit faire de 3 à 20 caractères et ne pas contenir d’adresse.',
      needAge:'Merci de confirmer que tu as au moins 16 ans.',
      needConsent:'Merci de confirmer ta participation.',
      badCode:'Ce code n’a pas été reconnu.',
      you:'Toi'
    },
    it: {
      welcome:'Benvenuti nell’atelier dei maestri', nameDice:'Tira',
      nameSkip:'Non mostrarmi in classifica', report:'Segnala', reportTitle:'Segnala soprannome', reportAsk:'Il soprannome «{n}» è offensivo o inappropriato? La segnalazione è anonima; la verifichiamo e sostituiamo il nome se necessario.', reportYes:'Sì, segnala', reported:'Grazie, abbiamo ricevuto la segnalazione.', renameLimit:'Puoi cambiare il soprannome tre volte in 30 giorni. Riprova più tardi.', renameRule:'Modificabile al massimo tre volte in 30 giorni.',
      nameHint:'Basta un soprannome; il tuo vero nome non è necessario.',
      nameTitle:'Con quale vuoi conquistare le tele?', nameLead:'Molti grandi artisti avevano uno pseudonimo.',
      nameLabel:'Soprannome', nameGo:'Andiamo', nameSave:'Salva', nameNote:'Puoi cambiare il nome nella classifica quando vuoi, oppure nasconderti.',
      rename:'Cambia nome', hide:'Nascondimi dalla classifica', hideAsk:'Il tuo nome e il tuo punteggio verranno tolti dalle tavole. Potrai mostrarti di nuovo più tardi.', hideYes:'Sì, nascondimi',
      hiddenTx:'Sei nascosto nella classifica.', unhide:'Mostrami di nuovo in classifica',
      pending:'Dal tuo primo quadro completato comparirai come {n}.', badWord:'Scegli un altro nome, per favore.',
      autoFine:'Contano tutti i quadri completati, anche quelli precedenti. Ogni quadro richiede alcuni minuti. Non c’è un account con e-mail.',
      sugg:['Fan di Monet','Fan di Van Gogh','Fan di Klimt','Fan di Hokusai','Fan di Hodler','Pennello d’oro','Musa dei colori','Ninfea','Notte stellata','Fan di Turner'],
      room:'Sala d’onore', title:'Classifiche', motto:'Mondo, paese e pittore',
      lead:'Chi porta a termine più capolavori guida la tavola. Dal tuo primo quadro completato partecipi con il tuo soprannome; puoi nasconderti quando vuoi.',
      leadOpt:'Chi porta a termine più capolavori guida la tavola. Partecipare è volontario e possibile dai 16 anni; puoi ritirarti in qualsiasi momento.', optinNotice:'Le classifiche ora sono volontarie. La tua precedente iscrizione automatica è stata cancellata. Se vuoi, puoi partecipare di nuovo.', consentFine:'Pubblicamente si vedono solo il soprannome estratto, il paese e il numero di quadri.', privacyLink:'Informativa sulla privacy',
      entryK:'Classifiche', entryM:'Mondo, paese e pittore', toHall:'Alle classifiche',
      soon:'Presto', soonLead:'Le classifiche si apriranno quando la sala sarà pronta. Potrai allora dipingere con un soprannome e prendere il tuo posto tra i maestri.',
      welt:'Mondo', land:'Paese', maler:'Pittore',
      ch:'Svizzera', at:'Austria', deLand:'Germania', other:'Altri',
      pictures:'{n} dipinti', picture1:'1 dipinto', empty:'Ancora nessuno su questa tavola.',
      loading:'Le tavole sono in arrivo …', error:'La classifica non è disponibile in questo momento. Riprova più tardi.',
      join:'Partecipa alla classifica', joinedAs:'Dipingi come {n}',
      joinTitle:'Entra nella sala d’onore', joinLead:'Scegli un soprannome e il tuo paese. Entrambi compaiono pubblicamente sulla tavola.',
      nickLabel:'Soprannome', nickPh:'Il tuo nome nella sala',
      countryLabel:'Paese', age:'Ho almeno 16 anni.',
      consent:'Voglio partecipare alle classifiche pubbliche.',
      start:'Entra', cancel:'Annulla',
      haveCode:'Ho già un codice di recupero',
      codeLabel:'Codice di recupero', codePh:'MASI-XXXX-XXXX-XXXX-XXXX', restore:'Recupera l’account',
      codeTitle:'Il tuo codice personale',
      codeLead:'Annota questo codice o scattagli una foto. Senza di esso non potrai recuperare l’account su un nuovo dispositivo. Non chiediamo un indirizzo e-mail.',
      codeSaved:'Ho salvato il codice',
      remove:'Togliermi dalla classifica',
      removeAsk:'Togliere il tuo soprannome e il punteggio dalla tavola? L’azione non si può annullare.',
      removeYes:'Sì, togliermi', removed:'Non sei più in classifica.',
      meRank:'Il tuo posto: {n}', meNone:'Ancora senza posto.',
      fine:'Contano tutti i quadri completati, anche quelli precedenti. Ogni quadro richiede alcuni minuti. Non c’è un account con e-mail.',
      badNick:'Il soprannome deve avere da 3 a 20 caratteri e non può contenere un indirizzo.',
      needAge:'Conferma di avere almeno 16 anni.',
      needConsent:'Conferma di voler partecipare.',
      badCode:'Questo codice non è stato riconosciuto.',
      you:'Tu'
    }
  };

  var host = null;
  var state = { scope: 'world', country: 'CH', painter: 'monet', rows: [], me: null, countries: [], loading: false, error: null, pane: 'join' };

  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function T(){ return TX[lang()] || TX.de; }
  function fill(s, v){ return String(s || '').replace(/\{(\w+)\}/g, function (_, k){ return (v && v[k] != null) ? v[k] : ''; }); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function (c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function apiBase(){
    // v10.42r (S1): no ?lbapi= or localStorage override any more. Only local test pages
    // (localhost / 127.0.0.1) may point the client at a local Worker via window.MASILANO_LB_API.
    try {
      var h = location.hostname;
      if ((h === 'localhost' || h === '127.0.0.1') && typeof window.MASILANO_LB_API === 'string' && window.MASILANO_LB_API) {
        return String(window.MASILANO_LB_API).replace(/\/$/, '');
      }
    } catch (e) {}
    return String(API || '').replace(/\/$/, '');
  }
  function mockOn(){
    if (window.MASILANO_LB_MOCK) return true;
    try {
      if (localStorage.getItem('masilano.lb.mock') === '1') return true;
      if (/(?:\?|&)lbmock=1\b/.test((location.search || '') + '&')) return true;
    } catch (e) {}
    return false;
  }
  function enabled(){ return mockOn() || !!apiBase(); }

  function ls(k, v){ try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} return null; }
  var pendingParts = null;
  var DICE_SVG = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="8" cy="8" r="1.3" fill="currentColor"/><circle cx="16" cy="8" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="8" cy="16" r="1.3" fill="currentColor"/><circle cx="16" cy="16" r="1.3" fill="currentColor"/></svg>';
  function nameApi(){ return window.MASILANO_NAMES; }
  function partsOf(o){
    if (!o || typeof o !== 'object') return null;
    var p = { kind:+o.kind, gender:+o.gender, a:+o.a, b:+o.b, suffix: (o.suffix == null || o.suffix === '') ? 0 : +o.suffix };
    var N = nameApi();
    return (N && N.validParts(p)) ? p : null;
  }
  function readParts(){
    try { var stored = partsOf(JSON.parse(ls(NAME_KEY) || 'null')); if (stored) return stored; } catch (e) {}
    return partsOf(loadCred());
  }
  function saveParts(p){
    p = partsOf(p);
    if (!p) return;
    ls(NAME_KEY, JSON.stringify(p));
  }
  function formatParts(p){
    p = partsOf(p);
    var N = nameApi();
    return (p && N) ? N.formatName(lang(), p) : '';
  }
  function playerName(){ return formatParts(readParts()); }
  function rollParts(){ return nameApi().rollName(); }
  function currentOrRoll(){
    var p = partsOf(pendingParts) || readParts();
    if (p) { pendingParts = p; return p; }
    pendingParts = rollParts();
    return pendingParts;
  }
  function chosenTitleId(){
    var TT = window.MASILANO_TITLES;
    if (!TT) return null;
    var id = TT.loadChosen();
    if (id == null) return null;
    if (host && host.earnedTitleIds && host.earnedTitleIds().indexOf(id) < 0) return null;
    return id;
  }
  function titleLabel(id, fallbackLang){
    var TT = window.MASILANO_TITLES;
    return (id != null && TT) ? (TT.formatTitle(id, fallbackLang || lang()) || '') : '';
  }
  // v10.43: titles of newer paths use their own ID ranges; the live leaderboard only accepts the legacy ranges.
  // Such a title stays local (shown on this device) and is not sent, so register/rename never fails with bad_title.
  function serverTitleOk(id){
    var TT = window.MASILANO_TITLES;
    return !TT || typeof TT.isServerTitleId !== 'function' || TT.isServerTitleId(id);
  }
  function localOnlyTitle(){
    var TT = window.MASILANO_TITLES;
    var id = TT ? TT.loadChosen() : null;
    return (id != null && !serverTitleOk(id)) ? id : null;
  }
  function namePayload(p, extra){
    p = partsOf(p);
    var o = { kind:p.kind, gender:p.gender, a:p.a, b:p.b, suffix:p.suffix || 0 };
    var tid = chosenTitleId();
    if (tid != null && serverTitleOk(tid)) o.title_id = tid;
    if (extra) for (var k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k];
    return o;
  }
  function syncTitle(id){
    var TT = window.MASILANO_TITLES;
    if (TT) TT.saveChosen(id == null ? null : id);
    var cred = loadCred();
    if (cred) {
      if (id == null) delete cred.title_id;
      else cred.title_id = id;
      saveCred(cred);
    }
    if (!cred || !cred.token || mockOn()) { renderHall(); return Promise.resolve(); }
    var body = { title_id: (id == null || !serverTitleOk(id)) ? null : id };
    return call('/me/rename', { method: 'POST', headers: headers(), body: JSON.stringify(body) })
      .then(function (r){
        if (r && r.body && r.body.ok) {
          if (r.body.title_id == null) { if (id != null && !serverTitleOk(id)) cred.title_id = id; else delete cred.title_id; }
          else cred.title_id = r.body.title_id;
          saveCred(cred);
        }
        renderHall();
        loadBoard();
      }).catch(function (){ renderHall(); });
  }
  function credWithParts(cred, src, country){
    cred = cred || {};
    var p = partsOf(src) || partsOf(cred);
    if (p) { cred.kind = p.kind; cred.gender = p.gender; cred.a = p.a; cred.b = p.b; cred.suffix = p.suffix || 0; }
    if (country) cred.country = country;
    if (src && Object.prototype.hasOwnProperty.call(src, 'title_id')) {
      var keep = src.title_id == null ? localOnlyTitle() : null;
      cred.title_id = keep != null ? keep : (src.title_id == null ? null : src.title_id);
      var TT = window.MASILANO_TITLES;
      if (TT && keep == null) TT.saveChosen(cred.title_id);
    }
    if ('nickname' in cred) delete cred.nickname;
    return cred;
  }
  function nameBlock(P, p){
    p = partsOf(p) || currentOrRoll();
    return '<div class="lbw-namerow">' +
      '<p class="lbw-name" id="lbNameShow">' + esc(formatParts(p)) + '</p>' +
      '<button type="button" class="lbw-dice" id="lbNameRoll" data-act="name-dice" aria-label="' + esc(P.nameDice) + '" title="' + esc(P.nameDice) + '">' +
        DICE_SVG + '<span>' + esc(P.nameDice) + '</span></button></div>';
  }
  function isHidden(){ return ls(HIDE_KEY) === '1'; }
  var ISO_COUNTRIES = ["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"];
  function isCountry(code){
    var c = String(code || '').toUpperCase();
    return c === 'OTHER' || ISO_COUNTRIES.indexOf(c) >= 0;
  }
  function countryName(code){
    var c = String(code || '').toUpperCase();
    if (!c) return '';
    if (c === 'OTHER' || c === 'ANDERE') return T().other;
    try {
      if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
        var n = new Intl.DisplayNames([lang()], { type: 'region' }).of(c);
        if (n) return n;
      }
    } catch (e) {}
    return c;
  }
  function countryOptions(selected){
    var loc = lang();
    var cur = String(selected || '').toUpperCase();
    if (cur === 'ANDERE') cur = 'OTHER';
    if (!isCountry(cur)) cur = 'OTHER';
    var rows = ISO_COUNTRIES.map(function (c){ return [c, countryName(c)]; });
    rows.sort(function (a, b){ return a[1].localeCompare(b[1], loc, { sensitivity: 'base' }); });
    var html = '';
    rows.forEach(function (r){
      html += '<option value="' + r[0] + '"' + (cur === r[0] ? ' selected' : '') + '>' + esc(r[1]) + '</option>';
    });
    html += '<option value="OTHER"' + (cur === 'OTHER' ? ' selected' : '') + '>' + esc(T().other) + '</option>';
    return html;
  }
  function guessCountry(){
    // Local only: region of the device language (e.g. de-CH → CH). No IP, no location.
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages.slice() : [];
    if (navigator.language) langs.push(navigator.language);
    for (var i = 0; i < langs.length; i++) {
      var m = /-([A-Za-z]{2})\b/.exec(langs[i] || '');
      if (m) {
        var c = m[1].toUpperCase();
        if (isCountry(c) && c !== 'OTHER') return c;
      }
    }
    var fallback = { de: 'DE', fr: 'FR', es: 'ES', it: 'IT' };
    var tag = lang();
    if (fallback[tag]) return fallback[tag];
    return 'OTHER';
  }
  function doneIds(){
    var out = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('masilano.color.v1.') === 0) {
          var id = k.slice(18);
          if (host && host.isDone ? host.isDone(id) : false) out.push(id);
        }
      }
    } catch (e) {}
    return out;
  }
  var enrolling = null;
  function ensureEnrolled(){
    if (!AUTO || !enabled() || isHidden()) return Promise.resolve(loadCred());
    var cred = loadCred();
    if (cred && cred.token) return backfill().then(function (){ return cred; });
    var parts = readParts();
    if (!parts) return Promise.resolve(null);
    if (!doneIds().length) return Promise.resolve(null);
    if (enrolling) return enrolling;
    var country = ls('masilano.lb.country.v1') || guessCountry();
    if (mockOn()) {
      saveCred(credWithParts({ token: 'MASI-MOCK-AUTO', player_id: 'mock', country: country, auto: true }, parts, country));
      return Promise.resolve(loadCred());
    }
    function attempt(p){
      return call('/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(namePayload(p, { country: country, auto: true })) })
        .then(function (r){
          if (!r.body || !r.body.ok) return null;
          saveCred(credWithParts({ token: r.body.token, player_id: r.body.player_id, country: r.body.country, auto: true }, r.body, r.body.country));
          return backfill().then(function (){ return loadCred(); });
        });
    }
    enrolling = attempt(parts).catch(function (){ return null; }).then(function (c){ enrolling = null; return c; });
    return enrolling;
  }
  function backfill(){
    var cred = loadCred();
    if (!cred || !cred.token || ls(BACKFILL_KEY) === '1' || mockOn()) return Promise.resolve();
    var ids = doneIds();
    if (!ids.length) return Promise.resolve();
    return call('/backfill', { method: 'POST', headers: headers(), body: JSON.stringify({ painting_ids: ids }) })
      .then(function (r){ if (r.status === 200 || r.status === 409) ls(BACKFILL_KEY, '1'); })
      .catch(function (){});
  }
  function needsPrompt(){
    if (!AUTO || !enabled() || isHidden()) return false;
    // Old free-text names do not count; show the welcome once until valid parts exist.
    return !readParts();
  }
  function welcomeEl(){
    var el = document.getElementById('lbWelcome');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'lbWelcome';
    el.className = 'lb-welcome hidden';
    el.hidden = true;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'lbWelcomeTitle');
    (document.body || document.documentElement).appendChild(el);
    return el;
  }
  function welcomeOpen(){
    var el = document.getElementById('lbWelcome');
    return !!(el && !el.classList.contains('hidden') && !el.hidden);
  }
  function renderWelcome(){
    var el = welcomeEl();
    var P = T();
    var keepC = (el.querySelector('#lbCountry') || {}).value;
    var parts = currentOrRoll();
    var cc = keepC || ls('masilano.lb.country.v1') || guessCountry();
    el.innerHTML =
      '<div class="lbw-inner">' +
        '<img class="lbw-logo" src="icon.svg" width="72" height="72" alt="">' +
        '<p class="lbw-wordmark">Meisterwerke</p>' +
        '<p class="lbw-hello">' + esc(P.welcome) + '</p>' +
        (P.nameLead ? '<p class="lbw-lead">' + esc(P.nameLead) + '</p>' : '') +
        '<h1 id="lbWelcomeTitle">' + esc(P.nameTitle) + '</h1>' +
        nameBlock(P, parts) +
        '<label class="rl-lab">' + esc(P.countryLabel) + '<select class="rl-field" id="lbCountry">' + countryOptions(cc) + '</select></label>' +
        '<p class="zf-fine">' + esc(P.nameNote) + '</p>' +
        '<p class="rl-form-err" hidden></p>' +
        '<div class="lbw-btns">' +
          '<button type="button" class="btn goldcta" data-act="do-name">' + esc(P.nameGo) + '</button>' +
          '<button type="button" class="btn ghost lbw-skip" data-act="name-skip">' + esc(P.nameSkip) + '</button>' +
        '</div>' +
      '</div>';
    el.querySelectorAll('[data-act]').forEach(function (b){
      b.onclick = function (){ onJoinAct(b.getAttribute('data-act')); };
    });
  }
  function showWelcome(){
    renderWelcome();
    var el = welcomeEl();
    el.hidden = false;
    el.classList.remove('hidden');
    document.body.classList.add('lb-welcome');
    var focus = el.querySelector('#lbNameRoll') || el.querySelector('.btn.goldcta');
    if (focus) setTimeout(function (){ focus.focus(); }, 40);
  }
  function hideWelcome(){
    var el = document.getElementById('lbWelcome');
    var was = welcomeOpen();
    if (el) { el.classList.add('hidden'); el.hidden = true; }
    document.body.classList.remove('lb-welcome');
    if (was && host && host.maybeStartOnboard) host.maybeStartOnboard();
  }
  function maybePrompt(){
    if (!needsPrompt()) return;
    showWelcome();
  }
  function loadCred(){ try { return JSON.parse(localStorage.getItem(CRED_KEY) || 'null'); } catch (e) { return null; } }
  function saveCred(o){ try { if (o) localStorage.setItem(CRED_KEY, JSON.stringify(o)); else localStorage.removeItem(CRED_KEY); } catch (e) {} }
  function markStart(pid){
    if (!pid) return;
    try { if (!localStorage.getItem(START_PFX + pid)) localStorage.setItem(START_PFX + pid, String(Date.now())); } catch (e) {}
  }
  function startedAt(pid){
    try { return Number(localStorage.getItem(START_PFX + pid) || 0) || 0; } catch (e) { return 0; }
  }

  function painterOf(pid){
    if (!pid) return null;
    if (host && host.pathOwning) {
      var p = host.pathOwning(pid);
      if (p && p.id) return p.id;
    }
    var works = window.PATH_WORKS || [];
    for (var i = 0; i < works.length; i++) if (works[i].id === pid) return artistToPainter(works[i].artist);
    var all = window.PAINTINGS || window.ALL || [];
    for (var j = 0; j < all.length; j++) if (all[j].id === pid) return artistToPainter(all[j].artist);
    return null;
  }
  function artistToPainter(artist){
    var map = {
      'Vincent van Gogh':'vangogh', 'Claude Monet':'monet', 'Katsushika Hokusai':'hokusai',
      'Gustav Klimt':'klimt', 'Albert Anker':'anker', 'Ferdinand Hodler':'hodler',
      'Paul Cézanne':'cezanne', 'Utagawa Hiroshige':'hiroshige', 'Pierre-Auguste Renoir':'renoir',
      'Camille Pissarro':'pissarro', 'J. M. W. Turner':'turner', 'William Turner':'turner',
      'Rembrandt':'rembrandt', 'Rembrandt van Rijn':'rembrandt', 'Alfred Sisley':'sisley',
      'Sisley':'sisley', 'Caspar David Friedrich':'friedrich', 'Friedrich':'friedrich'
    };
    return map[artist] || null;
  }

  var MOCK = {
    world: [
      { rank:1, pid:'00000000-0000-4000-8000-000000000001', kind:0, gender:1, a:0, b:0, suffix:1, country:'CH', total:42, title_id:5 },
      { rank:2, pid:'00000000-0000-4000-8000-000000000002', kind:0, gender:1, a:0, b:109, suffix:58, country:'AT', total:37, title_id:200 },
      { rank:3, kind:0, gender:0, a:2, b:109, suffix:21, country:'DE', total:33, title_id:100 },
      { rank:4, kind:1, gender:0, a:1, b:1, suffix:0, country:'CH', total:28 },
      { rank:5, kind:1, gender:1, a:0, b:2, suffix:0, country:'CH', total:21 },
      { rank:6, kind:0, gender:1, a:0, b:126, suffix:49, country:'DE', total:18 },
      { rank:7, kind:1, gender:0, a:11, b:0, suffix:0, country:'AT', total:14 },
      { rank:8, kind:1, gender:1, a:5, b:10, suffix:0, country:'OTHER', total:11 }
    ],
    painter: {
      monet: [{ rank:1, kind:0, gender:1, a:0, b:109, suffix:58, country:'AT', count:12 }, { rank:2, kind:0, gender:1, a:0, b:0, suffix:1, country:'CH', count:9 }, { rank:3, kind:1, gender:0, a:3, b:4, suffix:0, country:'DE', count:7 }],
      vangogh: [{ rank:1, kind:0, gender:1, a:0, b:0, suffix:1, country:'CH', count:11 }, { rank:2, kind:0, gender:0, a:2, b:109, suffix:21, country:'DE', count:8 }],
      klimt: [{ rank:1, kind:1, gender:1, a:0, b:2, suffix:0, country:'CH', count:6 }, { rank:2, kind:1, gender:1, a:5, b:10, suffix:0, country:'OTHER', count:5 }],
      hodler: [{ rank:1, kind:1, gender:0, a:1, b:1, suffix:0, country:'CH', count:8 }, { rank:2, kind:1, gender:0, a:11, b:0, suffix:0, country:'AT', count:4 }]
    }
  };

  function mockCountries(rows){
    var seen = {}, out = [];
    (rows || []).forEach(function (r){
      if (r.country && !seen[r.country]) { seen[r.country] = 1; out.push(r.country); }
    });
    return out;
  }
  function mockRows(){
    var P = T();
    var allCountries = mockCountries(MOCK.world);
    if (state.scope === 'painter') {
      var rows = (MOCK.painter[state.painter] || MOCK.painter.monet).slice();
      return { rows: rows, me: mockMe(rows, 'count'), countries: allCountries };
    }
    var rows = MOCK.world.slice();
    if (state.scope === 'country') rows = rows.filter(function (r){ return r.country === state.country; }).map(function (r, i){ return Object.assign({}, r, { rank: i + 1 }); });
    return { rows: rows, me: mockMe(rows, 'total'), countries: allCountries };
  }
  function mockMe(rows, field){
    var cred = loadCred();
    if (!cred) return null;
    var p = partsOf(cred);
    for (var i = 0; i < rows.length; i++) {
      if (cred.player_id && rows[i].pid === cred.player_id) {
        var o = Object.assign({ rank: rows[i].rank, country: cred.country || rows[i].country }, p || partsOf(rows[i]) || {});
        o[field] = rows[i][field];
        return o;
      }
    }
    var empty = Object.assign({ rank: null, country: cred.country || 'CH' }, p || {});
    empty[field] = 0;
    return empty;
  }

  function headers(){
    var h = { 'Content-Type': 'application/json' };
    var c = loadCred();
    if (c && c.token) h.Authorization = 'Bearer ' + c.token;
    return h;
  }
  function call(path, opts){
    var url = apiBase() + path;
    return fetch(url, opts).then(function (res){
      return res.json().then(function (body){ return { status: res.status, body: body }; });
    });
  }

  function loadBoard(){
    if (!enabled()) return Promise.resolve();
    state.loading = true; state.error = null; renderHall();
    if (mockOn()) {
      var m = mockRows();
      state.rows = m.rows; state.me = m.me; state.countries = m.countries || []; state.loading = false;
      renderHall();
      return Promise.resolve();
    }
    var path;
    if (state.scope === 'painter') path = '/rankings/painter/' + encodeURIComponent(state.painter) + '?limit=50';
    else if (state.scope === 'country') path = '/rankings?scope=country&country=' + encodeURIComponent(state.country) + '&limit=50';
    else path = '/rankings?scope=world&limit=50';
    return call(path, { headers: headers() }).then(function (r){
      state.loading = false;
      if (!r.body || !r.body.ok) { state.error = 'error'; state.rows = []; state.me = null; }
      else {
        state.rows = r.body.rows || []; state.me = r.body.me || null;
        if (r.body.countries) {
          state.countries = r.body.countries;
          if (state.scope === 'country' && state.countries.indexOf(state.country) < 0) {
            var mine = (loadCred() || {}).country;
            state.country = (mine && state.countries.indexOf(mine) >= 0) ? mine : (state.countries[0] || state.country);
          }
        }
      }
      renderHall();
    }).catch(function (){ state.loading = false; state.error = 'error'; state.rows = []; renderHall(); });
  }

  function pics(n){
    var P = T();
    n = Number(n) || 0;
    return n === 1 ? P.picture1 : fill(P.pictures, { n: n });
  }
  function countryLabel(code){
    return countryName(code);
  }
  function painterName(id){
    if (host && host.PATHS) {
      var p = host.PATHS.find(function (x){ return x.id === id; });
      if (p) return (host.L && host.L(p, 'name')) || p.name || PAINTER_NAMES[id] || id;
    }
    return PAINTER_NAMES[id] || id;
  }

  function entryHtml(){
    var P = T();
    var soon = !enabled();
    return '<button type="button" class="zf-entry rl-entry' + (soon ? ' is-soon' : '') + '" aria-label="' + esc(soon ? P.soon : P.toHall) + '">' +
      '<span class="rl-entry-mark" aria-hidden="true">I</span>' +
      '<span class="zf-entry-tx"><span class="k">' + esc(P.entryK) + '</span><span class="n">' + esc(P.title) + '</span>' +
      '<span class="m">' + esc(soon ? P.soon : P.entryM) + '</span></span><span class="go" aria-hidden="true">›</span></button>';
  }
  function renderEntry(el){
    if (!el) return;
    el.innerHTML = entryHtml();
    var b = el.querySelector('.rl-entry');
    if (b) b.onclick = function (){ if (host && host.showRankings) host.showRankings(); };
  }

  function switcher(){
    var P = T();
    function tab(id, label){
      return '<button type="button" class="rl-tab' + (state.scope === id ? ' on' : '') + '" data-scope="' + id + '">' + esc(label) + '</button>';
    }
    var html = '<div class="rl-switch" role="tablist">' + tab('world', P.welt) + tab('country', P.land) + tab('painter', P.maler) + '</div>';
    if (state.scope === 'country') {
      html += '<div class="rl-chips">';
      var chips = (state.countries && state.countries.length) ? state.countries.slice() : [];
      chips.forEach(function (c){
        html += '<button type="button" class="rl-chip' + (state.country === c ? ' on' : '') + '" data-country="' + esc(c) + '">' + esc(countryName(c)) + '</button>';
      });
      html += '</div>';
    }
    if (state.scope === 'painter') {
      html += '<div class="rl-painters">';
      PAINTER_IDS.forEach(function (id){
        html += '<button type="button" class="rl-chip' + (state.painter === id ? ' on' : '') + '" data-painter="' + id + '">' + esc(painterName(id)) + '</button>';
      });
      html += '</div>';
    }
    return html;
  }

  function listHtml(){
    var P = T();
    if (state.loading) return '<p class="rl-empty">' + esc(P.loading) + '</p>';
    if (state.error) return '<p class="rl-empty">' + esc(P.error) + '</p>';
    var rows = state.rows || [];
    if (!rows.length) return '<p class="rl-empty">' + esc(P.empty) + '</p>';
    var cred = loadCred();
    var html = '<ol class="rl-list">';
    rows.forEach(function (r){
      var mine = cred && r.pid && r.pid === cred.player_id;
      var n = (state.scope === 'painter') ? r.count : r.total;
      var shown = formatParts(r) || '';
      var titleTx = titleLabel(r.title_id);
      html += '<li class="rl-row' + (mine ? ' is-me' : '') + '">' +
        '<span class="rl-rank">' + esc(r.rank) + '</span>' +
        '<span class="rl-who"><span class="rl-nick">' + esc(shown) + (mine ? ' <em>' + esc(P.you) + '</em>' : '') + '</span>' +
        (titleTx ? '<span class="rl-title">' + esc(titleTx) + '</span>' : '') +
        '<span class="rl-land">' + esc(countryLabel(r.country)) + '</span></span>' +
        '<span class="rl-score">' + esc(pics(n)) + '</span></li>';
    });
    html += '</ol>';
    return html;
  }

  function accountHtml(){
    var P = T(), cred = loadCred(), me = state.me;
    if (!enabled()) return '';
    if (!AUTO && !cred) {
      var note = ls(OPTIN_NOTICE_KEY) === '1' ? '<p class="rl-you">' + esc(P.optinNotice) + '</p>' : '';
      return '<div class="rl-account">' + note +
        '<button type="button" class="btn goldcta" data-rl="join">' + esc(P.join) + '</button>' +
        '<button type="button" class="rl-link" data-rl="restore">' + esc(P.haveCode) + '</button></div>';
    }
    if (AUTO && isHidden()) {
      return '<div class="rl-account"><p class="rl-you">' + esc(P.hiddenTx) + '</p>' +
        '<button type="button" class="btn goldcta" data-rl="unhide">' + esc(P.unhide) + '</button></div>';
    }
    if (!cred) {
      var nm = playerName();
      return '<div class="rl-account">' + (nm ? '<p class="rl-you">' + esc(fill(P.pending, { n: nm })) + '</p>' : '') +
        '<button type="button" class="btn goldcta" data-rl="name">' + esc(nm ? P.rename : P.nameTitle) + '</button>' +
        '<button type="button" class="btn ghost rl-remove" data-rl="hide">' + esc(P.hide) + '</button>' +
        '<button type="button" class="rl-link" data-rl="restore">' + esc(P.haveCode) + '</button></div>';
    }
    var rankTx = (me && me.rank) ? fill(P.meRank, { n: me.rank }) : (AUTO ? '' : P.meNone);
    var myTitle = titleLabel((cred && cred.title_id) != null ? cred.title_id : chosenTitleId());
    var pickLabel = (host && host.t) ? host.t('titlePick') : 'Titel wählen';
    var currentLabel = (host && host.t) ? host.t('titleCurrent') : 'Angezeigter Titel';
    return '<div class="rl-account">' +
      '<p class="rl-you">' + esc(fill(P.joinedAs, { n: formatParts(cred) || playerName() })) + '</p>' +
      (myTitle ? '<p class="rl-mytitle">' + esc(currentLabel + ': ' + myTitle) + '</p>' : '') +
      (rankTx ? '<p class="rl-myrank">' + esc(rankTx) + '</p>' : '') +
      '<button type="button" class="btn goldcta" data-rl="name">' + esc(P.rename) + '</button>' +
      '<button type="button" class="btn ghost" data-rl="title">' + esc(pickLabel) + '</button>' +
      '<button type="button" class="btn ghost" data-rl="code">' + esc(P.codeTitle) + '</button>' +
      (AUTO ? '<button type="button" class="btn ghost rl-remove" data-rl="hide">' + esc(P.hide) + '</button></div>'
            : '<button type="button" class="btn ghost rl-remove" data-rl="remove">' + esc(P.remove) + '</button></div>');
  }

  function renderHall(){
    var el = document.getElementById('rankingsBody');
    if (!el) return;
    var P = T();
    var titleEl = document.getElementById('lbTopTitle');
    if (titleEl) titleEl.textContent = P.title;
    if (!enabled()) {
      el.innerHTML = '<header class="zf-head"><p class="roomlab">' + esc(P.room) + '</p><h1 class="zf-title">' + esc(P.title) + '</h1>' +
        '<div class="orn" aria-hidden="true"></div><p class="zf-motto">' + esc(P.soon) + '</p>' +
        '<div class="rl-tablet"><p>' + esc(P.soonLead) + '</p></div></header>';
      return;
    }
    el.innerHTML = '<header class="zf-head"><p class="roomlab">' + esc(P.room) + '</p><h1 class="zf-title">' + esc(P.title) + '</h1>' +
      '<div class="orn" aria-hidden="true"></div><p class="zf-motto">' + esc(P.motto) + '</p><p class="zf-lead">' + esc(AUTO ? P.lead : P.leadOpt) + '</p></header>' +
      switcher() + '<div class="rl-tablet">' + listHtml() + '</div>' + accountHtml() + '<p class="zf-fine">' + esc(AUTO ? P.autoFine : P.fine) + '</p>';
    el.querySelectorAll('[data-scope]').forEach(function (b){
      b.onclick = function (){ state.scope = b.getAttribute('data-scope'); loadBoard(); };
    });
    el.querySelectorAll('[data-country]').forEach(function (b){
      b.onclick = function (){ state.country = b.getAttribute('data-country'); loadBoard(); };
    });
    el.querySelectorAll('[data-painter]').forEach(function (b){
      b.onclick = function (){ state.painter = b.getAttribute('data-painter'); loadBoard(); };
    });
    el.querySelectorAll('[data-rl]').forEach(function (b){
      b.onclick = function (){
        var a = b.getAttribute('data-rl');
        if (a === 'join') openJoin('join');
        if (a === 'code') openJoin('code');
        if (a === 'remove') openJoin('remove');
        if (a === 'name') openJoin('name');
        if (a === 'hide') openJoin('hide');
        if (a === 'restore') openJoin('restore');
        if (a === 'title') { if (host && host.openTitlePicker) host.openTitlePicker(); }
        if (a === 'unhide') { ls(HIDE_KEY, null); ls(BACKFILL_KEY, null); ensureEnrolled().then(function (){ loadBoard(); }); renderHall(); }
      };
    });
  }

  function joinFields(P, mode){
    if (mode === 'name') {
      var cred0 = loadCred();
      var parts = currentOrRoll();
      var cc = (cred0 && cred0.country) || ls('masilano.lb.country.v1') || guessCountry();
      var first = !ls(PROMPTED_KEY);
      return nameBlock(P, parts) +
        '<label class="rl-lab">' + esc(P.countryLabel) + '<select class="rl-field" id="lbCountry">' + countryOptions(cc) + '</select></label>' +
        '<p class="zf-fine">' + esc(P.nameNote) + '</p><p class="rl-form-err" hidden></p>' +
        (first ? '' : '<p class="zf-fine">' + esc(P.renameRule) + '</p>') +
        '<div class="btns"><button type="button" class="btn goldcta" data-act="do-name">' + esc(first ? P.nameGo : P.nameSave) + '</button>' +
        (first ? '<button type="button" class="btn ghost" data-act="name-skip">' + esc(P.nameSkip) + '</button>'
               : '<button type="button" class="btn ghost" data-act="close">' + esc(P.cancel) + '</button>') + '</div>';
    }
    if (mode === 'hide') {
      return '<p>' + esc(P.hideAsk) + '</p><p class="rl-form-err" hidden></p>' +
        '<div class="btns"><button type="button" class="btn" data-act="do-hide">' + esc(P.hideYes) + '</button>' +
        '<button type="button" class="btn ghost" data-act="close">' + esc(P.cancel) + '</button></div>';
    }
    if (mode === 'code-show') {
      var cred = loadCred() || {};
      return '<p>' + esc(P.codeLead) + '</p><p class="zf-code rl-code">' + esc(cred.token || '') + '</p>' +
        '<div class="btns"><button type="button" class="btn goldcta" data-act="close">' + esc(P.codeSaved) + '</button></div>';
    }
    if (mode === 'remove') {
      return '<p>' + esc(P.removeAsk) + '</p><p class="rl-form-err" hidden></p>' +
        '<div class="btns"><button type="button" class="btn" data-act="do-remove">' + esc(P.removeYes) + '</button>' +
        '<button type="button" class="btn ghost" data-act="close">' + esc(P.cancel) + '</button></div>';
    }
    if (mode === 'restore') {
      return '<label class="rl-lab">' + esc(P.codeLabel) + '<input class="rl-field" id="lbCodeIn" autocomplete="off" spellcheck="false" placeholder="' + esc(P.codePh) + '"></label>' +
        '<p class="rl-form-err" hidden></p>' +
        '<div class="btns"><button type="button" class="btn goldcta" data-act="do-restore">' + esc(P.restore) + '</button>' +
        '<button type="button" class="btn ghost" data-act="to-join">' + esc(P.cancel) + '</button></div>';
    }
    return nameBlock(P, currentOrRoll()) +
      '<label class="rl-lab">' + esc(P.countryLabel) + '<select class="rl-field" id="lbCountry">' + countryOptions(guessCountry()) + '</select></label>' +
      '<label class="rl-check"><input type="checkbox" id="lbAge"> <span>' + esc(P.age) + '</span></label>' +
      '<label class="rl-check"><input type="checkbox" id="lbConsent"> <span>' + esc(P.consent) + '</span></label>' +
      '<p class="zf-fine">' + esc(P.consentFine) + ' <a href="privacy.html" target="_blank" rel="noopener">' + esc(P.privacyLink) + '</a></p>' +
      '<p class="rl-form-err" hidden></p>' +
      '<div class="btns"><button type="button" class="btn goldcta" data-act="do-join">' + esc(P.start) + '</button>' +
      '<button type="button" class="btn ghost" data-act="close">' + esc(P.cancel) + '</button></div>' +
      '<button type="button" class="rl-link" data-act="to-restore">' + esc(P.haveCode) + '</button>';
  }

  function openJoin(mode){
    if (AUTO && (mode === 'join' || mode === 'remove')) mode = (mode === 'join') ? 'name' : 'hide';
    if (AUTO && mode === 'name' && needsPrompt()) { showWelcome(); return; }
    var sh = document.getElementById('lbJoin');
    var card = document.getElementById('lbJoinCard');
    if (!sh || !card) return;
    var P = T();
    var titles = { join: P.joinTitle, restore: P.haveCode, 'code-show': P.codeTitle, remove: P.remove, name: P.nameTitle, hide: P.hide };
    var leads = { join: P.joinLead, restore: '', 'code-show': '', remove: '', name: P.nameLead, hide: '' };
    card.innerHTML = '<p class="zf-kick">' + esc(P.room) + '</p><h2 id="lbJoinTitle">' + esc(titles[mode] || P.joinTitle) + '</h2>' +
      (leads[mode] ? '<p class="zf-meta">' + esc(leads[mode]) + '</p>' : '') +
      '<div class="zf-body">' + joinFields(P, mode) + '</div>';
    card.scrollTop = 0;
    card.querySelectorAll('[data-act]').forEach(function (b){
      b.onclick = function (){ onJoinAct(b.getAttribute('data-act')); };
    });
    if (host && host.revealSheet) host.revealSheet('#lbJoin');
    else sh.classList.remove('hidden');
    var focus = card.querySelector('input, button.goldcta, button.btn');
    if (focus) setTimeout(function (){ focus.focus(); }, 40);
  }

  function closeJoin(){
    if (welcomeOpen()) hideWelcome();
    if (host && host.closeSheet) host.closeSheet();
    else {
      var sh = document.getElementById('lbJoin');
      if (sh) sh.classList.add('hidden');
    }
  }
  function showErr(msg){
    var el = document.querySelector('#lbWelcome:not(.hidden) .rl-form-err, #lbJoinCard .rl-form-err');
    if (!el) return;
    el.hidden = !msg;
    el.textContent = msg || '';
  }

  function onJoinAct(act){
    var P = T();
    if (act === 'close') { closeJoin(); return; }
    if (act === 'to-restore') { openJoin('restore'); return; }
    if (act === 'to-join') { openJoin('join'); return; }
    if (act === 'do-join') return doJoin();
    if (act === 'do-restore') return doRestore();
    if (act === 'do-remove') return doRemove();
    if (act === 'do-name') return doName();
    if (act === 'do-hide') return doHide();
    if (act === 'name-dice') {
      pendingParts = rollParts();
      var shown = document.getElementById('lbNameShow');
      if (shown) shown.textContent = formatParts(pendingParts);
      return;
    }
    if (act === 'name-skip') { ls(PROMPTED_KEY, '1'); return doHide(); }
  }

  function doJoin(){
    if (AUTO) return doName();   // v10.33: the old opt-in form is not reachable in auto mode
    var P = T();
    var parts = partsOf(pendingParts) || readParts() || rollParts();
    pendingParts = parts;
    var country = (document.getElementById('lbCountry') || {}).value || 'CH';
    var age = !!(document.getElementById('lbAge') && document.getElementById('lbAge').checked);
    var consent = !!(document.getElementById('lbConsent') && document.getElementById('lbConsent').checked);
    if (!age) { showErr(P.needAge); return; }
    if (!consent) { showErr(P.needConsent); return; }
    if (mockOn()) {
      saveCred(credWithParts({ token: 'MASI-MOCK-GOLD-PINSEL-CODE', player_id: 'mock', country: country, consent: true }, parts, country));
      ls(OPTIN_NOTICE_KEY, null);
      saveParts(parts);
      openJoin('code-show');
      loadBoard();
      return;
    }
    call('/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(namePayload(parts, { country: country, age_confirm: true, consent: true })) })
      .then(function (r){
        if (!r.body || !r.body.ok) { showErr(P.error); return; }
        saveCred(credWithParts({ token: r.body.token, player_id: r.body.player_id, country: r.body.country, consent: true }, r.body, r.body.country));
        saveParts(r.body); ls(OPTIN_NOTICE_KEY, null); ls(BACKFILL_KEY, null); backfill();
        openJoin('code-show');
        loadBoard();
      }).catch(function (){ showErr(P.error); });
  }

  function doRestore(){
    var P = T();
    var token = ((document.getElementById('lbCodeIn') || {}).value || '').trim().toUpperCase();
    if (!token) { showErr(P.badCode); return; }
    if (mockOn()) {
      saveCred(credWithParts({ token: token, player_id: 'mock', country: 'CH' }, currentOrRoll() || rollParts(), 'CH')); saveParts(loadCred());
      closeJoin(); loadBoard(); return;
    }
    call('/me/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
      .then(function (r){
        if (!r.body || !r.body.ok) { showErr(P.badCode); return; }
        var restored = credWithParts({ token: token, player_id: r.body.player_id, country: r.body.country, consent: true }, r.body, r.body.country);
        saveCred(restored); saveParts(restored);
        closeJoin(); loadBoard();
      }).catch(function (){ showErr(P.error); });
  }

  function doRemove(){
    var P = T();
    var cred = loadCred();
    if (mockOn()) { saveCred(null); closeJoin(); loadBoard(); if (host && host.mtoast) host.mtoast(P.removed); return; }
    if (!cred || !cred.token) { saveCred(null); closeJoin(); loadBoard(); return; }
    call('/me/delete', { method: 'POST', headers: headers(), body: JSON.stringify({}) })
      .then(function (){
        saveCred(null); closeJoin(); loadBoard();
        if (host && host.mtoast) host.mtoast(P.removed);
      }).catch(function (){ showErr(P.error); });
  }

  function doName(){
    var P = T();
    var parts = partsOf(pendingParts) || readParts() || rollParts();
    pendingParts = parts;
    var country = String((document.getElementById('lbCountry') || {}).value || 'OTHER').toUpperCase();
    if (country === 'ANDERE') country = 'OTHER';
    if (!isCountry(country)) country = 'OTHER';
    var cred = loadCred();
    function done(){
      saveParts(parts); ls('masilano.lb.country.v1', country); ls(PROMPTED_KEY, '1');
      closeJoin(); ensureEnrolled().then(function (){ if (document.getElementById('rankings') && document.getElementById('rankings').classList.contains('active')) loadBoard(); });
      renderHall();
    }
    if (!cred || !cred.token || mockOn()) {
      if (cred) saveCred(credWithParts(cred, parts, country));
      return done();
    }
    call('/me/rename', { method: 'POST', headers: headers(), body: JSON.stringify(namePayload(parts, { country: country })) })
      .then(function (r){
        if (r.status === 429 && r.body && r.body.error === 'rename_limit') { showErr(P.renameLimit); return; }
        if (!r.body || !r.body.ok) { showErr(P.error); return; }
        saveCred(credWithParts(cred, r.body, r.body.country)); done();
      }).catch(function (){ showErr(P.error); });
  }
  function doHide(){
    var P = T(), cred = loadCred();
    function fin(){ saveCred(null); ls(HIDE_KEY, '1'); ls(BACKFILL_KEY, null); closeJoin(); renderHall(); loadBoard(); if (host && host.mtoast) host.mtoast(P.hiddenTx); }
    if (!cred || !cred.token || mockOn()) return fin();
    call('/me/delete', { method: 'POST', headers: headers(), body: JSON.stringify({}) })
      .then(fin).catch(function (){ showErr(P.error); });
  }

  function reportComplete(pid){
    if (!pid || !enabled()) return Promise.resolve();
    var had = loadCred();
    if (AUTO && !(had && had.token)) {
      // First finished picture: enrol, then the one-time backfill counts it.
      return ensureEnrolled().then(function (){});
    }
    var cred = had;
    if (!cred || !cred.token) return Promise.resolve();
    var painter = painterOf(pid);
    var started = startedAt(pid) || Date.now();
    if (mockOn()) return Promise.resolve();
    return call('/complete', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ painting_id: pid, painter_id: painter, started_at: started })
    }).then(function (r){
      if (r && r.body && r.body.ok) {
        try { localStorage.removeItem(START_PFX + pid); } catch (e) {}
      }
    }).catch(function (){});
  }

  function showPage(opts){
    renderHall();
    if (enabled()) loadBoard();
  }

  function refresh(){
    if (welcomeOpen()) renderWelcome();
    renderEntry(document.getElementById('lbEntryT'));
    var hall = document.getElementById('rankings');
    if (hall && hall.classList.contains('active')) showPage();
  }
  // v10.42r: accounts created by the old auto-enrolment have no recorded consent.
  // Delete them once (server and device) and show a short notice; joining again is opt-in.
  function migrateAuto(){
    var cred = loadCred();
    if (AUTO || !cred || !cred.auto || cred.consent) return Promise.resolve(false);
    function fin(){ saveCred(null); ls(BACKFILL_KEY, null); ls(HIDE_KEY, null); ls(OPTIN_NOTICE_KEY, '1'); refresh(); return true; }
    if (mockOn() || !cred.token || !apiBase()) return Promise.resolve(fin());
    return call('/me/delete', { method: 'POST', headers: headers(), body: JSON.stringify({}) })
      .then(fin, fin);
  }
  function init(h){
    host = h || {}; refresh();
    migrateAuto();
    if (AUTO) {
      maybePrompt();
      setTimeout(function (){ ensureEnrolled(); }, 2500);   // backfill on next start
    }
    return api;
  }

  var api = { migrateAuto: migrateAuto, init: init, refresh: refresh, showPage: showPage, markStart: markStart, reportComplete: reportComplete, enabled: enabled, openJoin: openJoin, loadBoard: loadBoard, painterOf: painterOf, ensureEnrolled: ensureEnrolled, formatParts: formatParts, rollParts: rollParts, readParts: readParts, pendingParts: function (){ return pendingParts; }, guessCountry: guessCountry, maybePrompt: maybePrompt, needsPrompt: needsPrompt, isCountry: isCountry, countryName: countryName, syncTitle: syncTitle, chosenTitleId: chosenTitleId };
  window.MASILANO_LB = api;
  if (AUTO && document.body) maybePrompt();
  else if (AUTO) document.addEventListener('DOMContentLoaded', function (){ maybePrompt(); });
})();
