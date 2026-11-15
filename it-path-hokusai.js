// v7.8 Italian path step texts: hokusai life path.
// Faithful translation of the existing DE/EN. No new facts.
// Letter quotes are translations of the German self-translations
// (except letter 569 / blvdclichy: from Vincent’s own English).
// Citations keep letter numbers, recipients, places and dates.
(function () {
  var P = window.IT = window.IT || {};
  var pt = P.pathTexts = P.pathTexts || {};
  var add = {
  "shopfront": {
    "text": [
      "Nella neve sta una piccola bottega, un ramo di pino innevato pende sopra il tetto. Persone e due gatti si tengono sulla soglia.",
      "Il foglio nasce nel 1780, negli anni precoci, quando Hokusai è ancora un giovane disegnatore a Edo."
    ],
    "fact": "Il quadro è appeso nel Metropolitan Museum of Art di New York. Porta il titolo «In Front of a Shop»."
  },
  "spinsilk": {
    "text": [
      "Una donna siede al filatoio, la seta corre tra le sue mani. Un bambino in un panno rosso si china su un vaso; tre rondini volano sopra di loro.",
      "Il Metropolitan Museum data il quadro al 1790 – nel tempo in cui Hokusai lavora come Shunrō nella scuola Katsukawa."
    ],
    "fact": "«Donna che fila la seta», Metropolitan Museum of Art, New York, 1790."
  },
  "sumowrest": {
    "text": [
      "Due lottatori di sumo si inchinano l’uno verso l’altro, fermi, con lo sguardo basso. Nomi e titoli stanno in alto sul foglio.",
      "Il foglio mostra Takaneyama Yoichiemon e Sendagawa Kichigorō e nasce verso il 1790–1793, ancora nel tempo di Shunrō."
    ],
    "fact": "Xilografia a colori, Metropolitan Museum of Art, New York, verso il 1790–1793."
  },
  "sorinets": {
    "text": [
      "Donne siedono su stuoie rosse in uno spazio aperto e guardano pescatori con reti nell’acqua.",
      "Il surimono è firmato «Sōri ga» – cioè negli anni in cui Hokusai porta il nome Tawaraya Sōri, verso il 1794–1798."
    ],
    "fact": "Collezione Isaac de Camondo, lasciata in legato al museo nel 1911, inventario EO 1833. Musée Guimet, Parigi."
  },
  "dyers": {
    "text": [
      "In una scena lunga e stretta pendono teli di stoffa ad asciugare. I tintori si muovono in mezzo; i colori sono ancora chiari e contenuti.",
      "Il Cleveland Museum of Art data il foglio al 1795, negli anni di Sōri."
    ],
    "fact": "«Tintori al lavoro», Cleveland Museum of Art, 1795."
  },
  "soritable": {
    "text": [
      "Una donna sta a un tavolo da pittura, il pennello e la carta sono pronti. Poesie corrono sul bordo del foglio.",
      "È firmato «Sōri aratame Hokusai ga» – «Sōri, mutato in Hokusai». L’anno 1799 registra il cambio di nome."
    ],
    "fact": "Surimono privato con versi kyōka, collezione Camondo, Musée Guimet, Parigi, 1799."
  },
  "fujisuri": {
    "text": [
      "Il Fuji sta quieto sopra una lieve nebbia, accanto vi sono poesie. Il foglio è piccolo e delicato – un surimono precoce, molto prima delle Trentasei vedute.",
      "Il Rijksmuseum data la veduta al 1797, ancora negli anni del nome Sōri."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1548, 1797."
  },
  "sumidawalk": {
    "text": [
      "Donne e bambini camminano lungo la riva del Sumida. Il fiume è ampio; il giorno pare quieto.",
      "Il Cleveland Museum of Art data il foglio al 1800 – negli anni in cui Hokusai mostra Edo in libri e fogli singoli."
    ],
    "fact": "«Donne e bambini che camminano lungo il Sumida», Cleveland Museum of Art, 1800."
  },
  "azumatsukuda": {
    "text": [
      "Barche giacciono davanti a Tsukuda, un isolotto alla foce del Sumida. Sullo sfondo sta il Fuji, chiaro e piccolo.",
      "Il Los Angeles County Museum of Art colloca il foglio verso il 1802, in una serie di vedute famose della Capitale orientale."
    ],
    "fact": "Xilografia a colori, LACMA, verso il 1802, collezione Joan Elizabeth Tanney."
  },
  "ueno": {
    "text": [
      "A Ueno una porta rossa di tempio sta presso l’acqua; dietro, il vasto specchio dello stagno Shinobazu.",
      "Anche questo foglio appartiene alle vedute della Capitale orientale, verso il 1802, al LACMA."
    ],
    "fact": "Xilografia a colori, Los Angeles County Museum of Art, verso il 1802."
  },
  "mimeguri": {
    "text": [
      "Al santuario Mimeguri giace un cortile quieto sotto gli alberi, e il Fuji appare dietro il recinto.",
      "Mimeguri sta sul Sumida. Il foglio nasce verso il 1802, oggi al LACMA."
    ],
    "fact": "Xilografia a colori, Los Angeles County Museum of Art, verso il 1802."
  },
  "umeyashiki": {
    "text": [
      "La pioggia cade in tratti obliqui sul giardino di pruni di Umeyashiki. La gente s’affretta sotto gli alberi e gli ombrelli.",
      "Umeyashiki sorgeva a Mukōjima, a est del Sumida, ed era noto per i fiori di pruno. Il foglio: verso il 1802, LACMA."
    ],
    "fact": "Xilografia a colori, Los Angeles County Museum of Art, verso il 1802."
  },
  "ezoshi": {
    "text": [
      "In un negozio di libri illustrati giacciono pile di libri e stampe. I clienti si chinano sulla merce; davanti alla porta stanno insegne pubblicitarie.",
      "Il Rijksmuseum data il foglio al 1802 e lo chiama il negozio di un mercante di libri illustrati – proprio il mondo in cui si vendevano i libri di Hokusai."
    ],
    "fact": "Rijksmuseum, Amsterdam, RP-P-2015-26-1896, 1802."
  },
  "yanagi": {
    "text": [
      "Un acquazzone improvviso colpisce il nuovo ponte Yanagi. Persone sotto grandi ombrelli si chinano nella pioggia; i colori restano chiari.",
      "Il Metropolitan Museum data la xilografia a colori al 1806."
    ],
    "fact": "«Acquazzone al nuovo ponte Yanagi», Metropolitan Museum of Art, New York, 1806."
  },
  "teaceremony": {
    "text": [
      "Una ciotola, una scatola e un panno giacciono quieti sul foglio – soltanto gli utensili della cerimonia del tè, e versi. Nulla distrae.",
      "Il Rijksmuseum colloca il surimono tra il 1794 e il 1804, negli anni delle commissioni private."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-975, verso il 1794–1804."
  },
  "cherryview": {
    "text": [
      "Una compagnia cerca un posto sotto i ciliegi in fiore. Sotto stanno versi; sopra, il paesaggio presso l’acqua.",
      "Il Rijksmuseum data il surimono agli anni intorno al 1810–1820."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, AK-MAK-1586, verso il 1810–1820."
  },
  "peonies": {
    "text": [
      "Un cesto di peonie riempie il lato destro; a sinistra stanno caratteri. I fiori sono posati pesanti e nitidi.",
      "Il Cleveland Museum of Art data il surimono al 1810 o al 1814. Celebra un evento nella vita dell’attore Ichikawa Danjūrō VII, il cui segno era la peonia."
    ],
    "fact": "«Basket of Peonies», Cleveland Museum of Art, 1810 o 1814."
  },
  "manzai": {
    "text": [
      "Due attori di manzai danzano uno sopra l’altro, l’uno con il ventaglio, l’altro solleva il piede. Il fondo resta vuoto e chiaro.",
      "Il manzai è un gioco tradizionale di Capodanno per due. Il Minneapolis Institute of Art data il quadro al 1816."
    ],
    "fact": "«Manzai Performers», Minneapolis Institute of Art, 1816."
  },
  "lostlove": {
    "text": [
      "Un pesce rosso giace in una ciotola bianca, erbe e un ventaglio stanno accanto. Il foglio appartiene a un «gioco delle conchiglie» con versi dell’epoca Genroku.",
      "La serie si chiama Genroku kasen kai-awase. Questo foglio, la conchiglia dell’amore perduto (Katashigai), è datato 1821 e si trova nella Art Gallery of South Australia."
    ],
    "fact": "Surimono, Art Gallery of South Australia, Adelaide, 1821."
  },
  "grasses": {
    "text": [
      "Una barca aperta, un pesce rosso-arancio, erbe delicate. Anche questa è una «conchiglia» della stessa serie del 1821: Chigusagai, la conchiglia delle miriadi d’erbe.",
      "Come il foglio dell’amore perduto, appartiene alla Art Gallery of South Australia."
    ],
    "fact": "Surimono da «Genroku kasen kai-awase», Art Gallery of South Australia, 1821."
  },
  "cherryshell": {
    "text": [
      "Viaggiatori e portatori si muovono attraverso un vasto paesaggio, in alto stanno versi. Il foglio si chiama Sakura-gai, la conchiglia dei fiori di ciliegio.",
      "Appartiene alla stessa serie delle conchiglie e nasce probabilmente nel 1821. Questo esemplare è appeso nel Metropolitan Museum."
    ],
    "fact": "Surimono, Metropolitan Museum of Art, New York, probabilmente 1821."
  },
  "hatsuuma": {
    "text": [
      "Una donna in abito festivo siede presso un cavallo addobbato. Hatsuuma è la prima festa del cavallo nel secondo mese, spesso legata a una visita al tempio.",
      "Il 1822 è un anno del Cavallo. Il foglio appartiene alla serie «Umazukushi», una serie sui cavalli, e si trova nel Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-284, 1822."
  },
  "umasenbetsu": {
    "text": [
      "Scatole di lacca, una lettera piegata, un ventaglio rosso: un dono d’addio, disposto con finezza e in silenzio sul foglio.",
      "Anche questo è un surimono della serie dei cavalli «Umazukushi» del 1822, nel Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1954-562, 1822."
  },
  "watakuri": {
    "text": [
      "Una macchina per allentare il cotone sta accanto a un finimento da sella. Il lavoro quotidiano e il cavallo s’incontrano su un foglio festivo.",
      "«Watakuri uma» appartiene alla stessa serie «Umazukushi» del 1822 nel Rijksmuseum."
    ],
    "fact": "Surimono, Rijksmuseum, Amsterdam, RP-P-1958-296, 1822."
  },
  "fujinibon": {
    "text": [
      "Il Nihonbashi è il ponte da cui si contano le vie di Edo. Tra i magazzini si apre il canale; lontano sta il Fuji.",
      "Hokusai pone la città animata in primo piano e il monte come un punto quieto all’orizzonte."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimitsui": {
    "text": [
      "Sopra i tetti del negozio Mitsui a Suruga-chō un lungo aquilone sale nel cielo. Il Fuji sta esattamente sull’asse del filo.",
      "Il foglio unisce il quartiere mercantile di Edo al monte lontano – il quotidiano e il Fuji in una sola linea."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "honganji": {
    "text": [
      "Dal tetto dell’Hongan-ji ad Asakusa lo sguardo attraversa Edo fino al Fuji. Operai sistemano tegole; il tempio riempie il primo piano.",
      "Il grande tempio di Asakusa era una delle vedute più alte della città."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mannen": {
    "text": [
      "Sotto l’arco del ponte Mannen a Fukagawa scivolano barche, e il Fuji appare nel cerchio dell’arco.",
      "Hokusai inquadra il monte attraverso il ponte stesso – un quadro nel quadro."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tatekawa": {
    "text": [
      "Nel deposito di legname di Tatekawa a Honjō si ammassano travi e tavole. Tra i mucchi il Fuji diventa visibile.",
      "Honjō, il quartiere stesso di Hokusai a est di Edo, era un luogo di mercanti di legname e di canali."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "koishikawa": {
    "text": [
      "Dopo la neve, Koishikawa giace quieto. Un padiglione, alberi spogli, il Fuji bianco sopra la città.",
      "Il titolo è «Mattino di neve a Koishikawa» – yuki no ashita, il mattino dopo la neve."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "onden": {
    "text": [
      "Una grande ruota idraulica gira a Onden, la gente lavora presso l’acqua, il Fuji sta dietro i campi.",
      "Onden sorgeva a ovest di Edo, in una zona di mulini e campi."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ryogoku": {
    "text": [
      "Dalla riva di Onmaya una barca piena attraversa il Sumida, il ponte Ryōgoku giace di traverso nella luce della sera, il Fuji è una piccola ombra all’orizzonte.",
      "Il foglio si chiama in giapponese «Onmayagashi yori Ryōgokubashi sekiyō o miru» – contemplare il tramonto sul ponte Ryōgoku dalla riva di Onmaya."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "gotenyama": {
    "text": [
      "Sul Gotenyama a Shinagawa fioriscono i ciliegi; sotto sta la baia, in lontananza il Fuji.",
      "Shinagawa era la prima stazione del Tōkaidō, subito davanti a Edo, un luogo per gite e congedi."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hodogaya": {
    "text": [
      "Sul Tōkaidō presso Hodogaya, viaggiatori e cavalli passano sotto alti pini. Il Fuji appare tra i tronchi.",
      "Hodogaya era una delle stazioni del Tōkaidō, la grande strada da Edo a Kyoto."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "ejiri": {
    "text": [
      "Un vento improvviso strappa ai viaggiatori a Ejiri i teli e le carte. I fogli volano; il Fuji resta fermo.",
      "Ejiri sorgeva nella provincia di Suruga, vicino alla costa, sul Tōkaidō."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "yoshida": {
    "text": [
      "In una locanda alla stazione Yoshida siedono viaggiatori; attraverso la parete aperta si vede il Fuji come un’insegna sopra la strada.",
      "Yoshida sorgeva sul Tōkaidō ai piedi del monte, una tipica stazione di pernottamento."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kanaya": {
    "text": [
      "A Kanaya i viaggiatori attraversano il fiume Ōi. L’acqua è alta, i carichi riposano sulle spalle, il Fuji accompagna la riva.",
      "Il guado dell’Ōi sul Tōkaidō era noto quando l’acqua saliva – uno dei tratti difficili della strada."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "fujimi": {
    "text": [
      "Un bottaio lavora dentro una botte enorme. Attraverso i cerchi appare il Fuji, inquadrato in tondo come in una finestra.",
      "Il luogo si chiama Fujimigahara, «pianura con vista sul Fuji», nella provincia di Owari."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "totomi": {
    "text": [
      "Nelle montagne della provincia di Tōtomi degli uomini segano una tavola enorme. Il Fuji sta dietro i puntelli del ponteggio.",
      "Il foglio mostra il lavoro pesante delle segherie e il monte come una controforma quieta."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "mishima": {
    "text": [
      "Al passo di Mishima, nella provincia di Kai, un albero possente s’innalza accanto al cammino, i viaggiatori riposano all’ombra, il Fuji sta dietro.",
      "Kai è la provincia dell’interno a ovest di Edo, la terra intorno al monte."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "inume": {
    "text": [
      "Dal passo di Inume il Fuji giace libero sopra una valle aperta; i cavalli sulla strada paiono piccoli.",
      "Il passo sta nella provincia di Kai e apre una delle vaste vedute della serie."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "misaka": {
    "text": [
      "Nel lago di Misaka si riflette il Fuji – ma il riflesso mostra un altro monte coperto di neve, non esattamente la stessa immagine di quella sopra l’acqua.",
      "Hokusai dà al riflesso una forma propria. Il foglio appartiene ai più insoliti della serie."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "hakone": {
    "text": [
      "Il lago di Hakone giace quieto tra colline boscose, il Fuji s’innalza sulla riva opposta.",
      "Hakone, nella provincia di Sagami, era uno dei passaggi controllati del Tōkaidō."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "enoshima": {
    "text": [
      "L’isola di Enoshima giace al largo della costa della provincia di Sagami, con una lunga barra di sabbia e il Fuji sopra il mare.",
      "Enoshima era un luogo di pellegrinaggio e di gite, non lontano dal Tōkaidō."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "isawa": {
    "text": [
      "All’alba di Isawa, nella provincia di Kai, i tetti giacciono ancora nell’ombra, il Fuji si colora alla prima luce.",
      "Isawa sta nel bacino di Kōfu, nell’interno a ovest del monte."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "minobu": {
    "text": [
      "Dal fiume Minobu si vede il Fuji dall’altro lato: il dorso del monte, non la silhouetta familiare da Edo.",
      "Il titolo lo dice esso stesso: «Minobugawa ura Fuji» – il Fuji dal rovescio, dal fiume Minobu."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kazusa": {
    "text": [
      "Un grande veliero giace in mare aperto al largo della provincia di Kazusa. Il Fuji è un piccolo cono sopra l’orizzonte.",
      "Kazusa sta a est della baia di Edo, dall’altra parte dell’acqua."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "noboto": {
    "text": [
      "A bassa marea, torii e persone stanno nella baia poco profonda di Noboto. Il Fuji giace sopra un orizzonte quieto.",
      "Il foglio appartiene ai più chiari della serie: molta sabbia vuota, poco rumore."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "umezawa": {
    "text": [
      "Gru volano e stanno nel paesaggio palustre di Umezawa; il Fuji è scuro e vicino.",
      "Umezawa sta nella provincia di Sagami. Il foglio appartiene ai più silenziosi della serie."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "tagobay": {
    "text": [
      "Nella baia di Tago presso Ejiri una lunga barca giace sulla riva, le onde battono la sabbia, il Fuji sta libero sopra la baia.",
      "La baia sta sul Tōkaidō, nella provincia di Suruga, ed è nota anche dalla poesia come un luogo con vista sul Fuji."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "kajikazawa": {
    "text": [
      "Un pescatore sta su una roccia a Kajikazawa, la lenza tesa sopra le onde, il Fuji s’innalza dietro di lui.",
      "Kajikazawa sta nella provincia di Kai, su un fiume impetuoso ai piedi del monte."
    ],
    "fact": "Xilografia a colori delle «Trentasei vedute del monte Fuji», editore Nishimuraya Yohachi, verso il 1830–1832. Metropolitan Museum of Art, New York."
  },
  "wave": {
    "text": [
      "Una grande onda s’innalza al largo di Kanagawa, le barche da pesca giacciono di sbieco nell’incavo. Piccolissimo, nella valle dell’onda, sta il Fuji.",
      "Il foglio appartiene alla serie «Trentasei vedute del monte Fuji» e nasce verso il 1830–1832, quando Hokusai ha già circa settant’anni."
    ],
    "fact": "«La grande onda di Kanagawa» (Kanagawa-oki nami ura), della serie del Fuji, verso il 1830–1832."
  },
  "redfuji": {
    "text": [
      "Il Fuji brilla rosso nella luce del mattino, piccole nubi passano sul pendio. Il titolo è «Vento fine, mattino chiaro» – Gaifū kaisei.",
      "Si può vedere il Fuji rosso in certi giorni chiari della tarda estate e dell’autunno. Il foglio appartiene alla stessa serie, verso il 1830–1832."
    ],
    "fact": "«Fuji rosso (Vento fine, mattino chiaro)», dalle 36 vedute, verso il 1830–1832."
  },
  "thunder": {
    "text": [
      "In basso, lampi rossi squarciano il pendio; in alto, la vetta resta quieta nella luce. Il foglio si chiama «Sanka hakuu» – temporale sotto la vetta.",
      "Insieme alla Grande onda e al Fuji rosso, appartiene ai fogli più noti della serie."
    ],
    "fact": "«Temporale sotto la vetta», dalle 36 vedute, verso il 1830–1832."
  },
  "fujisundai": {
    "text": [
      "Da un’altura a Edo lo sguardo passa sopra tetti e alberi fino al Fuji. Surugadai sta nel quartiere di Kanda.",
      "Il foglio appartiene alla serie «Trentasei vedute del monte Fuji», uscita verso il 1830–1832 presso Nishimuraya Yohachi."
    ],
    "fact": "«Il Fuji da Surugadai a Edo», Metropolitan Museum of Art, New York."
  },
  "sazai": {
    "text": [
      "Su un’alta sala di tempio stanno piccole figure e guardano in lontananza, là dove sta il Fuji.",
      "La sala Sazai appartiene al tempio dei cinquecento arhat a Edo. Anche questo foglio proviene dalla serie del Fuji verso il 1830–1832."
    ],
    "fact": "«La sala Sazai nel tempio dei cinquecento arhat», Metropolitan Museum of Art, New York."
  },
  "aoyamapine": {
    "text": [
      "Un pino possente, tagliato in tondo, riempie il primo piano; il Fuji appare piccolo dietro.",
      "Il luogo è Aoyama a Edo. Il foglio appartiene alla stessa serie del Fuji, uscita presso Nishimuraya Yohachi."
    ],
    "fact": "«Il pino cuscino ad Aoyama», Metropolitan Museum of Art, New York."
  },
  "meguro": {
    "text": [
      "Sotto i pini e tra le capanne si apre la veduta sul Fuji. Meguro sta a sud di Edo.",
      "Il foglio «Meguro inferiore» appartiene agli altri fogli della serie del Fuji verso il 1830–1832."
    ],
    "fact": "«Meguro inferiore», Metropolitan Museum of Art, New York."
  },
  "sekiya": {
    "text": [
      "Cavalieri galoppano lungo un argine presso il Sumida; il Fuji sta quieto all’orizzonte.",
      "Sekiya era un villaggio sul fiume, a nord della città. Il foglio proviene dalla serie del Fuji presso Nishimuraya Yohachi."
    ],
    "fact": "«Il villaggio di Sekiya sul Sumida», Metropolitan Museum of Art, New York."
  },
  "senju": {
    "text": [
      "Presso il fiume a Senju stanno persone e barche; il Fuji si vede in lontananza.",
      "Senju sorgeva nella provincia di Musashi, su una strada importante verso nord. Anche questo è un foglio della serie del Fuji."
    ],
    "fact": "«Senju nella provincia di Musashi», Metropolitan Museum of Art, New York."
  },
  "fujitsukuda": {
    "text": [
      "Al crepuscolo barche giacciono al largo dell’isola di Tsukuda; il Fuji si delinea contro il cielo.",
      "Tsukudajima sta alla foce del Sumida. Il foglio appartiene alla serie del Fuji verso il 1830–1832."
    ],
    "fact": "«Tsukudajima nella provincia di Musashi», Metropolitan Museum of Art, New York."
  },
  "ushibori": {
    "text": [
      "Una grande barca dal tetto aperto giace nel canneto; il Fuji sta sopra la pianura di Hitachi.",
      "Ushibori sta nella provincia di Hitachi, a est di Edo. Il foglio proviene dalla serie del Fuji."
    ],
    "fact": "«Ushibori nella provincia di Hitachi», Metropolitan Museum of Art, New York."
  },
  "tamagawa": {
    "text": [
      "Presso il fiume Tama viaggiatori stanno sotto gli alberi; il Fuji appare sopra l’acqua.",
      "Il Tama costituì a lungo il confine della provincia di Musashi. Il foglio appartiene alla serie del Fuji verso il 1830–1832."
    ],
    "fact": "«Il fiume Tama nella provincia di Musashi», Metropolitan Museum of Art, New York."
  },
  "shichiri": {
    "text": [
      "Una vasta spiaggia si apre sotto un grande cielo; il Fuji sta sopra la baia di Sagami.",
      "Shichirigahama sta sulla costa della provincia di Sagami. Il foglio proviene dalla serie del Fuji."
    ],
    "fact": "«Shichirigahama nella provincia di Sagami», Metropolitan Museum of Art, New York."
  },
  "katakura": {
    "text": [
      "Tra gli arbusti da tè la gente lavora nella pianura di Suruga; il Fuji s’innalza vicino sopra di loro.",
      "Katakura era noto per i suoi campi di tè. Il foglio appartiene alle altre vedute della serie del Fuji."
    ],
    "fact": "«Le piantagioni di tè di Katakura, nella provincia di Suruga», Metropolitan Museum of Art, New York."
  },
  "climbing": {
    "text": [
      "Con ramponi e bastoni in mano, gruppi salgono il pendio del Fuji; sopra di loro la vetta giace nella neve.",
      "Il foglio mostra coloro che salgono il monte stesso e appartiene alla serie del Fuji verso il 1830–1832."
    ],
    "fact": "«Gruppi di alpinisti», Metropolitan Museum of Art, New York."
  },
  "suwa": {
    "text": [
      "Sopra il lago Suwa, nella provincia di Shinano, il Fuji sta in lontananza; in primo piano giacciono un santuario e alberi.",
      "Il lago sta nell’interno, nell’odierna prefettura di Nagano. Il foglio proviene dalla serie del Fuji."
    ],
    "fact": "«Il lago Suwa nella provincia di Shinano», Metropolitan Museum of Art, New York."
  },
  "kirifuri": {
    "text": [
      "Una cascata larga e spezzata si precipita lungo una parete di roccia; piccoli pellegrini stanno ai piedi e nelle gole laterali.",
      "Il foglio appartiene alla serie «Giro delle cascate delle province» (Shokoku taki meguri), uscita verso il 1832–1833 presso Nishimuraya Yohachi. La cascata di Kirifuri sta sul monte Kurokami, nella provincia di Shimotsuke."
    ],
    "fact": "«La cascata di Kirifuri sul monte Kurokami, provincia di Shimotsuke», Metropolitan Museum of Art, New York."
  },
  "yoshitsune": {
    "text": [
      "Una cascata abbondante cade in una pozza chiara; cavalieri e uomini tengono cavalli sulla riva – il luogo in cui la leggenda fa lavare il suo cavallo a Yoshitsune.",
      "Yoshino sta nella provincia di Yamato. Il foglio proviene dalla stessa serie delle cascate verso il 1832–1833."
    ],
    "fact": "«La cascata dove Yoshitsune lavò il suo cavallo, a Yoshino», Metropolitan Museum of Art, New York."
  },
  "amida": {
    "text": [
      "Una cascata stretta, quasi verticale, taglia una nicchia rotonda nella roccia – la forma ricorda il Buddha Amida.",
      "La cascata sta nel tratto interiore del Kisokaidō. Il foglio appartiene alla serie delle cascate, uscita presso Nishimuraya Yohachi."
    ],
    "fact": "«La cascata di Amida ai confini del Kisokaidō», Metropolitan Museum of Art, New York."
  },
  "yoro": {
    "text": [
      "Tra gli alberi, un sipario bianco cade nella valle; la gente sta al bordo e guarda l’acqua.",
      "La cascata di Yōrō, nella provincia di Mino, è uno degli otto progetti della serie «Giro delle cascate delle province»."
    ],
    "fact": "«La cascata di Yōrō nella provincia di Mino», Metropolitan Museum of Art, New York."
  },
  "ono": {
    "text": [
      "Una cascata si precipita accanto a un villaggio e a un ponte; il bucato e i viaggiatori orlano il cammino del Kisokaidō.",
      "Ono sta sull’antica strada dell’interno. Il foglio nasce verso il 1832–1833, nella serie delle cascate."
    ],
    "fact": "«La cascata di Ono sul Kisokaidō», Metropolitan Museum of Art, New York."
  },
  "roben": {
    "text": [
      "Sotto una cascata pesante, pellegrini siedono e stanno in una grotta di roccia; la polvere d’acqua riempie il suolo.",
      "La cascata di Rōben sta sul monte sacro Ōyama, nella provincia di Sagami. Il foglio appartiene alla serie delle cascate verso il 1832–1833."
    ],
    "fact": "«La cascata di Rōben sull’Ōyama, provincia di Sagami», Metropolitan Museum of Art, New York."
  },
  "aoigaoka": {
    "text": [
      "Nella stessa Edo, una cascata più piccola cade oltre un muro in una pozza; i passeggiatori si fermano al parapetto.",
      "Aoigaoka sta nella capitale orientale – a Edo. Anche questo foglio appartiene agli otto progetti della serie delle cascate."
    ],
    "fact": "«La cascata di Aoigaoka nella capitale orientale», Metropolitan Museum of Art, New York."
  },
  "kiyotaki": {
    "text": [
      "Un santuario sta su uno spuntone di roccia accanto alla cascata; il cammino del Tōkaidō passa a Sakanoshita.",
      "Il foglio mostra la cascata di Kiyotaki Kannon e appartiene alla serie «Giro delle cascate delle province»."
    ],
    "fact": "«La cascata di Kiyotaki Kannon a Sakanoshita, sul Tōkaidō», Metropolitan Museum of Art, New York."
  },
  "kameido": {
    "text": [
      "Un ponte di legno fortemente inarcato – il ponte del tamburo – attraversa lo stagno del santuario Tenjin di Kameido; il Fuji appare in lontananza.",
      "Il foglio appartiene alla serie «Vedute notevoli di ponti famosi nelle province» (Shokoku meikyō kiran), uscita verso il 1834 presso Nishimuraya Yohachi. Kameido sta a Edo."
    ],
    "fact": "«Il ponte del tamburo al santuario Tenjin di Kameido», Metropolitan Museum of Art, New York."
  },
  "tenman": {
    "text": [
      "Un lungo ponte ad arco, ornato di lanterne, scavalca il fiume; le barche passano sotto.",
      "Il ponte Tenman sta nella provincia di Settsu, nell’odierna Osaka. Il foglio proviene dalla serie dei ponti verso il 1834."
    ],
    "fact": "«Il ponte Tenman nella provincia di Settsu», Metropolitan Museum of Art, New York."
  },
  "yahagi": {
    "text": [
      "Un ponte su pali molto lungo si stende sopra un fiume ampio; il Fuji sta dietro la pianura di Okazaki.",
      "Okazaki sta sul Tōkaidō. Il foglio appartiene alla serie «Vedute notevoli di ponti famosi nelle province»."
    ],
    "fact": "«Il ponte Yahagi a Okazaki, sul Tōkaidō», Metropolitan Museum of Art, New York."
  },
  "fukui": {
    "text": [
      "Un lungo ponte attraversa un tratto quieto di fiume; case e alberi orlano la riva nella provincia di Echizen.",
      "Il foglio della serie dei ponti nasce verso il 1834 e esce presso Nishimuraya Yohachi."
    ],
    "fact": "«Il ponte Fukui nella provincia di Echizen», Metropolitan Museum of Art, New York."
  },
  "kintai": {
    "text": [
      "Cinque archi di pietra di un ponte si tendono sull’acqua; montagne stanno sullo sfondo.",
      "Il ponte Kintai, nella provincia di Suō, è noto per la sua forma ad arco. Il foglio appartiene alla serie dei ponti verso il 1834."
    ],
    "fact": "«Il ponte Kintai nella provincia di Suō», Metropolitan Museum of Art, New York."
  },
  "togetsu": {
    "text": [
      "Sotto una luna piena, un ponte attraversa i pendii boscosi di Arashiyama; barche giacciono sul fiume.",
      "Arashiyama sta nella provincia di Yamashiro, presso Kyōto. Il foglio proviene dalla serie dei ponti verso il 1834."
    ],
    "fact": "«Il ponte Togetsu ad Arashiyama, provincia di Yamashiro», Metropolitan Museum of Art, New York."
  },
  "yatsuhashi": {
    "text": [
      "Otto passerelle strette si spezzano sopra una palude di iris; il «ponte delle otto tavole» è un motivo antico della poesia.",
      "Il foglio mostra un’«antica veduta» del ponte nella provincia di Mikawa e appartiene alla serie dei ponti verso il 1834. Il Cleveland Museum of Art conserva questa impressione."
    ],
    "fact": "«Antica veduta del ponte delle otto tavole, nella provincia di Mikawa», Cleveland Museum of Art."
  },
  "gyodo": {
    "text": [
      "Un ponte stretto pende come una nube sul pendio boscoso del monte Gyōdō; piccole figure lo attraversano.",
      "Il luogo sta presso Ashikaga. Il foglio appartiene alla serie dei ponti famosi, uscita verso il 1834."
    ],
    "fact": "«Il ponte delle nubi sospese sul monte Gyōdō, presso Ashikaga», Metropolitan Museum of Art, New York."
  },
  "tsuribashi": {
    "text": [
      "Un ponte sospeso si tende alto sopra una valle profonda; i viaggiatori osano l’attraversamento tra le province di Hida e Etchū.",
      "Il foglio della serie dei ponti verso il 1834 mostra il confine nelle montagne del Giappone centrale."
    ],
    "fact": "«Il ponte sospeso al confine delle province di Hida e Etchū», Metropolitan Museum of Art, New York."
  },
  "sanobashi": {
    "text": [
      "Barche legate l’una all’altra formano un ponte sul fiume; sulla riva stanno case e alberi.",
      "L’«antica veduta» del ponte di barche di Sano, nella provincia di Kōzuke, appartiene alla serie dei ponti verso il 1834. Questa impressione è nel Musée Guimet di Parigi (inventario EO 993)."
    ],
    "fact": "«Antica veduta del ponte di barche di Sano, nella provincia di Kōzuke», Musée Guimet, Parigi."
  },
  "tenpozan": {
    "text": [
      "Una piccola collina artificiale e un approdo giacciono alla foce del fiume Aji; le navi riempiono l’acqua.",
      "Il Tenpōzan sta nella provincia di Settsu. Il foglio è contato nella serie dei ponti verso il 1834."
    ],
    "fact": "«Il Tenpōzan alla foce del fiume Aji, provincia di Settsu», Metropolitan Museum of Art, New York."
  },
  "peoniescanary": {
    "text": [
      "Grandi peonie piene riempiono il foglio; un canarino giallo sta tra i fiori.",
      "Il foglio uscì verso il 1833–1834 presso Nishimuraya Yohachi, in una serie senza titolo di immagini di fiori e uccelli."
    ],
    "fact": "«Peonie e canarino», Wikimedia Commons (Google Art Project), di pubblico dominio."
  },
  "bullfinch": {
    "text": [
      "Un ciuffolotto sta su un ramo di ciliegio piangente in fiore; i fiori cadono leggermente verso il basso.",
      "Il foglio appartiene alla stessa serie di fiori e uccelli verso il 1833–1834. Questa impressione è nell’Art Institute of Chicago."
    ],
    "fact": "«Ciuffolotto e ciliegio piangente», Art Institute of Chicago."
  },
  "irisesgh": {
    "text": [
      "Gli iris stanno fitti l’uno accanto all’altro; una cavalletta sta su una foglia.",
      "Il Metropolitan Museum data il foglio alla fine degli anni Venti o verso il 1830; la serie di fiori senza titolo esce verso il 1833–1834 presso Nishimuraya Yohachi."
    ],
    "fact": "«Iris e cavalletta», Metropolitan Museum of Art, New York."
  },
  "bellflower": {
    "text": [
      "Campanule violette si piegano sul foglio; una libellula si è posata su uno stelo.",
      "Anche questo foglio appartiene alla serie di fiori e uccelli, uscita verso il 1833–1834 presso Nishimuraya Yohachi."
    ],
    "fact": "«Campanule e libellula», Metropolitan Museum of Art, New York."
  },
  "chrysbee": {
    "text": [
      "Crisantemi rosa e bianchi riempiono il quadro; un’ape vola davanti ai fiori.",
      "Il foglio della serie di fiori verso il 1833–1834 è nel Centre Céramique di Maastricht."
    ],
    "fact": "«Crisantemi e ape», Centre Céramique, Maastricht."
  },
  "poppybloom": {
    "text": [
      "Papaveri rosso-arancio si aprono sopra capsule in boccio e un fogliame dentato.",
      "Il foglio appartiene alla serie di fiori senza titolo verso il 1833–1834. Questa impressione proviene dall’Art Institute of Chicago."
    ],
    "fact": "«Papaveri», Art Institute of Chicago."
  },
  "lilybloom": {
    "text": [
      "Grandi gigli pendono in un arco sul foglio; i fiori sono chiari, gli steli verde scuro.",
      "Anche i gigli appartengono alla serie di fiori, uscita verso il 1833–1834 presso Nishimuraya Yohachi. Impressione nell’Art Institute of Chicago."
    ],
    "fact": "«Gigli», Art Institute of Chicago."
  },
  "hydrangeasw": {
    "text": [
      "Una rondine sfiora un’ortensia; le ombrelle rotonde riempiono il lato destro.",
      "Il foglio della serie di fiori e uccelli verso il 1833–1834 è nell’Art Institute of Chicago."
    ],
    "fact": "«Ortensia e rondine», Art Institute of Chicago."
  },
  "mornoglory": {
    "text": [
      "Le ipomee si avvolgono sul foglio; una piccola raganella siede tra i fiori.",
      "Il foglio appartiene alla stessa serie verso il 1833–1834. Impressione nell’Art Institute of Chicago."
    ],
    "fact": "«Ipomee e raganella», Art Institute of Chicago."
  },
  "choshisea": {
    "text": [
      "Un’onda ripida e scura solleva una barca al largo di Chōshi; la schiuma si rompe sulla prua.",
      "Il foglio appartiene alla serie «Mille immagini del mare» (Chie no umi), uscita verso il 1832–1834. Chōshi sta nella provincia di Shimōsa, sulla costa aperta."
    ],
    "fact": "«Chōshi nella provincia di Shimōsa», Wikimedia Commons, di pubblico dominio."
  },
  "kinufish": {
    "text": [
      "Sul fiume Kinu uomini stanno nell’acqua bassa e sollevano ceste; il pendio della riva è bruno-rossastro.",
      "Il foglio della serie del mare e dei fiumi verso il 1832–1834 è nel Museum of Fine Arts di Boston."
    ],
    "fact": "«Pesca con ceste nel fiume Kinu», Museum of Fine Arts, Boston."
  },
  "torchfish": {
    "text": [
      "Di notte le fiaccole splendono sull’acqua; uomini pescano sulla riva, nella provincia di Kai.",
      "Il foglio «Pesca alla luce delle fiaccole» appartiene alla serie «Mille immagini del mare», verso il 1832–1834."
    ],
    "fact": "«Pesca alla luce delle fiaccole nella provincia di Kai», Wikimedia Commons, di pubblico dominio."
  },
  "gotowhale": {
    "text": [
      "Al largo delle isole Gotō, barche circondano una balena; uomini sulle navi tengono arpioni e corde.",
      "Il foglio della serie «Mille immagini del mare» verso il 1832–1834 è nell’Art Institute of Chicago."
    ],
    "fact": "«Caccia alle balene al largo delle isole Gotō», Art Institute of Chicago."
  },
  "nobotosea": {
    "text": [
      "Su una riva quieta a Noboto, persone stanno nell’acqua bassa; ombrelli e barche orlano la riva.",
      "Noboto sta nella provincia di Shimōsa. Il foglio della serie del mare verso il 1832–1834 è appeso nel Metropolitan Museum of Art."
    ],
    "fact": "«Noboto nella provincia di Shimōsa», Metropolitan Museum of Art, New York."
  },
  "amiura": {
    "text": [
      "Una grande rete da pesca riempie quasi tutta la pagina; dietro si delinea il Fuji.",
      "Il foglio «Amiura no Fuji» proviene dalle «Cento vedute del monte Fuji» (Fugaku Hyakkei), che escono a partire dal 1834 in tre volumi, prima presso Eirakuya Tōshirō a Nagoya. Questa impressione è nella National Diet Library di Tokyo."
    ],
    "fact": "«Il Fuji dietro una rete (Amiura no Fuji)», National Diet Library, Tokyo."
  },
  "ashishiro": {
    "text": [
      "Uomini lavorano su un ponteggio alto di bambù e tavole; il Fuji sta dietro i pali.",
      "Anche «Ashishiro no Fuji» appartiene alle «Cento vedute», a partire dal 1834. L’impressione proviene dalla National Diet Library di Tokyo."
    ],
    "fact": "«Il Fuji con un ponteggio (Ashishiro no Fuji)», National Diet Library, Tokyo."
  },
  "chinowa": {
    "text": [
      "Persone passano attraverso un grande anello sacro di canne; attraverso l’apertura appare il Fuji.",
      "L’anello Chinowa appartiene a riti estivi di purificazione. Il foglio proviene dalle «Cento vedute del monte Fuji». Questa impressione è nella Library of Congress di Washington."
    ],
    "fact": "«Il Fuji all’anello Chinowa», Library of Congress, Washington."
  },
  "futomi": {
    "text": [
      "Dietro alberi e un pendio di villaggio, il Fuji si delinea sopra una vasta superficie.",
      "Il foglio «Futomi no Fuji» appartiene alle «Cento vedute», a partire dal 1834. Impressione nella Library of Congress."
    ],
    "fact": "«Futomi no Fuji», Library of Congress, Washington."
  },
  "mikiri": {
    "text": [
      "Davanti a una casa dal tetto aggettante lavora un uomo; il Fuji appare soltanto in parte, tagliato dall’architettura.",
      "Il titolo «Mikiri no Fuji» nomina una veduta ritagliata del monte. Il foglio proviene dalle «Cento vedute». Impressione nella Library of Congress."
    ],
    "fact": "«Mikiri no Fuji», Library of Congress, Washington."
  },
  "murasame": {
    "text": [
      "Viaggiatori in cappello e abito da pioggia attraversano un acquazzone; il Fuji sta pallido dietro la pioggia.",
      "«Murasame no Fuji» – il Fuji in un acquazzone passeggero – appartiene alle «Cento vedute», a partire dal 1834. Impressione nella Library of Congress."
    ],
    "fact": "«Il Fuji in un acquazzone passeggero (Murasame no Fuji)», Library of Congress, Washington."
  },
  "oigawafuji": {
    "text": [
      "Portatori guadano con viaggiatori in tinozze di legno il fiume Ōi; il Fuji accompagna l’attraversamento.",
      "Il guado dell’Ōi era un punto noto del Tōkaidō. Il foglio proviene dalle «Cento vedute». Impressione nella Library of Congress."
    ],
    "fact": "«L’attraversamento del fiume Ōi in tinozze», Library of Congress, Washington."
  },
  "sankifuji": {
    "text": [
      "Nel vapore profondo delle montagne il Fuji perde i contorni nitidi; in primo piano stanno alberi e una casa.",
      "Il titolo tramandato dice che la forma del monte si dissolve nel vapore della montagna. Il foglio appartiene alle «Cento vedute». Impressione nella Library of Congress."
    ],
    "fact": "«Il Fuji nel vapore profondo della montagna», Library of Congress, Washington."
  },
  "artistsfuji": {
    "text": [
      "Su un prato, uomini dispongono leggii e pennelli; il Fuji sta dietro un pino e un campo.",
      "Il foglio proviene dalle «Cento vedute del monte Fuji». Questa impressione è conservata nel Musée Guimet di Parigi (EO 1455)."
    ],
    "fact": "«Artisti si preparano a disegnare il monte Fuji», Musée Guimet, Parigi."
  },
  "fujitotomi": {
    "text": [
      "Attraverso i rami di un albero e sopra un tetto si vede il Fuji; le montagne di Tōtomi giacciono davanti.",
      "Anche questo foglio delle «Cento vedute» è nel Musée Guimet di Parigi (MA 7065)."
    ],
    "fact": "«Il monte Fuji nelle montagne di Tōtomi», Musée Guimet, Parigi."
  },
  "libai": {
    "text": [
      "Il poeta cinese Li Bai sta con un accompagnatore su uno spuntone di roccia e guarda verso una cascata alta.",
      "Il foglio appartiene alla serie «Specchio fedele di poesie cinesi e giapponesi» (Shiika shashin kyō), uscita verso il 1833–1834. Impressione nel Metropolitan Museum of Art."
    ],
    "fact": "«Li Bai contempla una cascata», Metropolitan Museum of Art, New York."
  },
  "sudongpo": {
    "text": [
      "Un cavaliere con un grande cappello tondo avanza nella neve; un servo cammina accanto al cavallo, il cielo è pieno di fiocchi.",
      "Il Musée Guimet di Parigi identifica la figura come il poeta cinese Su Dongpo. Il foglio appartiene alla serie dei poeti verso il 1833–1834 (inventario EO 1704)."
    ],
    "fact": "«Su Dongpo nella neve», Musée Guimet, Parigi."
  },
  "ministoru": {
    "text": [
      "Sotto un crescente di luna, tre uomini stanno e siedono presso un lago; le barche giacciono quiete, il Fuji albeggia all’orizzonte.",
      "Il Cleveland Museum of Art nomina l’alto ministro Tōru (822–895), figlio di un imperatore, come la figura rappresentata. Il foglio appartiene alla serie dei poeti verso il 1833–1835."
    ],
    "fact": "«Il ministro Tōru presso un lago sotto la luna», Cleveland Museum of Art."
  },
  "rushgather": {
    "text": [
      "Un uomo porta fasci di giunchi sopra un piccolo ponte; sopra il canneto sta la luna.",
      "Il foglio «Il raccoglitore di giunchi» appartiene alla serie «Specchio fedele di poesie cinesi e giapponesi». Impressione nel Cleveland Museum of Art."
    ],
    "fact": "«Il raccoglitore di giunchi», Cleveland Museum of Art."
  },
  "yoshinoch": {
    "text": [
      "I fiori di ciliegio riempiono le montagne di Yoshino; sotto gli alberi, piccole figure camminano e cavalcano.",
      "Il foglio appartiene alla serie in tre parti «Neve, luna e fiori» (Setsugekka), uscita verso il 1833 presso Nishimuraya Yohachi."
    ],
    "fact": "«Fiori di ciliegio a Yoshino», Metropolitan Museum of Art, New York."
  },
  "yodomoons": {
    "text": [
      "Sotto la luna piena, barche viaggiano sul fiume Yodo; in primo piano giacciono tetti, in lontananza montagne.",
      "Il foglio «Chiaro di luna sul fiume Yodo» appartiene alla serie «Neve, luna e fiori» verso il 1833. Questa impressione è nel Rijksmuseum di Amsterdam."
    ],
    "fact": "«Chiaro di luna sul fiume Yodo», Rijksmuseum, Amsterdam."
  },
  "sumidasnow": {
    "text": [
      "Il Sumida giace sotto la neve; una barca e un piccolo santuario stanno sulla riva invernale.",
      "Il terzo foglio della serie «Neve, luna e fiori» verso il 1833. Impressione nel Rijksmuseum di Amsterdam."
    ],
    "fact": "«Neve sul Sumida», Rijksmuseum, Amsterdam."
  },
  "phoenixob": {
    "text": [
      "Una fenice in rosso, verde e oro si avvolge su un fondo scuro – il soffitto dipinto di un carro festivo.",
      "Negli anni Quaranta Hokusai soggiorna più volte a Obuse, nella provincia di Shinano, su invito del mecenate Takai Kōzan. La fenice appartiene alle pitture di carri festivi; è conservata nello Hokusaikan di Obuse."
    ],
    "fact": "«Fenice (soffitto di carro festivo)», verso il 1844, Hokusaikan, Obuse."
  },
  "dragonob": {
    "text": [
      "Un drago si avvolge su un fondo rosso, circondato da onde stilizzate – anch’esso un soffitto di carro festivo di Obuse.",
      "Il pendant della fenice nasce verso il 1844, negli stessi anni dei soggiorni presso Takai Kōzan. Anche questo drago è conservato nello Hokusaikan di Obuse."
    ],
    "fact": "«Drago (soffitto di carro festivo)», verso il 1844, Hokusaikan, Obuse."
  },
  "thundergod": {
    "text": [
      "Nella parte alta della lunga pittura, il dio del tuono fluttua tra nubi nere spruzzate; linee rosse squarciano come lampi.",
      "Il quadro nasce nel 1847. Hokusai lo firma all’età di ottantotto anni (ottantasette secondo il computo occidentale). È appeso nella Freer Gallery of Art, Smithsonian Institution, Washington (F1900.47)."
    ],
    "fact": "«Il dio del tuono», 1847, Freer Gallery of Art, Smithsonian, Washington."
  },
  "tigersnow": {
    "text": [
      "Una tigre cammina attraverso la neve che cade, la testa alzata; l’iscrizione nomina l’anno 1849.",
      "Il rotolo verticale a inchiostro e colore su seta nasce nell’anno della morte di Hokusai. Si trova in collezione privata."
    ],
    "fact": "«Tigre nella neve», 1849, collezione privata. Fonte: Wikimedia Commons, di pubblico dominio."
  }
};
  for (var k in add) if (Object.prototype.hasOwnProperty.call(add, k)) pt[k] = add[k];
})();
