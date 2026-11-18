(function () {
  // Leave empty until the Worker is deployed. Empty = the section shows «Bald».
  var API = '';
  var CRED_KEY = 'masilano.lb.cred.v1';
  var START_PFX = 'masilano.lb.start.';
  var PAINTER_IDS = ['vangogh','monet','hokusai','klimt','anker','hodler','cezanne','hiroshige','renoir','pissarro','turner','rembrandt','sisley','friedrich'];
  var PAINTER_NAMES = {
    vangogh:'Vincent van Gogh', monet:'Claude Monet', hokusai:'Katsushika Hokusai', klimt:'Gustav Klimt',
    anker:'Albert Anker', hodler:'Ferdinand Hodler', cezanne:'Paul Cézanne', hiroshige:'Utagawa Hiroshige',
    renoir:'Pierre-Auguste Renoir', pissarro:'Camille Pissarro', turner:'J. M. W. Turner',
    rembrandt:'Rembrandt', sisley:'Alfred Sisley', friedrich:'Caspar David Friedrich'
  };
  var TX = {
    de: {
      room:'Ehrenhalle', title:'Ranglisten', motto:'Welt, Land und Maler',
      lead:'Wer die meisten Meisterwerke vollendet, führt die Tafel. Die Teilnahme ist freiwillig, der Spitzname erscheint öffentlich.',
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
      meRank:'Dein Platz: {n}', meNone:'Noch ohne Platzierung — vollende ein Bild nach dem Beitritt.',
      fine:'Gewertet werden Bilder, die du nach dem Beitritt vollendest. Ein Bild braucht jeweils mehrere Minuten. Es gibt kein Konto mit E-Mail; der Code ist dein Schlüssel.',
      badNick:'Der Spitzname braucht 3 bis 20 Zeichen und darf keine Adresse enthalten.',
      taken:'Dieser Spitzname ist bereits vergeben.',
      needAge:'Bitte bestätige, dass du mindestens 16 Jahre alt bist.',
      needConsent:'Bitte bestätige die Teilnahme.',
      badCode:'Dieser Code wurde nicht erkannt.',
      you:'Du'
    },
    en: {
      room:'Hall of Honour', title:'Leaderboards', motto:'World, country and painter',
      lead:'Whoever completes the most masterpieces leads the board. Joining is optional, and your nickname is public.',
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
      meRank:'Your place: {n}', meNone:'No place yet — finish a painting after joining.',
      fine:'Only paintings you finish after joining are counted. Each painting takes several minutes. There is no email account; the code is your key.',
      badNick:'The nickname must be 3 to 20 characters and must not contain an address.',
      taken:'This nickname is already taken.',
      needAge:'Please confirm that you are at least 16 years old.',
      needConsent:'Please confirm that you want to join.',
      badCode:'This code was not recognised.',
      you:'You'
    },
    es: {
      room:'Sala de honor', title:'Clasificaciones', motto:'Mundo, país y pintor',
      lead:'Quien completa más obras maestras encabeza la tabla. La participación es voluntaria y el apodo es público.',
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
      meRank:'Tu puesto: {n}', meNone:'Aún sin puesto: termina un cuadro después de unirte.',
      fine:'Solo cuentan los cuadros que termines después de unirte. Cada uno lleva varios minutos. No hay cuenta de correo; el código es tu llave.',
      badNick:'El apodo debe tener de 3 a 20 caracteres y no puede contener una dirección.',
      taken:'Este apodo ya está en uso.',
      needAge:'Confirma que tienes al menos 16 años.',
      needConsent:'Confirma que quieres participar.',
      badCode:'Este código no se ha reconocido.',
      you:'Tú'
    },
    fr: {
      room:'Salle d’honneur', title:'Classements', motto:'Monde, pays et peintre',
      lead:'Celui ou celle qui termine le plus de chefs-d’œuvre mène le tableau. La participation est libre, et le surnom est public.',
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
      meRank:'Ta place : {n}', meNone:'Pas encore classé — termine un tableau après t’être inscrit.',
      fine:'Seuls les tableaux terminés après l’inscription comptent. Chaque tableau demande plusieurs minutes. Il n’y a pas de compte e-mail ; le code est ta clé.',
      badNick:'Le surnom doit faire de 3 à 20 caractères et ne pas contenir d’adresse.',
      taken:'Ce surnom est déjà pris.',
      needAge:'Merci de confirmer que tu as au moins 16 ans.',
      needConsent:'Merci de confirmer ta participation.',
      badCode:'Ce code n’a pas été reconnu.',
      you:'Toi'
    },
    it: {
      room:'Sala d’onore', title:'Classifiche', motto:'Mondo, paese e pittore',
      lead:'Chi porta a termine più capolavori guida la tavola. La partecipazione è facoltativa e il soprannome è pubblico.',
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
      meRank:'Il tuo posto: {n}', meNone:'Ancora senza posto: termina un dipinto dopo l’iscrizione.',
      fine:'Contano solo i dipinti terminati dopo l’iscrizione. Ogni dipinto richiede diversi minuti. Non c’è un account e-mail; il codice è la tua chiave.',
      badNick:'Il soprannome deve avere da 3 a 20 caratteri e non può contenere un indirizzo.',
      taken:'Questo soprannome è già in uso.',
      needAge:'Conferma di avere almeno 16 anni.',
      needConsent:'Conferma di voler partecipare.',
      badCode:'Questo codice non è stato riconosciuto.',
      you:'Tu'
    }
  };

  var host = null;
  var state = { scope: 'world', country: 'CH', painter: 'monet', rows: [], me: null, loading: false, error: null, pane: 'join' };

  function lang(){ return (host && host.lang) || (window.I18N && window.I18N.lang) || 'de'; }
  function T(){ return TX[lang()] || TX.de; }
  function fill(s, v){ return String(s || '').replace(/\{(\w+)\}/g, function (_, k){ return (v && v[k] != null) ? v[k] : ''; }); }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function (c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function apiBase(){
    if (typeof window.MASILANO_LB_API === 'string' && window.MASILANO_LB_API) return String(window.MASILANO_LB_API).replace(/\/$/, '');
    try {
      var q = new URLSearchParams(location.search);
      if (q.get('lbapi')) return q.get('lbapi').replace(/\/$/, '');
      var s = localStorage.getItem('masilano.lb.api');
      if (s) return s.replace(/\/$/, '');
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
      { rank:1, nickname:'Goldpinsel', country:'CH', total:42 },
      { rank:2, nickname:'Seerose', country:'AT', total:37 },
      { rank:3, nickname:'Rheingold', country:'DE', total:33 },
      { rank:4, nickname:'Niesenwind', country:'CH', total:28 },
      { rank:5, nickname:'Alpenlicht', country:'CH', total:21 },
      { rank:6, nickname:'Wasserlilie', country:'DE', total:18 },
      { rank:7, nickname:'Firnklang', country:'AT', total:14 },
      { rank:8, nickname:'Lotusfeder', country:'OTHER', total:11 }
    ],
    painter: {
      monet: [{ rank:1, nickname:'Seerose', country:'AT', count:12 }, { rank:2, nickname:'Goldpinsel', country:'CH', count:9 }, { rank:3, nickname:'Wasserlilie', country:'DE', count:7 }],
      vangogh: [{ rank:1, nickname:'Goldpinsel', country:'CH', count:11 }, { rank:2, nickname:'Rheingold', country:'DE', count:8 }],
      klimt: [{ rank:1, nickname:'Alpenlicht', country:'CH', count:6 }, { rank:2, nickname:'Lotusfeder', country:'OTHER', count:5 }],
      hodler: [{ rank:1, nickname:'Niesenwind', country:'CH', count:8 }, { rank:2, nickname:'Firnklang', country:'AT', count:4 }]
    }
  };

  function mockRows(){
    var P = T();
    if (state.scope === 'painter') {
      var rows = (MOCK.painter[state.painter] || MOCK.painter.monet).slice();
      return { rows: rows, me: mockMe(rows, 'count') };
    }
    var rows = MOCK.world.slice();
    if (state.scope === 'country') rows = rows.filter(function (r){ return r.country === state.country; }).map(function (r, i){ return Object.assign({}, r, { rank: i + 1 }); });
    return { rows: rows, me: mockMe(rows, 'total') };
  }
  function mockMe(rows, field){
    var cred = loadCred();
    if (!cred) return null;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].nickname === cred.nickname) {
        var o = { rank: rows[i].rank, nickname: cred.nickname, country: cred.country || rows[i].country };
        o[field] = rows[i][field];
        return o;
      }
    }
    var empty = { rank: null, nickname: cred.nickname, country: cred.country || 'CH' };
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
      state.rows = m.rows; state.me = m.me; state.loading = false;
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
      else { state.rows = r.body.rows || []; state.me = r.body.me || null; }
      renderHall();
    }).catch(function (){ state.loading = false; state.error = 'error'; state.rows = []; renderHall(); });
  }

  function pics(n){
    var P = T();
    n = Number(n) || 0;
    return n === 1 ? P.picture1 : fill(P.pictures, { n: n });
  }
  function countryLabel(code){
    var P = T();
    return ({ CH: P.ch, AT: P.at, DE: P.deLand, OTHER: P.other })[code] || code;
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
      [['CH', P.ch], ['AT', P.at], ['DE', P.deLand], ['OTHER', P.other]].forEach(function (c){
        html += '<button type="button" class="rl-chip' + (state.country === c[0] ? ' on' : '') + '" data-country="' + c[0] + '">' + esc(c[1]) + '</button>';
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
      var mine = cred && r.nickname === cred.nickname;
      var n = (state.scope === 'painter') ? r.count : r.total;
      html += '<li class="rl-row' + (mine ? ' is-me' : '') + '">' +
        '<span class="rl-rank">' + esc(r.rank) + '</span>' +
        '<span class="rl-who"><span class="rl-nick">' + esc(r.nickname) + (mine ? ' <em>' + esc(P.you) + '</em>' : '') + '</span>' +
        '<span class="rl-land">' + esc(countryLabel(r.country)) + '</span></span>' +
        '<span class="rl-score">' + esc(pics(n)) + '</span></li>';
    });
    html += '</ol>';
    return html;
  }

  function accountHtml(){
    var P = T(), cred = loadCred(), me = state.me;
    if (!enabled()) return '';
    if (!cred) {
      return '<div class="rl-account"><button type="button" class="btn goldcta" data-rl="join">' + esc(P.join) + '</button></div>';
    }
    var rankTx = (me && me.rank) ? fill(P.meRank, { n: me.rank }) : P.meNone;
    return '<div class="rl-account">' +
      '<p class="rl-you">' + esc(fill(P.joinedAs, { n: cred.nickname })) + '</p>' +
      '<p class="rl-myrank">' + esc(rankTx) + '</p>' +
      '<button type="button" class="btn ghost" data-rl="code">' + esc(P.codeTitle) + '</button>' +
      '<button type="button" class="btn ghost rl-remove" data-rl="remove">' + esc(P.remove) + '</button></div>';
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
      '<div class="orn" aria-hidden="true"></div><p class="zf-motto">' + esc(P.motto) + '</p><p class="zf-lead">' + esc(P.lead) + '</p></header>' +
      switcher() + '<div class="rl-tablet">' + listHtml() + '</div>' + accountHtml() + '<p class="zf-fine">' + esc(P.fine) + '</p>';
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
      };
    });
  }

  function joinFields(P, mode){
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
    return '<label class="rl-lab">' + esc(P.nickLabel) + '<input class="rl-field" id="lbNick" maxlength="20" autocomplete="nickname" placeholder="' + esc(P.nickPh) + '"></label>' +
      '<label class="rl-lab">' + esc(P.countryLabel) + '<select class="rl-field" id="lbCountry">' +
      '<option value="CH">' + esc(P.ch) + '</option><option value="AT">' + esc(P.at) + '</option>' +
      '<option value="DE">' + esc(P.deLand) + '</option><option value="OTHER">' + esc(P.other) + '</option></select></label>' +
      '<label class="rl-check"><input type="checkbox" id="lbAge"> <span>' + esc(P.age) + '</span></label>' +
      '<label class="rl-check"><input type="checkbox" id="lbConsent"> <span>' + esc(P.consent) + '</span></label>' +
      '<p class="rl-form-err" hidden></p>' +
      '<div class="btns"><button type="button" class="btn goldcta" data-act="do-join">' + esc(P.start) + '</button>' +
      '<button type="button" class="btn ghost" data-act="close">' + esc(P.cancel) + '</button></div>' +
      '<button type="button" class="rl-link" data-act="to-restore">' + esc(P.haveCode) + '</button>';
  }

  function openJoin(mode){
    var sh = document.getElementById('lbJoin');
    var card = document.getElementById('lbJoinCard');
    if (!sh || !card) return;
    var P = T();
    var titles = { join: P.joinTitle, restore: P.haveCode, 'code-show': P.codeTitle, remove: P.remove };
    var leads = { join: P.joinLead, restore: '', 'code-show': '', remove: '' };
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
    if (host && host.closeSheet) host.closeSheet();
    else {
      var sh = document.getElementById('lbJoin');
      if (sh) sh.classList.add('hidden');
    }
  }
  function showErr(msg){
    var el = document.querySelector('#lbJoinCard .rl-form-err');
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
  }

  function doJoin(){
    var P = T();
    var nick = (document.getElementById('lbNick') || {}).value || '';
    var country = (document.getElementById('lbCountry') || {}).value || 'CH';
    var age = !!(document.getElementById('lbAge') && document.getElementById('lbAge').checked);
    var consent = !!(document.getElementById('lbConsent') && document.getElementById('lbConsent').checked);
    if (!age) { showErr(P.needAge); return; }
    if (!consent) { showErr(P.needConsent); return; }
    nick = nick.trim().replace(/\s+/g, ' ');
    if (nick.length < 3 || nick.length > 20 || /[<>@]|https?:\/\/|www\./i.test(nick)) { showErr(P.badNick); return; }
    if (mockOn()) {
      saveCred({ token: 'MASI-MOCK-GOLD-PINSEL-CODE', player_id: 'mock', nickname: nick, country: country });
      openJoin('code-show');
      loadBoard();
      return;
    }
    call('/register', { method: 'POST', headers: headers(), body: JSON.stringify({ nickname: nick, country: country, age_confirm: true }) })
      .then(function (r){
        if (r.status === 409) { showErr(P.taken); return; }
        if (r.status === 400 && r.body && r.body.error === 'bad_nickname') { showErr(P.badNick); return; }
        if (!r.body || !r.body.ok) { showErr(P.error); return; }
        saveCred({ token: r.body.token, player_id: r.body.player_id, nickname: r.body.nickname, country: r.body.country });
        openJoin('code-show');
        loadBoard();
      }).catch(function (){ showErr(P.error); });
  }

  function doRestore(){
    var P = T();
    var token = ((document.getElementById('lbCodeIn') || {}).value || '').trim().toUpperCase();
    if (!token) { showErr(P.badCode); return; }
    if (mockOn()) {
      saveCred({ token: token, player_id: 'mock', nickname: 'Goldpinsel', country: 'CH' });
      closeJoin(); loadBoard(); return;
    }
    call('/me/restore', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
      .then(function (r){
        if (!r.body || !r.body.ok) { showErr(P.badCode); return; }
        saveCred({ token: token, player_id: r.body.player_id, nickname: r.body.nickname, country: r.body.country });
        closeJoin(); loadBoard();
      }).catch(function (){ showErr(P.error); });
  }

  function doRemove(){
    var P = T();
    var cred = loadCred();
    if (mockOn()) { saveCred(null); closeJoin(); loadBoard(); if (host && host.mtoast) host.mtoast(P.removed); return; }
    if (!cred || !cred.token) { saveCred(null); closeJoin(); loadBoard(); return; }
    call('/me/delete', { method: 'POST', headers: headers(), body: JSON.stringify({ token: cred.token }) })
      .then(function (){
        saveCred(null); closeJoin(); loadBoard();
        if (host && host.mtoast) host.mtoast(P.removed);
      }).catch(function (){ showErr(P.error); });
  }

  function reportComplete(pid){
    if (!pid || !enabled()) return Promise.resolve();
    var cred = loadCred();
    if (!cred || !cred.token) return Promise.resolve();
    var painter = painterOf(pid);
    var started = startedAt(pid) || Date.now();
    if (mockOn()) return Promise.resolve();
    return call('/complete', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ token: cred.token, painting_id: pid, painter_id: painter, started_at: started })
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
    renderEntry(document.getElementById('lbEntryT'));
    var hall = document.getElementById('rankings');
    if (hall && hall.classList.contains('active')) showPage();
  }
  function init(h){ host = h || {}; refresh(); return api; }

  var api = { init: init, refresh: refresh, showPage: showPage, markStart: markStart, reportComplete: reportComplete, enabled: enabled, openJoin: openJoin, loadBoard: loadBoard, painterOf: painterOf };
  window.MASILANO_LB = api;
})();
