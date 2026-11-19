/* Masilano print shop — products, sizes and Beispiel-VK in CHF.
   checkoutUrl empty = no live checkout (like the rankings API flag). */
window.MASILANO_SHOP_CONFIG = {
  version: '10.29',
  currency: 'CHF',
  shipTo: ['CH'],
  checkoutUrl: '',
  provider: 'gelato',
  minDpi: 150,
  idealDpi: 300,
  /* 1 EUR = 0.94 CHF, mid-November 2026 assumption for converting the documented EUR examples. */
  eurChf: 0.94,
  /* Example retail prices, not live quotes. 30x40 Fine-Art / Leinwand / gerahmte Leinwand
     follow the concept's Beispiel-VK (39.90 / 69.00 / 129.00 EUR on 12x16 in, Gelato to DE,
     podbenchmark 15–16 Nov 2026) rounded to Swiss .00/.90 amounts. Poster is stepped
     below Fine-Art (no public poster row in that table). Other sizes scale by area
     with a taper. Shipping to CH is included in these examples. Live CH prices must
     later come from the Gelato quote API. */
  sizes: [
    { id: 's2130', wCm: 21, hCm: 30 },
    { id: 's3040', wCm: 30, hCm: 40 },
    { id: 's4050', wCm: 40, hCm: 50 },
    { id: 's5070', wCm: 50, hCm: 70 }
  ],
  products: [
    { id: 'poster',  prices: { s2130: 19.00, s3040: 24.90, s4050: 39.00, s5070: 59.00 } },
    { id: 'fineart', prices: { s2130: 29.00, s3040: 39.90, s4050: 59.00, s5070: 89.00 }, preferred: true },
    { id: 'canvas',  prices: { s2130: 49.00, s3040: 69.00, s4050: 99.00, s5070: 149.00 } },
    { id: 'framed',  prices: { s2130: 89.00, s3040: 129.00, s4050: 179.00, s5070: 249.00 }, frames: true }
  ],
  frames: [
    { id: 'natural', available: true },
    { id: 'walnut',  available: true },
    { id: 'black',   available: true },
    /* Not in Gelato's public catalogue (modern wood/aluminium only). Later special line. */
    { id: 'gold',    available: false }
  ],
  templates: [
    { id: 'original', available: true },
    /* Own coloring needs the user's colours transferred onto the Commons original — not a screenshot. */
    { id: 'colored',  available: false }
  ]
};
