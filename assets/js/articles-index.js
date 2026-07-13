/* ============================================================
   ARTICLE REGISTRY — metadata only. The full article lives in
   articles/<slug>.html (one real page per article).

   To publish: 1) copy articles/_TEMPLATE.html to articles/<slug>.html
   and write your content;  2) add an entry at the TOP of this list;
   3) drop a 1600x900 image at assets/images/<slug>.png
   ============================================================ */

window.ARTICLE_INDEX = [
  {
    slug: "liquid-metal-batteries",
    category: "thesis",
    tag: "Investment Thesis",
    date: "2026-06-01",
    title: "Liquid Metal Batteries for Long-Duration Grid Storage",
    summary: "Cell chemistry is de-risked; the moat is molten-salt supply and thermal balance-of-plant. We map a credible sub-$20/kWh path at gigafactory scale."
  },
  {
    slug: "enzymatic-carbon-capture",
    category: "thesis",
    tag: "Investment Thesis",
    date: "2026-05-20",
    title: "Enzymatic Carbon Capture: When Biology Beats Amines",
    summary: "Carbonic anhydrase reactors cut regeneration energy by 40% on paper. We stress-test enzyme longevity and CapEx before the economics close at flue-gas scale."
  },
  {
    slug: "green-hydrogen-bottleneck",
    category: "technical",
    tag: "Technical Breakdown",
    date: "2026-05-08",
    title: "The Real Bottleneck in Green Hydrogen Isn't the Electrolyzer",
    summary: "Stack efficiency dominates the headlines, but water treatment and compression quietly own the OpEx. A first-principles look at where the energy actually goes."
  },
  {
    slug: "solid-state-sodium",
    category: "thesis",
    tag: "Investment Thesis",
    date: "2026-04-22",
    title: "Deal Memo: Solid-State Sodium for Behind-the-Meter Storage",
    summary: "Abundant materials and a benign safety profile make the pitch easy. The diligence question is cycle life at temperature — and whether it survives real duty cycles."
  },
  {
    slug: "dac-tea-models",
    category: "technical",
    tag: "Technical Breakdown",
    date: "2026-04-05",
    title: "Why Most Direct Air Capture TEA Models Are Wrong",
    summary: "Sorbent degradation and parasitic load rarely make it into the pitch-deck cost curve. We rebuild the model with the terms the vendors leave out."
  },
  {
    slug: "precision-fermentation-triangle",
    category: "technical",
    tag: "Technical Breakdown",
    date: "2026-03-18",
    title: "Precision Fermentation: Reading the Titer-Rate-Yield Triangle",
    summary: "A single strain metric can hide a broken process. How to interrogate scale-up claims in industrial biotech before the bioreactor tells you the truth."
  },
];
