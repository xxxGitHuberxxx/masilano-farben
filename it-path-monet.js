// v7.7 Italian path step texts: monet life path.
// Faithful translation of the existing DE/EN. No new facts.
// Letter quotes are translations of the German self-translations
// (except letter 569 / blvdclichy: from Vincent’s own English).
// Citations keep letter numbers, recipients, places and dates.
(function () {
  var P = window.IT = window.IT || {};
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "lazaresignal": {
    "text": [
      "In primo piano stanno i dischi di segnale, dietro il vapore e le case. Monet porta la tecnica della stazione del tutto in avanti.",
      "Il quadro è appeso a Hannover e appartiene alle vedute esterne della serie."
    ],
    "fact": "Il quadro appartiene al Niedersächsisches Landesmuseum Hannover."
  },
  "lazaretrack": {
    "text": [
      "Tra binari e recinti la stazione giace aperta, il fumo sale tra i tetti. Non si sta nella sala, ma sugli impianti.",
      "Con questa serie Monet prende sul serio un motivo della città moderna – tanto sul serio quanto più tardi la luce su un pagliaio."
    ],
    "fact": "Il quadro è appeso nel Pola Museum of Art di Hakone."
  },
  "vethsummer": {
    "text": [
      "In estate Vétheuil giace chiara sulla Senna: case, alberi, la chiesa, l’acqua piena di riflessi. Monet dipinge il villaggio dal lato del fiume.",
      "Dopo gli anni stretti ad Argenteuil, questo è un luogo nuovo, più silenzioso – e per un tempo la casa comune di due famiglie."
    ],
    "fact": "Il quadro del 1880 è appeso nel Metropolitan Museum di New York."
  },
  "vethchurch": {
    "text": [
      "La chiesa di Vétheuil sta ferma tra le case, la torre chiara contro il cielo. Monet la dipinge spesso, in stagioni diverse.",
      "Il villaggio diventa la vita quotidiana: il fiume davanti alla porta, la chiesa in vista, i bambini in casa."
    ],
    "fact": "Questa veduta del 1878 è appesa nelle National Galleries of Scotland di Edimburgo."
  },
  "vethgarden": {
    "text": [
      "Nel giardino di Vétheuil i girasoli stanno alti davanti alla casa, bambini sul sentiero, il cielo è chiaro. Il quadro è chiaro e amichevole.",
      "Nasce nel 1881, due anni dopo la morte di Camille. La vita in casa continua, con Alice e i figli di entrambe le famiglie."
    ],
    "fact": "Il quadro è appeso nella National Gallery of Art di Washington. I girasoli lo rendono uno dei quadri più accessibili di questi anni."
  },
  "lavacourt": {
    "text": [
      "L’inverno del 1879 pesa su Lavacourt, il villaggio di fronte a Vétheuil. Neve, alberi spogli, l’acqua grigia.",
      "A settembre è morta Camille. Monet scrive a Pissarro di non sapere come organizzare la vita con i due figli – e continua a dipingere."
    ],
    "fact": "Il quadro del 1879 si trova in collezione privata. Lavacourt sta immediatamente sull’altra riva della Senna.",
    "quote": {
      "text": "Grazie della Sua lettera e della partecipazione che mi ha espresso; Lei deve in effetti sapere meglio di chiunque quale pena io possa avere. Sono a terra, non so da che parte voltarmi, né come organizzare la mia vita con i miei due figli.",
      "cite": "Lettera a Camille Pissarro, Vétheuil, 26 settembre 1879"
    }
  },
  "lavaseine": {
    "text": [
      "La Senna a Lavacourt è larga, la riva piatta, il cielo aperto. Monet dipinge il fiume anche senza ghiaccio, come una superficie ampia e calma.",
      "Tra Vétheuil e Lavacourt c’è soltanto l’acqua. Molti motivi di questi anni nascono da una riva o dall’altra."
    ],
    "fact": "Il quadro del 1879 si trova in collezione privata."
  },
  "icebreak": {
    "text": [
      "Nel gennaio 1880 si rompe il ghiaccio sulla Senna. Derivano lastroni, le rive sono inondate, alberi stanno nell’acqua. Monet esce e dipinge la débâcle.",
      "È una delle prime serie in cui riprende di nuovo e di nuovo lo stesso motivo, sotto una luce e un tempo mutevoli."
    ],
    "fact": "Questa versione è appesa nell’University of Michigan Museum of Art di Ann Arbor. Monet dipinge il disgelo in una ventina di quadri.",
    "quote": {
      "text": "Abbiamo avuto qui un terribile disgelo, e naturalmente ho cercato di farne qualcosa, che Le mostrerò nel mio prossimo viaggio.",
      "cite": "Lettera a Georges de Bellio, Vétheuil, 8 gennaio 1880"
    }
  },
  "icedebacle": {
    "text": [
      "Di nuovo il disgelo vicino a Vétheuil: lastroni, alberi spogli, un cielo ampio e freddo. Ogni versione cerca una luce diversa.",
      "Ciò che più tardi diventeranno i pagliai e i pioppi comincia già qui: lo stesso motivo, molti stati."
    ],
    "fact": "Questa versione del 1880 appartiene al Musée du Louvre di Parigi."
  },
  "lavesun": {
    "text": [
      "Su Lavacourt tramonta il sole: il cielo arde, il fiume prende il colore, il villaggio giace scuro sulla riva.",
      "Dopo l’inverno gelido Monet dipinge anche la luce più mite. La Senna resta il suo grande tema."
    ],
    "fact": "Il quadro del 1880 si trova in collezione privata."
  },
  "fecampcliff": {
    "text": [
      "La scogliera di Fécamp cade a picco verso il mare, erba in alto, gesso bianco, il mare sotto. Monet viene sulla costa nel marzo 1881 per dipingere marine.",
      "Resta più a lungo del previsto. Il mare gli fa bene, dopo gli anni a Vétheuil."
    ],
    "fact": "Il quadro è appeso nella Aberdeen Art Gallery."
  },
  "fecampsea": {
    "text": [
      "Qui c’è quasi soltanto il mare: onde, schiuma, un cielo a strisce, appena una riva salda. Monet si accosta al frangente.",
      "A Durand-Ruel scrive da Fécamp che sta così bene da voler restare più a lungo."
    ],
    "fact": "Il quadro del 1881 è appeso nel Musée d’art moderne André Malraux di Le Havre, nella città natale di Monet.",
    "quote": {
      "text": "Come Le avevo annunciato, sono venuto per un breve soggiorno in riva al mare, e sto così bene che ho un gran desiderio di restare un po’ più a lungo.",
      "cite": "Lettera a Paul Durand-Ruel, Fécamp, 23 marzo 1881"
    }
  },
  "pourvillelow": {
    "text": [
      "Con la bassa marea la costa di Pourville giace piatta e ampia, l’acqua si ritira, le scogliere stanno nella luce. Monet abita praticamente sul greto.",
      "Dal 1881 al 1883 la famiglia vive per un tempo a Poissy, perché Jean possa andare a scuola. Monet stesso è spesso presso il mare. Ad Alice scrive dalla costa."
    ],
    "fact": "Il quadro del 1882 è appeso nel Cleveland Museum of Art.",
    "quote": {
      "text": "Il paese è molto bello, e rammarico molto di non essere venuto prima, invece di perdere il tempo a Dieppe. Non si può essere più vicini al mare di quanto io lo sia, proprio sul greto, e le onde battono ai piedi della casa.",
      "cite": "Lettera a Alice Hoschedé, Pourville, 15 febbraio 1882"
    }
  },
  "pourvillewalk": {
    "text": [
      "Due donne in bianco stanno sulla scogliera di Pourville, il vento prende gli abiti, il mare giace ben sotto. Sono Alice e sua figlia Blanche.",
      "Il quadro è chiaro e ampio. Monet dipinge le figure piccole contro cielo e mare – e tuttavia del tutto presenti."
    ],
    "fact": "Il quadro è appeso nell’Art Institute of Chicago. Blanche Hoschedé più tardi dipingerà ella stessa e aiuterà Monet nel lavoro."
  },
  "pourvillebeach": {
    "text": [
      "La spiaggia di Pourville è una lunga curva di sabbia, acqua e scogliera. Poche barche, molto cielo.",
      "Monet viene qui ripetutamente nel 1882. Per alcuni anni la costa normanna diventa il suo studio all’aperto."
    ],
    "fact": "Il quadro del 1882 si trova in collezione privata."
  },
  "varensun": {
    "text": [
      "La piccola chiesa di Varengeville sta in alto sulla scogliera, nella luce della sera, davanti a pini e al mare. Il villaggio sta vicino a Dieppe, non lontano da Pourville.",
      "Monet dipinge la chiesa a ore diverse del giorno. Il sole della sera colora la pietra, l’erba e l’acqua."
    ],
    "fact": "Il quadro del 1882 si trova in collezione privata."
  },
  "carimancon": {
    "text": [
      "A Le Havre il giovane Monet disegna caricature di insegnanti e di cittadini. Léon Manchon, un volto noto della città, riceve un naso grande e una barba ancora più grande.",
      "Vende i fogli – spesso per pochi franchi. Il padre dirige una casa di commercio; il figlio vuole disegnare, non diventare commerciante."
    ],
    "fact": "Monet è ancora un adolescente. Le caricature sono i suoi primi lavori che circolano in città e gli procurano un po’ di denaro proprio."
  },
  "caricassin": {
    "text": [
      "Henri Cassinelli, detto «Rufus Croutinelli», è un’altra celebrità locale di cui Monet si prende gioco. La linea è sicura, lo scherno amichevole, ma pertinente.",
      "In questi anni impara a ridurre un volto all’essenziale – molto prima di cercare la luce sull’acqua."
    ],
    "fact": "Molte di queste caricature le conserva oggi l’Art Institute of Chicago. Mostrano un Monet diverso dal pittore successivo delle ninfee."
  },
  "rouelles": {
    "text": [
      "Eugène Boudin, che dipinge la luce sulla spiaggia di Honfleur, persuade il giovane Monet a lavorare davanti alla natura. Nel 1858 nasce questa veduta di Rouelles, vicino a Le Havre.",
      "Uno stagno, pioppi, una figura nell’erba: ancora calmo ed esatto, ma già con il cielo che non lo lascerà più."
    ],
    "fact": "Il quadro è considerato spesso il primo paesaggio conservato di Monet. È firmato e datato 1858."
  },
  "farmnorm": {
    "text": [
      "Dopo il servizio militare in Algeria (1861–1862), Monet torna in Normandia. In questa fattoria stanno mucche presso lo stagno, un uomo e un bambino al lavoro, in alto un cielo ampio.",
      "Il consiglio di Boudin, dipingere all’aperto, dà i suoi frutti. Monet non cerca più soltanto volti, ma fattorie, luce e vita quotidiana."
    ],
    "fact": "Il quadro è appeso oggi nel Musée d’Orsay. Monet lo ha firmato «C. Monet», ancora senza il nome Claude."
  },
  "springfl": {
    "text": [
      "Oltre al paesaggio, Monet pratica la natura morta. Lillà, fiori di ciliegio e primule riempiono il tavolo, osservati con esattezza, quasi festosi.",
      "Ha poco più di vent’anni e vuole dimostrare di essere un pittore serio – non soltanto il caricaturista di Le Havre."
    ],
    "fact": "La natura morta nasce nel 1864. Negli stessi mesi dipinge con Boudin e Jongkind sulla costa."
  },
  "ruebavole": {
    "text": [
      "A Honfleur, non lontano da Le Havre, Monet trova vicoli stretti e un intonaco chiaro. La Rue de la Bavole conduce in profondità; le ombre giacciono fresche sul muro.",
      "Boudin e Jongkind sono vicini. I tre si intendono e vanno insieme davanti alla natura."
    ],
    "fact": "Di questo motivo c’è più di una versione. Quella mostrata qui è appesa a Boston.",
    "quote": {
      "text": "Jongkind e Boudin sono qui, ci intendiamo meravigliosamente e non ci lasciamo più.",
      "cite": "Lettera a Frédéric Bazille, Honfleur, 26 agosto 1864"
    }
  },
  "saintsimeon": {
    "text": [
      "Il sentiero verso la fattoria Saint-Siméon passa attraverso erbe alte e ombra. In alto, tra gli alberi, un pezzo di cielo.",
      "Qui, vicino a Honfleur, Monet scopre ogni giorno motivi nuovi. Vorrebbe dipingere preferibilmente tutto in una volta."
    ],
    "fact": "La fattoria Saint-Siméon era un luogo d’incontro apprezzato di pittori alla foce della Senna.",
    "quote": {
      "text": "Qui, mio caro, è meraviglioso, e ogni giorno scopro cose che sono sempre più belle. Si potrebbe diventare pazzi, tanto voglio dipingere tutto.",
      "cite": "Lettera a Frédéric Bazille, Honfleur, 15 luglio 1864"
    }
  },
  "pavechailly": {
    "text": [
      "Nella primavera del 1865 Monet lavora nella foresta di Fontainebleau, vicino a Chailly. La strada lastricata si allontana sotto alberi alti.",
      "Vuole chiamare Bazille a raggiungerlo: la foresta, dice, è deliziosa. Da queste settimane viene anche il piano della grande Colazione sull’erba."
    ],
    "fact": "Chailly-en-Bière sta al bordo della foresta, a sud di Parigi. Monet torna più tardi spesso nella natura davanti alle porte della città.",
    "quote": {
      "text": "Vieni dunque in fretta a raggiungermi, la foresta è deliziosa.",
      "cite": "Lettera a Frédéric Bazille, Chailly, 28 aprile 1865"
    }
  },
  "bodmeroak": {
    "text": [
      "La grande quercia nella foresta di Fontainebleau porta il nome del disegnatore svizzero Karl Bodmer, che l’ha resa famosa.",
      "Monet dipinge il tronco, il fogliame e il sentiero accanto in un verde vigoroso. La foresta è per lui bottega e motivo al tempo stesso."
    ],
    "fact": "Molti pittori della scuola di Barbizon hanno dipinto la stessa foresta. Monet vi cerca già una luce più chiara e più mossa."
  },
  "lunchstudy": {
    "text": [
      "Per un’enorme Colazione sull’erba, come risposta a Manet, Monet fa posare amici nella foresta. In questo studio siede Frédéric Bazille, l’amico pittore che spesso lo sostiene con denaro e uno studio; accanto a lui sta Camille.",
      "Camille Doncieux è la sua compagna e il suo modello. Senza di lei il grande quadro non sarebbe pensabile."
    ],
    "fact": "Bazille è un amico stretto degli anni di studio a Parigi. Cade nel 1870 nella guerra franco-prussiana."
  },
  "lunchpushkin": {
    "text": [
      "La composizione completa della Colazione sull’erba mostra una compagnia tra gli alberi, apparecchiature nell’erba, e Camille più di una volta nel quadro.",
      "L’enorme originale resta incompiuto e più tardi viene ritagliato. Questa versione a Mosca conserva tutto il pensiero."
    ],
    "fact": "Due frammenti della grande tela sono appesi nel Musée d’Orsay. Monet ha abbandonato l’opera quando non è riuscito a finirla in tempo per il Salon."
  },
  "pointeheve": {
    "text": [
      "Accanto alla foresta, la costa normanna resta il suo tema. Con la bassa marea la Pointe de la Hève resta scoperta: rocce, fanghi, un cielo ampio, piccole figure sulla spiaggia.",
      "Monet mostra il quadro al Salon del 1865 – insieme alla foce della Senna, un successo pubblico precoce."
    ],
    "fact": "La Pointe de la Hève sta vicino a Sainte-Adresse, non lontano da Le Havre, dove Monet è cresciuto."
  },
  "mouthseine": {
    "text": [
      "Navi, nubi e l’acqua ampia della foce della Senna vicino a Honfleur: Monet dipinge il luogo in cui il fiume incontra il mare.",
      "Al Salon del 1865 il quadro viene notato. Il giovane pittore di Le Havre conta all’improvviso come una speranza."
    ],
    "fact": "Honfleur sta di fronte alla città natale, dall’altra parte della foce. Monet torna di nuovo e di nuovo a quest’acqua."
  },
  "greendress": {
    "text": [
      "Camille Doncieux indossa un lungo abito verde e guarda oltre la spalla. Nel 1866 il quadro ha successo al Salon – sotto il titolo «Camille».",
      "La famiglia a Le Havre non vuole saperne della relazione. Camille è modella, compagna e presto la madre di suo figlio."
    ],
    "fact": "Monet ha 25 anni, Camille 19. L’abito verde diventa uno dei quadri noti dei loro primi anni insieme."
  },
  "womengarden": {
    "text": [
      "Nel giardino di Ville-d’Avray quattro donne in abiti chiari stanno tra fiori e ombra. Camille ha posato per parecchie delle figure.",
      "Monet dipinge la grande tela all’aperto. Viene rifiutata dal Salon; più tardi la compra lo Stato."
    ],
    "fact": "Monet ha fatto scavare una fossa per il quadro, affinché potesse raggiungere la zona superiore della tela senza inclinare la tela."
  },
  "steadresse": {
    "text": [
      "Nell’estate del 1867 Monet è a Sainte-Adresse, presso la zia. Camille resta a Parigi; aspetta un figlio. Dal giardino si guarda verso la foce e, oltre le bandiere, verso l’acqua.",
      "La famiglia al parapetto è la sua – padre, zia, cugino –, senza Camille. Scrive a Bazille di essere potuto andare in aiuto della povera Camille, e di quanto sia difficile la situazione."
    ],
    "fact": "L’8 agosto 1867 viene al mondo a Parigi il figlio Jean. Monet non è in modo continuo presso Camille.",
    "quote": {
      "text": "Questo mi ha fatto molto bene e mi ha dato una grande gioia, perché ho potuto aiutare questa povera Camille. Ah, mio caro, che situazione difficile è questa nonostante tutto; lei è molto dolce, di un’indole molto buona.",
      "cite": "Lettera a Frédéric Bazille, Sainte-Adresse, 25 giugno 1867"
    }
  },
  "beachadresse": {
    "text": [
      "Sulla spiaggia di Sainte-Adresse i passeggiatori siedono e camminano, i pescatori lavorano alle barche, il cielo è ampio.",
      "Monet conosce questa spiaggia dall’infanzia. Ora la dipinge nel tempo in cui Camille, a Parigi, aspetta il bambino."
    ],
    "fact": "Sainte-Adresse sta proprio accanto a Le Havre. Da qui, con tempo chiaro, si vede lontano sulla foce della Senna."
  },
  "regattadresse": {
    "text": [
      "Le barche a vela passano davanti a Sainte-Adresse, sulla riva stanno spettatori, l’acqua è disposta in tratti corti e chiari.",
      "Accanto al quadro di famiglia nel giardino, la regata è un quadro dell’ozio presso il mare – chiaro, ventoso, senza patetismo."
    ],
    "fact": "Nel 1867 Monet dipinge parecchie vedute della stessa riva. La luce cambia da un quadro all’altro."
  },
  "greenvave": {
    "text": [
      "Un’onda verde si alza davanti a un mare più scuro, una barca tiene. Monet dipinse il quadro verso il 1866-67, da xilografie giapponesi e dalla propria costa.",
      "Il movimento dell’acqua diventa il motivo principale – molto prima che dipinga a Giverny le ninfee."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum di New York. Il colore dell’acqua è quasi altrettanto vigoroso che in una stampa di Hokusai."
  },
  "luncheon68": {
    "text": [
      "Camille siede alla tavola apparecchiata, il piccolo Jean vicino, un ospite all’ombra del giardino. È un raro quadro della vita quotidiana della famiglia.",
      "Il denaro è scarso, il riconoscimento incerto. Ciò nonostante Monet fissa questo meriggio calmo."
    ],
    "fact": "Il quadro nasce nel 1868, probabilmente a Bennecourt o nelle vicinanze. Un incarico di Madame Gaudibert a Le Havre aiuta la famiglia in quest’anno per un breve periodo."
  },
  "bennecourt": {
    "text": [
      "Sulla riva della Senna a Bennecourt siede Camille, nell’acqua si riflette il villaggio. Jean è ancora un lattante; la famiglia cerca un luogo accessibile in cui vivere.",
      "Il riflesso occupa quasi la metà del quadro. Monet esercita ciò che più tardi sarà la sua forza: l’acqua come seconda immagine del mondo."
    ],
    "fact": "Bennecourt sta a monte di Parigi. Monet vi lavora nel 1868 in difficili condizioni di denaro."
  },
  "magpie": {
    "text": [
      "Nell’inverno del 1868-69 Monet, Camille e Jean sono in Normandia, vicino a Étretat. Su una staccionata davanti alla neve sta una sola gazza.",
      "La neve non è bianca, ma blu, rosa, piena di ombre. Molti contemporanei lo trovano insolito."
    ],
    "fact": "Il quadro appartiene ai paesaggi invernali più silenziosi di Monet. È appeso nel Musée d’Orsay."
  },
  "grenoumet": {
    "text": [
      "La Grenouillère è un bagno e un locale di gita popolari sulla Senna, vicino a Bougival. Monet dipinge il pontile, le barche, l’acqua divenuta luce – accanto a Renoir, che cerca lo stesso motivo.",
      "Chiama egli stesso gli schizzi «cattive pochades» e sogna tuttavia un grande quadro dei bagni."
    ],
    "fact": "Le versioni di Renoir di La Grenouillère sono appese, tra gli altri luoghi, a Stoccolma e a Winterthur. I due amici lavorano nel 1869 spesso l’uno accanto all’altro.",
    "quote": {
      "text": "Ho già un sogno, un quadro, i bagni di La Grenouillère, per il quale ho fatto alcuni cattivi schizzi, ma resta un sogno. Renoir, che ha appena passato due mesi qui, vuole dipingere anche questo quadro.",
      "cite": "Lettera a Frédéric Bazille, Saint-Michel, 25 settembre 1869"
    }
  },
  "grenoulon": {
    "text": [
      "Bagnanti, un pontile, onde corte: Monet compone l’acqua di molte macchie chiare.",
      "Ciò che qui pare ancora uno schizzo diventa la lingua dell’Impressionismo. Renoir sta spesso al suo fianco."
    ],
    "fact": "Questa versione è appesa nella National Gallery di Londra. Va pensata immediatamente accanto ai quadri di Renoir delle stesse settimane."
  },
  "bougivalbr": {
    "text": [
      "Il ponte di Bougival scavalca la Senna, una strada conduce nel quadro, alberi stanno sulla riva.",
      "Monet, Camille e il piccolo Jean abitano nel 1869 a Saint-Michel, del tutto vicini. La vita è stretta e spesso senza denaro."
    ],
    "fact": "Bougival è ben raggiungibile dal centro di Parigi con il treno. Perciò il luogo diventa meta di gita – e motivo."
  },
  "seinebougival": {
    "text": [
      "La Senna a Bougival giace calma, le case e gli alberi si riflettono. È la stessa acqua su cui sta La Grenouillère, soltanto più silenziosa.",
      "Nell’agosto 1869 Monet scrive a Bazille che da otto giorni mancano il pane, il vino, il fuoco e la luce."
    ],
    "fact": "Saint-Michel, vicino a Bougival, è in quest’estate il luogo di abitazione della famiglia. La situazione resta incerta.",
    "quote": {
      "text": "Da otto giorni, niente pane, niente vino, niente fuoco per cucinare, niente luce. È atroce.",
      "cite": "Lettera a Frédéric Bazille, Saint-Michel, 9 agosto 1869"
    }
  },
  "traincountry": {
    "text": [
      "Un treno attraversa il paesaggio ampio, il fumo sta sopra gli alberi, il prato resta verde e calmo.",
      "Il mondo moderno entra nel quadro, senza scacciare la campagna. Monet vede entrambe le cose al tempo stesso."
    ],
    "fact": "Il piccolo quadro è appeso nel Musée d’Orsay. La ferrovia ha reso luoghi come Bougival mete di gita vicine."
  },
  "rochesnoires": {
    "text": [
      "Il 28 giugno 1870 Claude e Camille si sposano a Parigi. Passano l’estate a Trouville, sulla spiaggia e davanti all’Hôtel des Roches Noires.",
      "Le bandiere sbattono nel vento, il balcone giace in controluce. È un tempo breve e chiaro – poi scoppia la guerra."
    ],
    "fact": "L’Hôtel des Roches Noires era una casa distinta sul lungomare di Trouville. Monet lo dipinge dalla terrazza o da un piano superiore."
  },
  "camillebeach": {
    "text": [
      "Camille siede sulla spiaggia di Trouville, in abiti chiari, col cappello in testa, lo sguardo sotto l’ombrellino. La sabbia e il vento sono dipinti in fretta.",
      "Poche settimane più tardi la famiglia va a Londra, lontano dalla guerra franco-prussiana."
    ],
    "fact": "Monet dipinge Camille a Trouville parecchie volte sulla spiaggia. I quadri sono piccoli e immediati, spesso su legno."
  },
  "thameswest": {
    "text": [
      "A Londra Monet dipinge il Tamigi presso Westminster: nebbia, un ponte, le torri del Parlamento come sagome, una barca in primo piano.",
      "La guerra lo ha cacciato dalla Francia. In città incontra il mercante Paul Durand-Ruel, che comincia a comprargli i quadri."
    ],
    "fact": "Anche Pissarro e Daubigny sono in questi mesi a Londra. La nebbia del Tamigi diventa per Monet più tardi, verso il 1900, ancora una volta un grande tema."
  },
  "hydepark": {
    "text": [
      "Hyde Park giace ampio e verde, piccole figure camminano sotto un cielo chiaro. A Londra Monet non cerca soltanto il fiume, ma anche i parchi.",
      "La città è un rifugio, non una patria. Resta soltanto finché durano la guerra e l’inquietudine in Francia."
    ],
    "fact": "Il quadro appartiene alle vedute piuttosto rare di parchi londinesi di Monet dell’inverno 1870-71."
  },
  "poollondon": {
    "text": [
      "The Pool of London, il bacino portuale a valle del London Bridge, è pieno di navi, alberi e di una luce grigia.",
      "Monet trova qui un altro Le Havre: lavoro sull’acqua, foschia e traffico – soltanto sotto un cielo inglese."
    ],
    "fact": "Il quadro è appeso a Cardiff. Mostra con quanta esattezza Monet già nel 1871 legge una città straniera attraverso la sua acqua."
  },
  "meditation": {
    "text": [
      "Camille siede su un divano, un libro in mano, lo sguardo basso. La stanza è silenziosa, la tenda chiara, l’abito scuro.",
      "In terra straniera diventa un centro calmo. Monet non dipinge soltanto il fiume di Londra, ma anche lei."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay. Appartiene ai ritratti più intimi di Camille."
  },
  "boatszaan": {
    "text": [
      "Nella primavera del 1871 Monet non torna subito in Francia. Resta a Zaandam, a nord di Amsterdam, da maggio fino all’autunno.",
      "Le barche giacciono sullo Zaan, di fronte a case colorate. Scrive a Pissarro che qui c’è da dipingere per tutta una vita."
    ],
    "fact": "Camille e Jean sono con lui. Zaandam è in questi mesi una bottega inattesa tra Londra e il ritorno in Francia.",
    "quote": {
      "text": "Zaandam è particolarmente notevole, e qui c’è da dipingere per tutta una vita.",
      "cite": "Lettera a Camille Pissarro, Zaandam, 2 giugno 1871"
    }
  },
  "molenszaan": {
    "text": [
      "I mulini stanno a centinaia lungo lo Zaan, le ali tagliano il cielo, l’acqua porta il loro riflesso.",
      "Monet è entusiasta dei colori delle case e delle barche. Il paesaggio olandese gli pare pittoresco, quasi divertente tanto è ricco di motivi."
    ],
    "fact": "Questo quadro è appeso nel Van Gogh Museum di Amsterdam – un Monet precoce nella casa di Vincent, che allora egli stesso non dipingeva ancora in città.",
    "quote": {
      "text": "Sono qui meravigliosamente per dipingere, è la cosa più divertente che si possa trovare. Case di tutti i colori, mulini a centinaia e barche deliziose.",
      "cite": "Lettera a Camille Pissarro, Zaandam, 17 giugno 1871"
    }
  },
  "achterzaan": {
    "text": [
      "Sull’Achterzaan case strette stanno proprio sull’acqua, un mulino sullo sfondo, il cielo è mosso.",
      "Monet dipinge il lato calmo di Zaandam: l’abitare sul canale, non il rumore del porto."
    ],
    "fact": "Il quadro appartiene al Metropolitan Museum di New York. L’Achterzaan è un braccio laterale dello Zaan."
  },
  "housezaan": {
    "text": [
      "Una casa sta proprio sullo Zaan, acqua riflettente davanti, una facciata tipicamente olandese.",
      "In pochi mesi Monet raccoglie decine di tali vedute. Lavora in fretta, perché il motivo non lo lascia."
    ],
    "fact": "Il quadro è appeso nello Städel Museum di Francoforte. Mostra quanto da vicino Monet si accosti alle case – quasi senza una striscia di riva."
  },
  "canalzaan": {
    "text": [
      "Il canale di Zaandam è uno specchio per nubi, barche e le case verdi e rosate sulla riva.",
      "Proprio questo ha scritto Monet a Pissarro: case di tutti i colori, mulini, barche deliziose."
    ],
    "fact": "Il quadro appartiene alla Sammlung Van Vlissingen ed è visibile a Singer Laren."
  },
  "windzaan": {
    "text": [
      "Parecchi mulini stanno l’uno dietro l’altro sotto un cielo ampio; la terra piatta davanti è verde e umida.",
      "Verso l’autunno del 1871 Monet lascia i Paesi Bassi. La prossima abitazione sarà ad Argenteuil, sulla Senna vicino a Parigi."
    ],
    "fact": "In pochi mesi a Zaandam nasce tutto un gruppo di quadri. Poi la famiglia torna in Francia."
  },
  "artihouse": {
    "text": [
      "Nel dicembre 1871 Monet affitta una casa ad Argenteuil, a ovest di Parigi, vicino alla Senna. Il giardino è in fiore, Jean gioca sulla ghiaia, la facciata è chiara.",
      "Per la prima volta la famiglia ha un giardino proprio. Camille e Jean appartengono saldamente a questi quadri."
    ],
    "fact": "Argenteuil è raggiungibile in fretta da Parigi con il treno. Monet resta qui fino al 1878."
  },
  "artigarden": {
    "text": [
      "Le dalie e i fiori alti riempiono il giardino di Argenteuil, un sentiero conduce al pergolato, il cielo è leggero.",
      "Monet dipinge la casa non soltanto dall’esterno, ma le aiuole in cui la famiglia passa l’estate."
    ],
    "fact": "Il quadro è appeso nella National Gallery of Art di Washington. Il giardino diventa in questi anni uno dei suoi motivi più importanti."
  },
  "hobbyhorse": {
    "text": [
      "Il piccolo Jean, nel 1872 di circa cinque anni, siede fiero su un cavallo a bastone nel giardino. Dietro di lui le aiuole e la siepe.",
      "Monet dipinge il figlio senza posa, come parte della vita quotidiana ad Argenteuil. È un quadro chiaro, quasi privato."
    ],
    "fact": "Jean Monet nasce nel 1867. Più tardi, a Giverny, lui e i suoi fratellastri tengono con il padre la casa."
  },
  "autumneff": {
    "text": [
      "In autunno la Senna ad Argenteuil sta in oro e in rosa. Gli alberi sulla riva si colorano, l’acqua prende ogni tinta.",
      "Monet trova qui il motivo che non lo lascia più: il fiume come specchio della stagione."
    ],
    "fact": "Il quadro è appeso nella Courtauld Gallery di Londra. Il 1873 è uno degli anni più fecondi presso il fiume."
  },
  "redkerchief": {
    "text": [
      "Attraverso le porte-finestre della casa di Argenteuil si vede Camille nella neve, un fazzoletto rosso intorno alla testa. Dentro è caldo, fuori freddo e chiaro.",
      "Il viso è posto soltanto in pochi tratti. Ciò nonostante la si riconosce subito."
    ],
    "fact": "Il quadro è appeso a Cleveland. Unisce la casa familiare all’aria invernale davanti al vetro."
  },
  "argbridge": {
    "text": [
      "Il ponte stradale di Argenteuil scavalca la Senna, le barche a vela giacciono davanti, il cielo è morbido.",
      "Monet dipinge il ponte parecchie volte, a luci diverse. Il fiume davanti alla porta di casa diventa bottega."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay. Il ponte era stato ricostruito dopo la guerra e apparteneva al volto moderno del luogo."
  },
  "poppies": {
    "text": [
      "Attraverso un prato estivo vicino ad Argenteuil camminano una donna e un bambino, probabilmente Camille e Jean. A sinistra i papaveri splendono con particolare densità.",
      "Il quadro è appeso nel 1874 alla prima mostra degli impressionisti. È uno dei quadri più amichevoli di questi anni."
    ],
    "fact": "Il campo di papaveri appartiene ai quadri più noti di Monet ed è appeso nel Musée d’Orsay."
  },
  "sunrise": {
    "text": [
      "Nel 1872 Monet dipinge nel porto di Le Havre il levar del sole: barche nella foschia, gru, fumo e un sole arancio che si riflette nell’acqua.",
      "Due anni più tardi, proprio questo quadro dà il nome a tutto un movimento. Un critico si fa beffe del titolo «Impressione» – e il nome resta."
    ],
    "fact": "Il quadro è appeso nel Musée Marmottan Monet di Parigi. Monet lo ha dipinto nella sua città natale, non ad Argenteuil, sebbene vi abitasse."
  },
  "capucines": {
    "text": [
      "Da un balcone si vede il Boulevard des Capucines: carrozze, passanti, alberi, tutto in un tratto corto e vibrante.",
      "Proprio in una casa di questo viale, nello studio del fotografo Nadar, ha luogo nel 1874 la prima mostra del gruppo. Il quadro stesso è appeso là."
    ],
    "fact": "Ci sono due versioni del viale. Questa mostrata qui è appesa a Kansas City; un’altra nel Museo Puškin di Mosca."
  },
  "railbridge": {
    "text": [
      "Il ponte ferroviario di Argenteuil sta su alti pilastri nel fiume; un treno potrebbe arrivare in qualsiasi momento, le vele scivolano sotto.",
      "La tecnica e l’ozio si dividono lo stesso fiume. Monet non vede in ciò un motivo di conflitto, ma di luce."
    ],
    "fact": "Accanto al ponte stradale, il ponte ferroviario è la seconda grande costruzione di Argenteuil. Monet dipinge entrambi parecchie volte."
  },
  "argbassin": {
    "text": [
      "Dal cammino del ponte si vede il bacino di Argenteuil: barche, la riva di fronte, un cielo morbido.",
      "Monet lavora spesso dalla riva o, più tardi, dalla barca-studio. Il fiume sta praticamente davanti alla porta."
    ],
    "fact": "Questa veduta è appesa nel Museo prefetturale di Mie, in Giappone. Argenteuil era negli anni 1870 un luogo apprezzato per gli sport acquatici."
  },
  "studioboat": {
    "text": [
      "Una barca adattata diventa uno studio galleggiante. Monet vi siede e dipinge il fiume all’altezza degli occhi, le rive scivolano.",
      "L’idea risale a Daubigny. Ad Argenteuil Monet ne fa il suo strumento."
    ],
    "fact": "Il quadro è appeso nel Kröller-Müller Museum di Otterlo. Dalla barca nascono molti dei quadri di fiume di questi anni."
  },
  "regattaarg": {
    "text": [
      "Alla regata di Argenteuil le vele stanno come superfici di colore sull’acqua, la riva è vicina, il giorno è chiaro.",
      "Monet ama queste feste sul fiume. Gli danno movimento, riflesso e compagnia in un solo quadro."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay e nasce nel 1872, nel primo anno intero ad Argenteuil."
  },
  "parasol": {
    "text": [
      "Nel 1875 Camille sta su un’altura, l’ombrellino contro la luce, il piccolo Jean accanto a lei. Vista dal basso, davanti al cielo che soffia, pare quasi senza peso.",
      "Il quadro viene subito dopo la prima mostra impressionista. Chiude questa prima parte: la famiglia nella luce, ancora ad Argenteuil, prima che il cammino prosegua."
    ],
    "fact": "Monet riprende più tardi il motivo ancora una volta, con Alice Hoschedé, la sua seconda moglie. Camille muore nel 1879 a Vétheuil."
  },
  "japonaise": {
    "text": [
      "Camille indossa un uchikake rosso, un ventaglio in mano, circondata da ventagli giapponesi alla parete. Monet la dipinge nel 1876, in figura intera, quasi al naturale.",
      "Il quadro è un omaggio alla moda del Giappone di allora a Parigi – e un ritratto di sua moglie, festoso e estraneo al tempo stesso."
    ],
    "fact": "Il quadro è appeso nel Museum of Fine Arts di Boston. Monet lo mostra nel 1876 alla seconda mostra degli impressionisti."
  },
  "roundbed": {
    "text": [
      "Nel giardino di Argenteuil sta un’aiuola rotonda piena di fiori, densa e colorata, dietro una staccionata. L’aria è estiva, il colore vigoroso.",
      "Monet dipinge il giardino di nuovo e di nuovo: non come decorazione, ma come un motivo in cui luce e crescita si congiungono."
    ],
    "fact": "Il quadro appartiene al Detroit Institute of Arts e nasce nel 1876, negli anni successivi di Argenteuil."
  },
  "turkeys": {
    "text": [
      "Tacchini bianchi corrono su un prato soleggiato, sullo sfondo un château e alberi. Il quadro è un pannello decorativo per Ernest Hoschedé, dipinto al Château de Rottembourg a Montgeron.",
      "Hoschedé è collezionista e mecenate – ancora. Poco più tardi crolla la sua fortuna. Le famiglie Monet e Hoschedé si avvicineranno a Vétheuil."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay. Appartiene a una serie di pannelli decorativi che Hoschedé commissiona a Monet nel 1876."
  },
  "parkmonceau": {
    "text": [
      "Nel Parc Monceau a Parigi le figure stanno all’ombra di alberi alti, la luce cade a macchie sul sentiero. Monet dipinge il parco cittadino più di una volta.",
      "Tra Argenteuil e gli incarichi a Montgeron, Parigi resta vicina: un breve cammino nel parco, un quadro del verdore in città."
    ],
    "fact": "Questa versione del 1878 è appesa nel Metropolitan Museum di New York. Una versione precedente nasce già nel 1876."
  },
  "tuileries": {
    "text": [
      "Da un punto di vista alto si vede il giardino delle Tuileries: viali, aiuole, la città nella foschia. Monet tratta Parigi come un paesaggio, non come una scena di strada.",
      "Il quadro nasce nel 1876 e resta uno studio in verde, luce e ampiezza, dipinto nella città in cui è nato."
    ],
    "fact": "Il quadro è appeso nel Musée Marmottan Monet di Parigi, nella fondazione proveniente dal possesso di Monet stesso."
  },
  "montgeronpond": {
    "text": [
      "Presso lo stagno di Montgeron stanno alberi alti, l’acqua è scura e silenziosa, le ninfee già si accennano. Anche questo è uno dei pannelli per Hoschedé.",
      "Nel gennaio 1878 la famiglia deve lasciare Argenteuil. I debiti non sono pagati; il prossimo luogo sarà Vétheuil."
    ],
    "fact": "Il quadro appartiene all’Ermitage di San Pietroburgo. Nasce verso il 1876 per il château di Montgeron.",
    "quote": {
      "text": "Tra due giorni, cioè dopodomani, dobbiamo lasciare Argenteuil: per questo i debiti devono essere pagati.",
      "cite": "Lettera a Georges de Bellio, martedì, 15 gennaio 1878"
    }
  },
  "montorgueil": {
    "text": [
      "Il 30 giugno 1878 Parigi è coperta di bandiere: una festa dell’anno dell’Esposizione universale. Monet si pone nella Rue Montorgueil e dipinge la strada come una pioggia di rosso, bianco e blu.",
      "La famiglia non abita più allora ad Argenteuil. Monet viene in città per la festa e porta con sé il movimento, non le facciate."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay. Un quadro gemello mostra la Rue Saint-Denis lo stesso giorno."
  },
  "lazareorsay": {
    "text": [
      "Sotto il tetto di vetro della Gare Saint-Lazare il vapore sta come una nube nella stazione. Treni, figure, l’armatura di ferro – Monet dipinge la città moderna dall’interno.",
      "Nel gennaio 1877 affitta uno studio in rue Moncey, del tutto vicino. In poche settimane nasce tutta una serie."
    ],
    "fact": "Questo quadro è appeso nel Musée d’Orsay. Parecchie vedute della stazione Monet le mostra nel 1877 alla terza mostra degli impressionisti.",
    "quote": {
      "text": "Sono all’incirca sistemato, 17, rue Moncey. Se potete riservare un momento domani o dopodomani, sono là da mezzogiorno alle quattro e mezzo.",
      "cite": "Lettera a Georges Charpentier, Paris, 17 gennaio 1877"
    }
  },
  "lazarenormand": {
    "text": [
      "Arriva il treno dalla Normandia: locomotiva, vapore, la luce sotto il tetto. Monet conosce bene questa linea – conduce a Le Havre, alla sua giovinezza.",
      "Non dipinge l’orario, ma il momento in cui il vapore riempie la sala."
    ],
    "fact": "Il quadro è appeso nell’Art Institute of Chicago e appartiene ai più noti della serie di Saint-Lazare."
  },
  "lazareout": {
    "text": [
      "Da fuori si vedono le sale, i binari, il fumo davanti alle case. La stazione non è più uno spazio chiuso, ma parte della città.",
      "Monet cambia il punto di vista, come più tardi con i pagliai e i pioppi: lo stesso motivo, un’altra luce, un altro lato."
    ],
    "fact": "Il quadro del 1877 si trova in collezione privata. Mostra la stazione dal lato dei binari, non dalla sala."
  },
  "lazaresun": {
    "text": [
      "Al sole il vapore diventa chiaro, quasi bianco, gli edifici dietro si dissolvono. Monet cerca l’effetto, non l’architettura.",
      "La serie è breve e densa: dentro, fuori, arrivo, segnali, binari – tutto nello stesso inverno e primavera del 1877."
    ],
    "fact": "Il quadro del 1877 si trova in collezione privata. Il titolo nomina espressamente l’effetto di sole."
  },
  "manneporte": {
    "text": [
      "La Manneporte è il grande arco di roccia di Étretat. Monet si pone vicino, davanti: l’arco riempie quasi il quadro, sotto il mare.",
      "Courbet ha reso famoso lo stesso scoglio. Monet lo sa e lo vuole ciò nonostante – ma in un altro modo."
    ],
    "fact": "Il quadro del 1883 è appeso nel Metropolitan Museum di New York."
  },
  "etretatcliff": {
    "text": [
      "La scogliera d’Aval a Étretat entra nel mare come un ago e un arco. Monet la dipinge di nuovo nel 1885, due anni dopo il primo, audace tentativo.",
      "Già nel 1883 scrive ad Alice di voler fare una grande tela della scogliera, sebbene Courbet l’abbia dipinta in modo ammirevole."
    ],
    "fact": "Il quadro del 1885 è appeso nell’Israel Museum di Gerusalemme.",
    "quote": {
      "text": "Conto di fare una grande tela della scogliera di Étretat, sebbene da parte mia sia terribilmente audace farlo dopo Courbet, che l’ha fatta in modo ammirevole; ma cercherò di farla in un altro modo.",
      "cite": "Lettera a Alice Hoschedé, Étretat, 1 febbraio 1883"
    }
  },
  "bordighera": {
    "text": [
      "A Bordighera, sulla Riviera italiana, palme e case stanno sotto un cielo chiaro, il mare luccica tra gli alberi. Monet viene nel 1884 su incarico di Durand-Ruel.",
      "La luce del sud è nuova per lui. Dapprima non sa da che parte guardare, e consuma molta tinta."
    ],
    "fact": "Il quadro è appeso nell’Art Institute of Chicago.",
    "quote": {
      "text": "Sono sistemato in un paese da fiaba. Non so da che parte guardare prima, tutto è splendido, e vorrei fare tutto; perciò consumo e sperpero molta tinta, perché ci sono prove da fare.",
      "cite": "Lettera a Théodore Duret, Bordighera, 2 febbraio 1884"
    }
  },
  "villabord": {
    "text": [
      "Ville stanno tra palme, sopra una cresta viola di colline. Bordighera pare un giardino presso il mare.",
      "Monet resta per tutto l’inverno. Manda quadri a Parigi e si lagna che il motivo è difficile – e splendido."
    ],
    "fact": "Il quadro del 1884 è appeso nel Musée d’Orsay."
  },
  "palmtrees": {
    "text": [
      "Le palme riempiono quasi tutta la superficie, tra di esse una striscia di mare e montagne lontane. Monet si accosta alle piante tanto da vicino quanto più tardi alle ninfee.",
      "La Riviera gli dà una tavolozza nuova: rosa, turchese, un verde diverso."
    ],
    "fact": "Il quadro del 1884 è appeso nel Metropolitan Museum di New York."
  },
  "morenogard": {
    "text": [
      "Nel giardino della Villa Moreno si affollano palme, agavi, sentieri all’ombra. Monet può dipingere il giardino privato, uno dei mondi vegetali più ricchi di Bordighera.",
      "Non cerca la passeggiata, ma l’interno del verdore."
    ],
    "fact": "Il quadro del 1884 si trova in collezione privata."
  },
  "antibes": {
    "text": [
      "Antibes giace dorata davanti alle Alpi lontane, spesso ancora coperte di neve, il mare è chiaro. Nel 1888 Monet torna al Mediterraneo, questa volta dal lato francese.",
      "Di nuovo il tema è la luce: non solo la cinta della città, ma l’aria sopra."
    ],
    "fact": "Il quadro del 1888 appartiene alla Sammlung Pérez Simón."
  },
  "antibesfort": {
    "text": [
      "Il forte di Antibes sta sul promontorio, fermo e piccolo contro l’acqua aperta. Monet tiene la distanza e lascia molto cielo e mare.",
      "I quadri di Antibes nascono in pochi mesi, come una serie sciolta di punti di vista e ore del giorno."
    ],
    "fact": "Il quadro del 1888 si trova in collezione privata."
  },
  "pyramids": {
    "text": [
      "Le piramidi di roccia di Port-Coton stanno come aghi nell’Atlantico, il mare si rompe su di esse, il sole è sulla schiuma.",
      "Nel 1886 Monet lavora per settimane a Belle-Île, a Kervilahouen. La costa è più selvaggia di quella della Normandia."
    ],
    "fact": "Il quadro del 1886 si trova in collezione privata."
  },
  "pyramids2": {
    "text": [
      "La stessa costa, un’altra ora: le piramidi di Port-Coton ancora una volta, la schiuma diversa, la luce più fredda o più densa.",
      "Monet dipinge gli aghi in parecchie versioni. Il motivo sta fermo; il tempo no."
    ],
    "fact": "Questa versione è appesa nel Museo Puškin di Mosca."
  },
  "belleilestorm": {
    "text": [
      "Una tempesta incontra la costa di Belle-Île: acqua scura, schiuma bianca, le rocce pesanti e vicine. Monet resta nel tempo.",
      "Ad Alice scrive che il mare è di una bellezza particolare, le rocce un accumulo di grotte, punte e aghi."
    ],
    "fact": "Il quadro del 1886 è appeso nel Musée d’Orsay.",
    "quote": {
      "text": "È splendido, ma così diverso dalla Manica che devo familiarizzarmi con questa natura; il mare è di una bellezza del tutto particolare, e le rocce sono un accumulo di grotte, punte e aghi straordinari.",
      "cite": "Lettera a Alice Hoschedé, Kervilahouen, 18 settembre 1886"
    }
  },
  "lionrock": {
    "text": [
      "La roccia del Leone di Port-Coton giace nell’acqua come un animale. Monet prende la forma da vicino, il mare intorno inquieto.",
      "Come scrive, deve prima familiarizzarsi con questa natura: è diversa dalla Manica."
    ],
    "fact": "Il quadro del 1886 è appeso nel Fitzwilliam Museum di Cambridge."
  },
  "portdomois": {
    "text": [
      "A Port-Domois le rocce cadono a picco, l’acqua è di un blu profondo e viola, l’inquadratura è stretta. Monet cerca il drammatico della costa.",
      "Molti di questi quadri nascono in rapida successione, spesso col vento, dallo stesso sentiero costiero."
    ],
    "fact": "Il quadro del 1886 è appeso nel Cincinnati Art Museum."
  },
  "portgoulphar": {
    "text": [
      "Port-Goulphar è una cala tra rocce, l’acqua sotto verde e inquieta. Monet torna a questo motivo ancora una volta nel 1887.",
      "Anche qui conta meno il nome del luogo che il rapporto di pietra, mare e luce."
    ],
    "fact": "Il quadro del 1887 è appeso nella Art Gallery of New South Wales di Sydney."
  },
  "rapidscreuse": {
    "text": [
      "La Petite Creuse si precipita su pietre a Fresselines, l’acqua è chiara, le rive scure. Monet lavora nel 1889 in questa valle fluviale, all’interno.",
      "Dopo il mare e la Riviera, la Creuse è aspra e stretta. Resta ciò nonostante e dipinge il fiume di nuovo e di nuovo."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum di New York."
  },
  "valleycreuse": {
    "text": [
      "La valle della Creuse si apre tra colline, il fiume giace in basso, i pendii sono spogli o scarsamente coperti.",
      "Monet non cerca qui l’idillio. Il paese è aspro, la luce cambia in fretta."
    ],
    "fact": "Il quadro del 1889 si trova in collezione privata."
  },
  "ravincreuse": {
    "text": [
      "Le gole della Creuse conducono lo sguardo in profondità, il fiume splende come un nastro. La valle pare chiusa, quasi severa.",
      "A Reims è appesa una delle versioni più chiare di questo motivo."
    ],
    "fact": "Il quadro del 1889 è appeso nel Musée des Beaux-Arts di Reims."
  },
  "creusegrey": {
    "text": [
      "Con tempo grigio le case sulla Creuse giacciono smorzate sul pendio, il colore indietreggia, la forma resta.",
      "Monet riprende la stessa valle al sole e sotto la nuvolosità – un altro passo verso la serie successiva."
    ],
    "fact": "Il quadro del 1889 si trova in collezione privata."
  },
  "creusesun": {
    "text": [
      "Lo stesso paese alla luce del sole: pendii più caldi, un fiume più chiaro, le case più nitide. La differenza dal tempo grigio è tutto il quadro.",
      "Nel 1889 Monet torna da Fresselines a Giverny. Le prossime grandi serie nasceranno davanti alla propria porta."
    ],
    "fact": "Il quadro del 1889 si trova in collezione privata."
  },
  "bargiverny": {
    "text": [
      "Alice e i bambini siedono in una barca norvegese sul braccio dell’Epte a Giverny, vestiti di colori chiari, l’acqua di un verde scuro intorno a loro.",
      "Nella primavera del 1883 Monet ha affittato la casa di Giverny. Scrive a Pissarro di essere molto contento di essere qui. La famiglia lo segue; la casa diventa la patria."
    ],
    "fact": "Il quadro del 1887 è appeso nel Musée d’Orsay. Mostra la vita in comune, pochi anni dopo l’arrivo.",
    "quote": {
      "text": "Sono molto contento di essere qui, un paese splendido.",
      "cite": "Lettera a Camille Pissarro, Giverny, giugno 1883"
    }
  },
  "springgiverny": {
    "text": [
      "La primavera a Giverny è morbida e verde: alberi in fiore, un prato ampio, un cielo chiaro. Monet dipinge il paese che ha scelto nel 1883.",
      "Presto comprerà la casa. Il giardino che pianta sarà più tardi famoso nel mondo – qui è ancora, soprattutto, paesaggio."
    ],
    "fact": "Il quadro del 1890 è appeso nel Clark Art Institute di Williamstown."
  },
  "haystacks": {
    "text": [
      "Due pagliai stanno a mezzogiorno nel campo a Giverny, fermi e semplici, la luce chiara sulle superfici.",
      "Dal 1890 Monet dipinge gli stessi pagliai a molte ore e con molti tempi. Il motivo è modesto; la luce non lo è."
    ],
    "fact": "Questo quadro del 1890 è appeso nella National Gallery of Australia di Canberra e appartiene già alla famosa serie delle Meules."
  },
  "hayendsummer": {
    "text": [
      "Gli stessi pagliai, un altro momento: la fine dell’estate, un cielo più morbido, il colore un po’ più maturo. Monet lavora a parecchie tele al tempo stesso.",
      "Nel 1891 Durand-Ruel espone un gruppo dei pagliai. Il successo è grande – e conferma il cammino della serie."
    ],
    "fact": "Il quadro del 1891 è appeso nel Musée d’Orsay."
  },
  "poplarepte": {
    "text": [
      "Pioppi stanno sull’Epte, snelli e regolari, con i loro riflessi nell’acqua. Monet li dipinge nel 1891 come una serie propria.",
      "Gli alberi devono essere abbattuti. Monet fa in modo che restino in piedi finché non ha finito."
    ],
    "fact": "Il quadro è appeso nelle National Galleries of Scotland di Edimburgo."
  },
  "poplarwind": {
    "text": [
      "Il vento passa tra i pioppi: le chiome si inclinano, il riflesso trema. Lo stesso viale, un altro giorno.",
      "Come con i pagliai, Monet mostra che un motivo basta, se la luce cambia."
    ],
    "fact": "Il quadro del 1891 è appeso nel Musée d’Orsay."
  },
  "poplarphila": {
    "text": [
      "Di nuovo i pioppi, in una luce più calda e più dorata. I tronchi dividono la superficie come una griglia.",
      "Con i pagliai e i pioppi si chiude questa parte. Davanti a Monet restano il giardino, le ninfee, Londra e Venezia."
    ],
    "fact": "Il quadro del 1891 è appeso nel Philadelphia Museum of Art."
  },
  "rouensun": {
    "text": [
      "La facciata ovest sta alla luce del sole: pietra chiara, ombre profonde nei portali, le torri si dissolvono in colore.",
      "Monet non dipinge la cattedrale come un rilievo dell’edificio, ma come luce sulla pietra. Riprenderà la stessa facciata con tempo grigio, al mattino e alla sera."
    ],
    "fact": "Il quadro del 1894 è appeso nella National Gallery of Art di Washington."
  },
  "rouenwest": {
    "text": [
      "La stessa facciata ovest, un altro giorno: la luce è più fredda, l’articolazione dei portali resta, il colore cambia.",
      "A Rouen Monet lavora a parecchie tele al tempo stesso e le cambia quando l’ora volge."
    ],
    "fact": "Anche questo quadro del 1894 è appeso nella National Gallery of Art di Washington."
  },
  "rouengrey": {
    "text": [
      "Con tempo grigio il portale diventa pesante e argenteo. La facciata resta; manca la luce del sole.",
      "Questa versione nasce già nel 1892, nella prima campagna. Monet scrive ad Alice che la cattedrale al sole è ammirevole – e che lavoro è."
    ],
    "fact": "Il quadro del 1892 è appeso nel Musée d’Orsay di Parigi.",
    "quote": {
      "text": "Mi sono messo al lavoro, alla mia nuova finestra, dove sono molto comodamente sistemato. La cattedrale al sole è ammirevole; ne ho cominciate due.",
      "cite": "Lettera a Alice Hoschedé, Rouen, 25 febbraio 1892"
    }
  },
  "rouenportal": {
    "text": [
      "Il portale riempie la superficie: archi, trafori, un soffio di sole sulla pietra. Monet si accosta.",
      "Nel 1894 data parecchie di queste facciate. A quel punto la serie è già ben avanzata."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum di New York."
  },
  "rouenmorn": {
    "text": [
      "Al mattino, accanto alla facciata, compare la Tour d’Albane, la luce è ancora fredda e bluastra.",
      "Monet non fissa soltanto il portale, ma anche la torre laterale – la stessa cattedrale, un altro ritaglio."
    ],
    "fact": "Il quadro del 1894 è appeso nel Museum of Fine Arts di Boston."
  },
  "rouengetty": {
    "text": [
      "Nella luce del mattino il portale è blu e rosa, la pietra pare morbida. Il sole non ha ancora del tutto preso la facciata.",
      "Anche questa versione è del 1894. La serie mostra che un motivo basta, se la luce cambia."
    ],
    "fact": "Il quadro è appeso nel J. Paul Getty Museum di Los Angeles."
  },
  "rouenharmonia": {
    "text": [
      "In pieno sole il portale e la Tour Saint-Romain diventano un’armonia in blu e oro. La pietra splende, le ombre sono profonde.",
      "Nel 1895 Durand-Ruel mostra a Parigi un gruppo delle cattedrali. Il successo conferma il cammino della serie – quello che Monet aveva già preso con i pagliai e i pioppi."
    ],
    "fact": "Il quadro del 1893 porta il soprannome Armonia in blu e oro. Mostra il portale e la Tour Saint-Romain al sole."
  },
  "sandvsnow": {
    "text": [
      "Case di Sandvika giacciono nella neve, un piccolo ponte attraversa il ruscello, le colline dietro sono scure.",
      "Nel 1895 Monet arriva in un paese che gli è nuovo: neve, freddo, una luce diversa da quella di Giverny."
    ],
    "fact": "Il quadro del 1895 è appeso nel Museo nazionale d’arte della Lettonia a Riga."
  },
  "kolsaas": {
    "text": [
      "Il Mont Kolsaas giace come un dorso scuro nella neve, il cielo è pallido. Monet pone il monte in modo scarno e fermo.",
      "Il monte lo dipinge in parecchie versioni, con tempi diversi, come prima la cattedrale."
    ],
    "fact": "Il quadro del 1895 è appeso nel Musée Marmottan Monet di Parigi.",
    "quote": {
      "text": "Solo due parole, perché Lei sia tranquillo quanto alla mia sorte, e non creda che io sia morto di freddo. Sono incantato di tutto ciò che vedo in questo meraviglioso paese. Ho fatto escursioni di quattro giorni in slitta, sulle montagne, sui fiordi, sui laghi – è meraviglioso!",
      "cite": "Lettera a Gustave Geffroy, Sandviken presso Christiania, 26 febbraio 1895"
    }
  },
  "kolsaas2": {
    "text": [
      "La stessa altura alla sera: il monte si oscura, la neve prende un po’ di colore, il giorno declina.",
      "A Geffroy Monet scrive di gite in slitta sulle montagne e sui fiordi – e di aver cominciato a dipingere."
    ],
    "fact": "Il quadro del 1895, «Mont Kolsaas alla sera», si trova in collezione privata."
  },
  "fjordoslo": {
    "text": [
      "Il fiordo vicino a Christiania giace ampio e silenzioso, isole e rive sono sotto la neve, l’acqua è grigio-verde.",
      "Monet resta soltanto settimane in Norvegia. I quadri di questo viaggio sono pochi – e appartengono ai più insoliti della sua opera."
    ],
    "fact": "Il quadro del 1895 si trova in collezione privata."
  },
  "fjordbank": {
    "text": [
      "Dalla riva il fiordo appare come una superficie chiara di ghiaccio e acqua, le alture lontane sono pallide.",
      "Poi Monet torna a Giverny. Il prossimo grande motivo giace di nuovo davanti alla propria porta: la Senna al mattino."
    ],
    "fact": "Anche questo quadro del 1895 si trova in collezione privata."
  },
  "mornseine": {
    "text": [
      "Salici pendono sul fiume, l’acqua è verde e lattiginosa, il mattino non è ancora chiaro. Il riflesso e la riva passano l’uno nell’altra.",
      "Monet cerca il fiume all’alba, spesso nella nebbia, prima che il sole fissi le forme."
    ],
    "fact": "Il quadro, datato 1898, è appeso nel Museo nazionale d’arte occidentale di Tokyo."
  },
  "mornmet": {
    "text": [
      "Lo stesso tratto di fiume, una luce più aperta: il cielo si riflette come una via chiara nell’acqua, gli alberi stanno su entrambe le rive.",
      "Nel 1897 nasce tutto un gruppo di tali quadri del mattino. Il motivo resta; l’ora no."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum di New York."
  },
  "mornbeau": {
    "text": [
      "Con bel tempo il mattino diventa più chiaro: più cielo, un riflesso più fermo, gli alberi si staccano più nettamente.",
      "Anche qui Monet resta nello stesso luogo. La differenza sta nella luce, non nel posto."
    ],
    "fact": "Il quadro del 1897 appartiene alla collezione della Casa Bianca di Washington."
  },
  "mornw1436": {
    "text": [
      "1896, uno stato precoce della serie: l’acqua è violetto-blu, il riflesso argenteo, le rive ancora nel crepuscolo.",
      "Monet comincia i quadri del mattino sulla Senna, prima di proseguirli l’anno dopo."
    ],
    "fact": "Il quadro del 1896 si trova in collezione privata."
  },
  "mornw1484": {
    "text": [
      "Di nuovo il braccio del fiume vicino a Giverny, 1897: nebbia e riflesso, gli alberi come masse scure, l’acqua come luce.",
      "Poco dopo Monet si volge al giardino che sta allestendo dietro la casa – e al ponte giapponese sopra il nuovo stagno."
    ],
    "fact": "Il quadro del 1897 si trova in collezione privata."
  },
  "japabridge": {
    "text": [
      "Il ponte di un verde pallido si curva sullo stagno, sotto foglie di ninfea e un po’ di cielo nell’acqua.",
      "Nel 1899 Monet dipinge questo ponte in parecchie versioni. Diventa l’emblema del suo giardino."
    ],
    "fact": "Il quadro del 1899 è appeso nella National Gallery of Art di Washington.",
    "quote": {
      "text": "È un bacino d’acqua che ho allestito io stesso circa quindici anni fa; questo bacino di circa 200 metri di perimetro è alimentato da un braccio del fiume Epte; è orlato di iris e di diverse piante acquatiche, in una cornice di alberi diversi, in cui però predominano i pioppi e i salici, tra cui parecchi salici piangenti. Proprio in questo luogo ho già dipinto le ninfee con un ponte in stile giapponese.",
      "cite": "Lettera a Roger Marx, Giverny, 1 giugno 1909"
    }
  },
  "lilybridge": {
    "text": [
      "Di nuovo il ponte, più densamente preso nel verde, le ninfee più vicine, la riva quasi chiusa.",
      "Anche questa versione nasce verso il 1899. Il motivo è lo stesso, il ritaglio più stretto, il colore più saturo."
    ],
    "fact": "Il quadro è appeso nel Princeton University Art Museum."
  },
  "lilypondnl": {
    "text": [
      "Il ponte sta chiaro e pallido davanti al fogliame, lo stagno è pieno di ninfee, il verde è estivo.",
      "Questa versione del 1899 appartiene ai quadri più noti del giardino d’acqua."
    ],
    "fact": "Il quadro è appeso nella National Gallery di Londra."
  },
  "lilypondga": {
    "text": [
      "Nel 1904 lo stagno è tutto il quadro: ninfee, riflessi, appena più riva. Il ponte indietreggia.",
      "Monet comincia a fare della superficie dell’acqua stessa il campo – un passo verso le decorazioni successive."
    ],
    "fact": "Il quadro del 1904 appartiene alla serie degli stagni di ninfee di questi anni."
  },
  "lilyaic": {
    "text": [
      "Verso il 1900 il ponte sta ancora saldo nel quadro, circondato da salici e ninfee, il verde è profondo.",
      "L’Art Institute of Chicago conserva questa versione precoce dello stagno – indipendente dal famoso quadro di ninfee del 1906 nella stessa collezione."
    ],
    "fact": "Il quadro del 1900 è appeso nell’Art Institute of Chicago."
  },
  "irisyale": {
    "text": [
      "Nel Clos normand, il giardino di fiori davanti alla casa, gli iris stanno in file fitte, un sentiero porta in profondità, gli alberi danno ombra.",
      "Nel 1900 Monet non dipinge soltanto il giardino d’acqua, ma anche questo cammino attraverso i fiori – il giardino che ha piantato egli stesso."
    ],
    "fact": "Il quadro del 1900 è appeso nella Yale University Art Gallery di New Haven."
  },
  "grandeallee": {
    "text": [
      "Il grande viale conduce verso la casa, il sentiero di ghiaia giace all’ombra degli alberi, al bordo fioriscono fiori.",
      "Lo stesso asse che i visitatori percorrono ancora oggi Monet lo dipinge verso il 1900 come un quadro d’estate silenzioso."
    ],
    "fact": "Il quadro del 1900 è appeso nel Musée des Beaux-Arts di Montreal."
  },
  "lilywl": {
    "text": [
      "Nel 1904 le ninfee sono un campo scuro e chiuso: foglie, pochi fiori, un verde profondo, appena orizzonte.",
      "In questi anni Monet espone gruppi di ninfee. Lo stagno diventa il suo motivo principale."
    ],
    "fact": "Il quadro del 1904 appartiene alla serie delle ninfee di questi anni."
  },
  "parlsun": {
    "text": [
      "Il Parlamento sta come una massa blu nella luce del sole, il Tamigi splende, il cielo è chiaro. Le torri non si dissolvono del tutto nella foschia.",
      "Monet dipinge l’edificio in molti stati: sole, nebbia, tramonto. Il motivo resta; il tempo no."
    ],
    "fact": "Il quadro del 1903 è appeso nel Brooklyn Museum di New York."
  },
  "parlfog": {
    "text": [
      "Nella nebbia il Parlamento diventa ombra. Una barca giace sull’acqua, il colore è trattenuto, l’aria è spessa.",
      "Ad Alice Monet scrive di essere stato a terra quando è mancata la nebbia – e di aver già visto tutte le sue tele rovinate."
    ],
    "fact": "Il quadro del 1903–1904 è appeso nel Metropolitan Museum di New York.",
    "quote": {
      "text": "Quando mi sono alzato, sono rimasto atterrito nel vedere che non c’era nebbia, neppure l’ombra di una foschia; ero a terra e vedevo già tutte le mie tele rovinate, ma a poco a poco, man mano che i fuochi sono stati accesi, il fumo e la foschia sono tornati.",
      "cite": "Lettera a Alice Monet, London, 4 marzo 1900"
    }
  },
  "parlset": {
    "text": [
      "Al tramonto il cielo brucia sopra il Parlamento, l’acqua accoglie l’arancio e il violetto, le torri stanno scure davanti.",
      "Nel 1904 Monet data parecchie di queste versioni londinesi, che porta a termine a Giverny."
    ],
    "fact": "Il quadro del 1904 appartiene alla serie del Parlamento dei viaggi londinesi."
  },
  "waterloosun": {
    "text": [
      "Il ponte di Waterloo giace nella luce della sera, gli archi sono morbidi, la città dietro si dissolve.",
      "Monet dipinge questo ponte al sole, al crepuscolo e in giorni grigi – la stessa costruzione, tre umori."
    ],
    "fact": "Il quadro del 1904 è appeso nella National Gallery of Art di Washington."
  },
  "waterloodusk": {
    "text": [
      "Al crepuscolo il ponte diventa più pesante, il fumo dei camini resta nell’aria, l’acqua è scura.",
      "Anche questa versione del 1904 è appesa a Washington, accanto al sole e al giorno grigio."
    ],
    "fact": "Il quadro è appeso nella National Gallery of Art di Washington."
  },
  "waterlogrey": {
    "text": [
      "In un giorno grigio il ponte è quasi incolore, il Tamigi opaco, la città un accenno.",
      "Nel 1903 Monet data questa versione. La nebbia di Londra non è per lui un ostacolo, ma il motivo stesso."
    ],
    "fact": "Il quadro del 1903 è appeso nella National Gallery of Art di Washington."
  },
  "charingga": {
    "text": [
      "Il ponte di Charing Cross giace in una foschia chiara e lattiginosa, treni e archi sono appena trattenuti.",
      "Monet dipinge il ponte ferroviario della linea del sud-est in molte versioni, spesso dal Savoy."
    ],
    "fact": "Il quadro verso il 1902 appartiene alla serie del ponte di Charing Cross."
  },
  "charing2": {
    "text": [
      "Una versione più precoce o più fredda dello stesso ponte: più struttura, un altro cielo, lo stesso motivo dal Tamigi.",
      "Dopo i viaggi londinesi Monet torna a Giverny. Nel 1908 un altro viaggio lo porta a Venezia."
    ],
    "fact": "Il quadro verso il 1900 appartiene ugualmente alla serie del ponte di Charing Cross."
  },
  "sangiorgio": {
    "text": [
      "San Giorgio Maggiore giace come un riquadro chiaro nella laguna, il campanile sta snello, due gondole danno la scala.",
      "Monet dipinge la chiesa dal lato opposto, spesso nella foschia, l’acqua come una vasta superficie quieta."
    ],
    "fact": "Il quadro del 1908 è appeso nell’Indianapolis Museum of Art."
  },
  "sangiodusk": {
    "text": [
      "Al crepuscolo il cielo brucia dietro San Giorgio, la chiesa diventa silhouette, l’acqua accoglie l’arancio.",
      "A Geffroy Monet scrive che la luce di Venezia è unica – e che è triste a lasciarla."
    ],
    "fact": "Il quadro del 1908 è appeso nella Fondation Beyeler di Riehen.",
    "quote": {
      "text": "Ella Le avrà raccontato del mio entusiasmo per Venezia. Ebbene, è soltanto cresciuto, e ora che si avvicina il momento di lasciare questa luce unica, ne sono triste. È così bella.",
      "cite": "Lettera a Gustave Geffroy, Venedig, 7 dicembre 1908"
    }
  },
  "dogepalace": {
    "text": [
      "Il Palazzo Ducale giace come un lungo fronte chiaro sull’acqua, le arcate sono accennate, la laguna accoglie il palazzo.",
      "Monet non prende l’edificio come uno studio d’architettura, ma come luce su pietra e acqua – come prima la cattedrale di Rouen."
    ],
    "fact": "Il quadro del 1908 appartiene al gruppo veneziano di quest’autunno."
  },
  "dogemet": {
    "text": [
      "Da San Giorgio Maggiore si vede il Palazzo Ducale sull’acqua, il primo piano è una striscia scura di riva.",
      "Lo stesso palazzo, un altro punto di vista. Monet cambia riva e tiene il motivo."
    ],
    "fact": "Il quadro del 1908 è appeso nel Metropolitan Museum di New York."
  },
  "palazzomula": {
    "text": [
      "Il Palazzo da Mula sta vicino al canale, la facciata si riflette, una gondola scivola.",
      "Monet si avvicina ai palazzi come si era avvicinato al portale a Rouen: non la città come panorama, ma un muro di luce."
    ],
    "fact": "Il quadro del 1908 è appeso nella National Gallery of Art di Washington."
  },
  "palazzodario": {
    "text": [
      "Il Palazzo Dario s’innalza stretto dall’acqua, le incrostazioni di marmo sono dissolte in colore, una gondola giace davanti.",
      "Anche questa casa sul Canal Grande Monet la dipinge nel 1908. Il viaggio resta l’unico che egli faccia a Venezia."
    ],
    "fact": "Il quadro è appeso nel National Museum Cardiff."
  },
  "grandcanal2": {
    "text": [
      "Santa Maria della Salute sta in fondo al Canal Grande, pali in primo piano dividono la superficie, l’acqua è turchese e violetta.",
      "Nel dicembre 1908 Monet e Alice lasciano Venezia. I quadri li elabora più tardi a Giverny."
    ],
    "fact": "Il quadro del 1908 è appeso nella Fondation Beyeler di Riehen."
  },
  "pathiris": {
    "text": [
      "Un cammino passa attraverso iris alti, gialli e violetti, il fogliame è fitto, il sentiero quasi scompare nel giallo-verde.",
      "Il quadro nasce tra il 1914 e il 1917, negli anni successivi alla morte di Jean. Monet resta al lavoro nel giardino."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum di New York."
  },
  "willowk": {
    "text": [
      "Un salice piangente pende pesantemente sul terreno, il tronco è scuro, i rami cadono come una tenda.",
      "Nel 1918 Monet dipinge parecchi salici presso lo stagno. Negli ultimi mesi della guerra l’albero diventa un motivo silenzioso e grave."
    ],
    "fact": "Il quadro del 1918 appartiene ai salici piangenti di questi anni."
  },
  "willow2": {
    "text": [
      "Un altro salice, più caldo nella luce: oro e verde, il tronco divide la superficie, i rami sono meno pesanti.",
      "Anche questa versione nasce nel 1918 o nel 1919, allo stesso stagno di Giverny."
    ],
    "fact": "Il quadro è appeso nel Kimbell Art Museum di Fort Worth."
  },
  "willow3": {
    "text": [
      "Ancora una volta il salice piangente, più rossastro e più aspro, quasi senza cielo. Monet resta presso l’albero e cambia l’ora.",
      "I salici nascono negli stessi anni in cui egli prepara i grandi pannelli di ninfee."
    ],
    "fact": "Il quadro del 1918–1919 appartiene al gruppo dei salici piangenti."
  },
  "irislate": {
    "text": [
      "Iris singoli stanno nel verde e nel blu, il fondo resta in parte libero. Il quadro è tenuto scarno e aperto.",
      "Tra il 1914 e il 1917 Monet dipinge tali pezzi di fiori nel giardino – accanto ai sentieri e ai salici."
    ],
    "fact": "Il quadro del 1914–1917 si trova in collezione privata."
  },
  "rosegarden": {
    "text": [
      "Dal roseto la casa appare come una massa calda e rossa nel fogliame, la luce è alta e gialla.",
      "Il quadro nasce tra il 1922 e il 1924, negli ultimi anni di lavoro di Monet nel Clos normand."
    ],
    "fact": "Il quadro è appeso nel Musée Marmottan Monet di Parigi."
  },
  "latebridge2": {
    "text": [
      "Il ponte giapponese è ormai soltanto un arco nel verde-blu, le forme si dissolvono, lo stagno e il fogliame passano l’uno nell’altro.",
      "Tra il 1918 e il 1924 Monet dipinge il ponte in versioni più libere e più scure – lo stesso luogo del 1899, un altro occhio."
    ],
    "fact": "Il quadro nasce tra il 1918 e il 1924, negli anni tardi presso lo stagno."
  },
  "lilyset": {
    "text": [
      "Il sole calante giace come una via giallo-rosa sullo stagno, le ninfee sono ampiamente sparse, l’orizzonte cade via.",
      "Questo pannello appartiene alle Grandes Décorations che oggi sono appese all’Orangerie. Monet ha allestito il giardino d’acqua egli stesso – e alla fine ne ha fatto uno spazio."
    ],
    "fact": "Il quadro appartiene al ciclo dell’Orangerie di Parigi e nasce tra il 1914 e il 1926.",
    "quote": {
      "text": "Sono sul punto di terminare due pannelli decorativi, che voglio firmare con il giorno della Vittoria, e La prego di offrirli allo Stato tramite la Sua mediazione. È poco, ma è l’unico modo in cui posso partecipare alla vittoria.",
      "cite": "Lettera a Georges Clemenceau, 12 novembre 1918"
    }
  },
  "lilyblue": {
    "text": [
      "Ninfee blu sotto rami pendenti: la superficie è vicina, il ritaglio senza riva, il colore è di un violetto e di un verde profondi.",
      "Il quadro nasce tra il 1916 e il 1919, negli stessi anni delle grandi decorazioni, come quadro a sé."
    ],
    "fact": "Il quadro è appeso nel Musée d’Orsay di Parigi."
  },
  "lilypool": {
    "text": [
      "1907, un ritaglio precoce e alto: un riflesso chiaro cade attraverso lo stagno, le ninfee giacciono sul bordo della via di luce.",
      "Questi anni preparano le decorazioni successive. Lo stagno non ha più bisogno di orizzonte."
    ],
    "fact": "Il quadro del 1907 appartiene alla serie delle ninfee prima dei grandi pannelli."
  },
  "lilymet2": {
    "text": [
      "Nel 1919 le ninfee giacciono come isole chiare su un fondo verde, un riflesso morbido divide la superficie.",
      "Il Metropolitan Museum conserva questa grande versione quieta degli anni delle decorazioni."
    ],
    "fact": "Il quadro del 1919 è appeso nel Metropolitan Museum di New York."
  },
  "lilytoledo": {
    "text": [
      "Nel 1922 lo stagno è un campo di violetto e verde, i fiori stanno sciolti, il pennello resta visibile.",
      "In questi anni Monet continua a lavorare alle ninfee nonostante la vista mutata."
    ],
    "fact": "Il quadro del 1922 è appeso nel Toledo Museum of Art."
  },
  "lilyga431": {
    "text": [
      "Un pannello largo del gruppo degli Agapanthus: ninfee su tutta la superficie, sotto un accenno di piante di riva.",
      "Tali grandi formati appartengono alla vicinanza delle decorazioni, anche quando non sono appesi all’Orangerie."
    ],
    "fact": "Il quadro nasce tra circa il 1915 e il 1926 e appartiene al gruppo dei pannelli di Agapanthus."
  },
  "lily1908": {
    "text": [
      "1908, uno stagno quieto e alto: pochi fiori rosa, una via chiara nell’acqua, quasi senza riva.",
      "Il quadro nasce negli stessi anni del viaggio a Venezia – e mostra che il giardino d’acqua resta il motivo duraturo."
    ],
    "fact": "Il quadro del 1908 appartiene alla serie delle ninfee di questi anni."
  },
  "lilyga462": {
    "text": [
      "Nel 1916 le ninfee giacciono più folte, in blu e in verde, singoli fiori luccicano in rosso e in giallo.",
      "In quest’anno Monet è in mezzo al lavoro sui grandi pannelli. Quadri più piccoli accompagnano le decorazioni."
    ],
    "fact": "Il quadro del 1916 appartiene alla serie delle ninfee degli anni di guerra e delle decorazioni."
  },
  "lilyga2": {
    "text": [
      "Ninfee su un fondo chiaro, verde-blu, le foglie formano isole, la luce è morbida.",
      "Tali pannelli degli anni Dieci mostrano lo stagno senza ponte e senza cielo – soltanto acqua e piante."
    ],
    "fact": "Il quadro appartiene alla serie delle ninfee degli anni Dieci."
  },
  "lilybs": {
    "text": [
      "Un riflesso chiaro cade di sbieco attraverso lo stagno, le ninfee giacciono sul bordo della luce, la riva resta fuori.",
      "Nel 1921 Monet scrive ad Arsène Alexandre che la galleria dell’Orangerie ospiterà per sempre i suoi tentativi decorativi. Nel maggio 1927, dopo la sua morte, le sale si aprono."
    ],
    "fact": "Il quadro è appeso nell’Artizon Museum di Tokyo, la precedente collezione Bridgestone.",
    "quote": {
      "text": "Sarà la galleria dell’Orangerie a ospitare per sempre i miei tentativi decorativi.",
      "cite": "Lettera a Arsène Alexandre, Giverny, 13 novembre 1921"
    }
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
