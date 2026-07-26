const markets = {
  usa: {
    title: "United States",
    subtitle: "Defend the Mustang's home-market performance crown while converting track-day aspiration into premium Dark Horse demand.",
    kicker: "USA market play",
    headline: "Race track feel; American need for speed",
    summary: "Lead with authentic American performance, motorsport credibility and personalization that makes the Dark Horse feel both rare and reachable.",
    image: "assets/us-mustang.jpg",
    alt: "Ford Mustang Dark Horse for the United States strategy",
    metrics: ["5.0L", "500 hp", "Track"],
    metricLabels: ["Coyote V8 hero", "Performance story", "Positioning edge"],
    callouts: [
      { text: "Track aero story", x: "28%", y: "45%" },
      { text: "Coyote V8 proof point", x: "55%", y: "19%" },
      { text: "Premium wheel package", x: "60%", y: "61%" }
    ],
    sections: {
      product: "Offer handling package, appearance packs and track-day accessories; keep the manual-transmission narrative prominent for enthusiast credibility.",
      pricing: "Use premium-plus pricing above GT with finance offers tied to limited allocations, loyalty incentives and high-margin personalization bundles.",
      branding: "Frame Dark Horse as the modern evolution of American muscle: precise, serious and engineered for drivers who want a road-to-track halo.",
      imc: "Blend motorsport content, dealer track events, creator test drives, configurator retargeting and launch films around V8 sound and lap-time proof.",
      logistics: "Prioritize allocation to performance-certified dealers, support quick parts availability and use regional events to forecast accessory demand.",
      drivers: "Home-market pride, track-day culture, customization, V8 scarcity and the emotional pull of Mustang heritage create high purchase intent."
    }
  },

  uk: {
    title: "United Kingdom",
    subtitle: "Position Dark Horse as a rare, high-emotion performance import that stands apart from German coupes and electrified hot hatches.",
    kicker: "UK market play",
    headline: "An emission efficient rarity",
    summary: "A disciplined UK strategy should emphasize precision handling, collector scarcity and unmistakable V8 character in a market moving quickly toward electrification.",
    image: "assets/uk-mustang.jpg",
    alt: "Ford Mustang Dark Horse for the United Kingdom strategy",
    metrics: ["RHD", "Limited", "V8"],
    metricLabels: ["Market fit", "Supply signal", "Emotional hook"],
    callouts: [
      { text: "Right-hand-drive appeal", x: "41%", y: "40%" },
      { text: "B-road handling tune", x: "67%", y: "53%" },
      { text: "Collector specification", x: "20%", y: "50%" }
    ],
    sections: {
      product: "Tune messaging around right-hand-drive usability, MagneRide composure, premium cabin materials and options that suit narrower UK roads.",
      pricing: "Maintain scarcity-led premium pricing with transparent ownership-cost tools, trade-in support and curated specifications to simplify purchase decisions.",
      branding: "Present Dark Horse as an iconoclastic alternative to European performance cars: less clinical, more visceral and unmistakably Mustang.",
      imc: "Use Goodwood-style activations, performance media reviews, YouTube comparison content and CRM invitations for closed-road or circuit experiences.",
      logistics: "Concentrate stock with specialist Ford performance retailers, stage demonstrators in metropolitan hubs and protect delivery windows from import friction.",
      drivers: "Rarity, sound, brand theatre, enthusiast clubs and demand for distinctive combustion performance drive consideration despite regulatory pressure."
    }
  },

  kuwait: {
    title: "Kuwait",
    subtitle: "Elevate Dark Horse as a status-led performance coupe engineered for heat, premium personalization and high-visibility urban cruising.",
    kicker: "Kuwait Market Play: Hot Climate Adaptor",
    headline: "Fuse V8 theatre with luxury-performance status.",
    summary: "The Kuwait launch should combine desert-climate confidence, premium concierge retail and bold visual packages that turn the Dark Horse into a social statement.",
    image: "assets/kuwait-mustang.png",
    alt: "Ford Mustang Dark Horse for Kuwait strategy",
    metrics: ["Heat", "Luxury", "V8"],
    metricLabels: ["Climate proof", "Retail tone", "Demand trigger"],
    callouts: [
      { text: "Cooling confidence", x: "15%", y: "56%" },
      { text: "Premium interior focus", x: "56%", y: "31%" },
      { text: "High-impact stance", x: "66%", y: "60%" }
    ],
    sections: {
      product: "Highlight GCC-ready cooling, summer reliability, ceramic tint recommendations, premium trims and appearance packages with high visual presence.",
      pricing: "Use prestige pricing with VIP reservation deposits, bundled service plans and accessory packages that increase perceived exclusivity.",
      branding: "Position Dark Horse as the most assertive Mustang: a luxury-adjacent V8 performance statement for confident, status-oriented buyers.",
      imc: "Deploy Arabic-first social films, mall displays, influencer night drives, Ramadan-season CRM and invite-only preview events for high-net-worth prospects.",
      logistics: "Plan shipments around peak seasonal demand, ensure air-conditioning and tire support, and coordinate concierge delivery through flagship dealers.",
      drivers: "Affluence, car culture, personalization, performance cruising and appetite for distinctive V8 coupes make Kuwait a strong halo market."
    }
  }
};

const priceComparisons = [
  { market: "U.S. Standard", country: "usa", value: 62230, local: "$62,230" },
  { market: "U.S. Premium", country: "usa", value: 66225, local: "$66,225" },
  { market: "Kuwait Starting Price", country: "kuwait", value: 72698, local: "KWD 22,536.50" },
  { market: "U.K. Manual", country: "uk", value: 94320, local: "£70,740" },
  { market: "U.K. Automatic", country: "uk", value: 96987, local: "£72,740" }
];

const chartDatasets = {
  executive: [
    { label: "Target markets", country: "global", value: 3 },
    { label: "Standardized global features", country: "global", value: 8 },
    { label: "Localized features discussed", country: "global", value: 16 },
    { label: "Vehicle price variants", country: "global", value: 5 },
    { label: "Pricing models", country: "global", value: 3 },
    { label: "Adopter-stage categories", country: "global", value: 2 },
    { label: "Logistics environments", country: "global", value: 3 }
  ],
  standardization: [
    { label: "Shared standardized features", country: "global", value: 8 },
    { label: "United States localized features", country: "usa", value: 3 },
    { label: "United Kingdom localized features", country: "uk", value: 6 },
    { label: "Kuwait localized features", country: "kuwait", value: 7 }
  ],
  brandThemes: [
    { label: "United States", country: "usa", value: 5 },
    { label: "United Kingdom", country: "uk", value: 5 },
    { label: "Kuwait", country: "kuwait", value: 4 }
  ],
  pricingPressures: [
    { label: "Kuwait", country: "kuwait", value: 5 },
    { label: "United Kingdom", country: "uk", value: 3 }
  ],
  production: [
    { label: "Export from the United States", country: "usa", value: 3 },
    { label: "Potential Kuwait assembly", country: "kuwait", value: 5 },
    { label: "Potential United Kingdom assembly", country: "uk", value: 5 }
  ],
  imcChannels: [
    { label: "United States", country: "usa", value: 4 },
    { label: "United Kingdom", country: "uk", value: 1 },
    { label: "Kuwait", country: "kuwait", value: 7 }
  ],
  logisticsChallenges: [
    { label: "United States", country: "usa", value: 2 },
    { label: "United Kingdom", country: "uk", value: 3 },
    { label: "Kuwait", country: "kuwait", value: 3 }
  ]
};

const chartInstances = {};
let activeMarketKey = "usa";

const recommendationTitles = {
  product: "Product Adaptation",
  pricing: "Pricing Strategy",
  branding: "Branding",
  imc: "IMC",
  logistics: "Logistics",
  drivers: "Market Drivers"
};

let activeRecommendationKey = null;

const viewConfig = {
  compare: {
    hash: "#compare",
    nav: [["Prices", "price-chart-title"], ["Framework", "framework-title"], ["Diffusion", "diffusion-title"], ["Branding", "branding-title"], ["Pricing Drivers", "pricing-drivers-title"], ["Production", "production-title"], ["IMC", "imc-title"], ["Logistics", "logistics-title"], ["Conclusion", "conclusion-title"]]
  },
  usa: { hash: "#united-states", market: "usa", title: "United States Market Focus" },
  uk: { hash: "#united-kingdom", market: "uk", title: "United Kingdom Market Focus" },
  kuwait: { hash: "#kuwait", market: "kuwait", title: "Kuwait Market Focus" }
};


const sharedMustangFeatures = ["5.0L V8 engine", "Sport-tuned suspension", "Bold sports-car exterior styling", "Quad tailpipes", "Blue-knobbed gear shift", "Distinctive brake calipers", "Consistent luxury-performance positioning", "MagneRide Damping System"];

const productAdaptationGroups = {
  usa: [
    { label: "Shared Mustang Features", details: sharedMustangFeatures },
    { label: "Performance Adaptations", details: ["Performance positioning", "Driver-assist technologies", "Track aero story", "Coyote V8 proof point"] },
    { label: "Appearance and Personalization", details: ["Interior luxury", "Handling package, appearance packs and track-day accessories", "Premium wheel package"] },
    { label: "Track and Usability Features", details: ["Promotions tailored to specific consumer groups", "Personalization that makes the Dark Horse feel both rare and reachable"] }
  ],
  uk: [
    { label: "Shared Mustang Features", details: sharedMustangFeatures },
    { label: "Right-Hand-Drive Adaptation", details: ["Right-hand-drive appeal", "Right-hand-drive usability"] },
    { label: "Safety and Regulatory Requirements", details: ["Slightly lower engine output because of stricter emissions requirements", "Pedestrian and cyclist detection", "Lane-keeping aid", "Adaptive cruise control", "Emergency braking systems", "Safety and emissions compliance emphasis"] },
    { label: "Road and Climate Usability", details: ["MagneRide composure", "Options that suit narrower UK roads", "B-road handling tune"] },
    { label: "Collector and Performance Features", details: ["Collector scarcity", "Collector specification", "Unmistakable V8 character"] }
  ],
  kuwait: [
    { label: "Shared Mustang Features", details: sharedMustangFeatures },
    { label: "Cooling & Climate Adaptation", details: ["GCC-ready cooling", "Summer reliability", "Cooling confidence", "Harsh desert climate considerations"] },
    { label: "Safety Features", details: ["Child-restraint systems", "Crash-severity sensors", "Cross-traffic alert", "Pre-collision assist", "Forward-collision warning", "Advanced safety"] },
    { label: "Luxury & Interior Adaptation", details: ["Luxury, visual presence, and safety emphasis", "Premium trims", "Premium interior focus"] },
    { label: "Appearance & Road Presence", details: ["Visual customization", "Appearance packages with high visual presence", "High-impact stance"] }
  ]
};

function makeProductAccordion(marketKey) {
  const groups = productAdaptationGroups[marketKey];
  return `<div class="product-accordion" data-product-accordion="${marketKey}"><div class="product-accordion-labels">${groups.map((group, index) => `<button type="button" class="product-accordion-toggle" data-product-group="${index}" aria-expanded="false" aria-controls="product-accordion-panel-${marketKey}"><span>${group.label} (${group.details.length})</span><b aria-hidden="true">+</b></button>`).join("")}</div><div class="product-accordion-panel" id="product-accordion-panel-${marketKey}" hidden aria-live="polite"></div></div>`;
}

function openProductAccordion(button) {
  const accordion = button.closest("[data-product-accordion]");
  if (!accordion) return;
  const marketKey = accordion.dataset.productAccordion;
  const group = productAdaptationGroups[marketKey][Number(button.dataset.productGroup)];
  const panel = accordion.querySelector(".product-accordion-panel");
  const isOpen = button.getAttribute("aria-expanded") === "true";
  accordion.querySelectorAll(".product-accordion-toggle").forEach((toggle) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("active");
    const indicator = toggle.querySelector("b");
    if (indicator) indicator.textContent = "+";
  });
  if (isOpen) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  button.setAttribute("aria-expanded", "true");
  button.classList.add("active");
  const indicator = button.querySelector("b");
  if (indicator) indicator.textContent = "−";
  panel.hidden = false;
  panel.innerHTML = `<h5>${group.label}</h5>${makeList(group.details)}`;
}

const countryFocusData = {
  usa: {
    price: ["Standard model: $62,230", "Premium model: $66,225", "Additional destination charge", "Incentives for military members, students, and people with disabilities", "Promotion through television, digital platforms, dealerships, and targeted offers"],
    features: ["Interior luxury", "Driver-assist technologies", "Promotions tailored to specific consumer groups"],
    adoption: ["Adoption stage: Early Adopters", "Appeal: Performance, technology, personalization", "Rigid cost-plus pricing"],
    branding: ["Freedom", "Excitement", "Independence", "American car culture", "Aggressive styling", "Raw V8 power", "Personal expression", "Open-road and driving-thrill messaging"],
    imc: ["Bold digital marketing. Advantage: reach, engagement, personalization, emotional impact. Constraint: saturation and short attention spans.", "Social media campaigns focused on power, individuality, and speed. Constraint: competing social content.", "Targeted public relations. Advantage: personalization and emotional impact.", "Television promotion. Advantage: awareness and reach."],
    logistics: ["Vast distances between states", "Long-haul transportation requirements", "Dependence on regional distribution centers", "Need for coordinated nationwide delivery"],
    pricingDrivers: ["Domestic benchmark", "Foreign-market political, import, currency, regulatory, and taxation pressures were not evaluated for the U.S. market."]
  },
  uk: {
    price: ["Manual model: £70,740, approximately $94,320", "Automatic model: £72,740, approximately $96,987"],
    features: ["Slightly lower engine output because of stricter emissions requirements", "Pedestrian and cyclist detection", "Lane-keeping aid", "Adaptive cruise control", "Emergency braking systems", "Safety and emissions compliance emphasis"],
    adoption: ["Adoption stage: Early Majority", "Appeal: Safety, compliance, road usability", "Flexible cost-plus pricing"],
    branding: ["Power", "Individuality", "Refined sensory driving experience", "Active valve exhaust and controllable vehicle sound", "Enhanced acceleration", "Performance balanced with regulatory responsibility"],
    imc: ["Corporate social responsibility plus environmental responsibility. Advantage: trust and credibility. Limitation: reduced emotional appeal."],
    logistics: ["Narrow streets", "Urban congestion", "Limited space in city centers", "Complicated last-mile delivery", "Dealership-access challenges", "Strict emissions zones"],
    pricingDrivers: ["Environmental regulation: Applicable", "Vehicle taxation: Applicable", "Consumer value expectations: Applicable", "CO₂ regulations, first-year road tax, continuing annual charges, and environmental expectations affect higher ownership costs, compliance pressure, Mustang price, and value perception."]
  },
  kuwait: {
    price: ["Starting price: KWD 22,536.50, approximately $72,698"],
    features: ["Visual customization", "Child-restraint systems", "Crash-severity sensors", "Cross-traffic alert", "Pre-collision assist", "Forward-collision warning", "Luxury, visual presence, and safety emphasis"],
    adoption: ["Adoption stage: Early Adopters", "Appeal: Luxury, prestige, advanced safety", "Dynamic incremental pricing"],
    branding: ["Speed", "Durability", "Luxury", "Status", "High-performance vehicle culture", "Visual upgrades", "Powerful engine", "Advanced safety"],
    imc: ["Targeted social media with cultural and regulatory localization. Constraint: language nuances and consumer-value differences.", "Targeted social media supports luxury, exclusivity, and road-safety messaging.", "Television supports localized luxury and road-safety messaging.", "Billboards support local influence and awareness.", "Print media supports localized awareness.", "Personal selling. Advantage: personalized selling and strong local influence. Limitation: more employees, time, and resources.", "Showroom experiences support personalized local influence."],
    logistics: ["Harsh desert climate", "Limitations at Shuwaikh Port", "Outdated equipment", "Limited automation", "Insufficient port facilities", "Customs-clearance delays", "Vehicle-handling delays", "Frustration among clearing and forwarding agents"],
    pricingDrivers: ["Political pressure: Applicable", "Economic pressure: Applicable", "Import costs: Applicable", "Currency pressure: Applicable", "Consumer value expectations: Applicable", "Political gridlock, reduced government spending, falling oil prices, tariffs and import costs, and currency fluctuations affect purchasing power, economic uncertainty, Mustang price, and value perception."]
  }
};

const pricingDriverStates = {
  usa: { title: "United States — Domestic Benchmark", states: ["not-assessed", "not-assessed", "not-assessed", "not-assessed", "not-assessed", "not-assessed", "not-assessed"], note: "The United States functions as the domestic pricing benchmark in this analysis. Foreign-market political, import, currency, regulatory, and taxation pressures were not evaluated for the U.S. market.", details: ["Standard model: $62,230", "Premium model: $66,225", "Additional destination charge", "Relevant incentives and targeted offers"] },
  uk: { title: "United Kingdom — Foreign-Market Pricing Pressures", states: ["not-emphasized", "not-emphasized", "not-emphasized", "not-emphasized", "applicable", "applicable", "applicable"], note: "CO₂ regulations, first-year road tax, continuing annual charges, and environmental expectations affect higher ownership costs and value perception.", details: ["Environmental regulation: Applicable", "Vehicle taxation: Applicable", "Consumer value expectations: Applicable"] },
  kuwait: { title: "Kuwait — Foreign-Market Pricing Pressures", states: ["applicable", "applicable", "applicable", "applicable", "not-emphasized", "not-emphasized", "applicable"], note: "Political gridlock, reduced government spending, falling oil prices, tariffs and import costs, and currency fluctuations affect purchasing power and value perception.", details: ["Political pressure: Applicable", "Economic pressure: Applicable", "Import costs: Applicable", "Currency pressure: Applicable", "Consumer value expectations: Applicable"] }
};

const pricingDriverLabels = [
  ["Political", "Political pressure"], ["Economic", "Economic pressure"], ["Import", "Import costs"], ["Currency", "Currency pressure"], ["Environmental", "Environmental regulation"], ["Taxation", "Vehicle taxation"], ["Consumer value", "Consumer value expectations"]
];

let activeViewKey = "compare";
let activePricingDriverKey = "usa";

function renderPricingDriverPanel(marketKey) {
  const panel = document.getElementById("pricing-driver-panel");
  const data = pricingDriverStates[marketKey];
  if (!panel || !data) return;
  activePricingDriverKey = marketKey;
  document.querySelectorAll("[data-pricing-driver]").forEach((button) => {
    const isActive = button.dataset.pricingDriver === marketKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.setAttribute("aria-expanded", String(isActive));
  });
  if (marketKey === "usa") {
    panel.innerHTML = `<h4>${data.title}</h4><p>${data.note}</p><ul class="supporting-pricing-list">${data.details.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    return;
  }
  const bars = data.states.map((state, index) => {
    const [shortLabel, fullLabel] = pricingDriverLabels[index];
    const label = state === "applicable" ? "Applicable" : state === "not-emphasized" ? "Not emphasized" : "Not assessed";
    return `<div class="pricing-driver-bar ${state}" aria-label="${fullLabel}: ${label}" title="${fullLabel}: ${label}"><span></span><strong>${shortLabel}</strong><em>${label}</em></div>`;
  }).join("");
  panel.innerHTML = `<h4>${data.title}</h4><div class="pricing-driver-legend"><span class="applicable">Applicable</span><span class="not-emphasized">Not emphasized</span><span class="not-assessed">Not assessed</span></div><div class="pricing-driver-bars">${bars}</div><p>${data.note}</p><details><summary>View supporting pricing details</summary><ul>${data.details.map((item) => `<li>${item}</li>`).join("")}</ul></details>`;
}

function makeList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function makeDetail(label, items) {
  return `<details><summary>${label}</summary>${Array.isArray(items) ? makeList(items) : `<p>${items}</p>`}</details>`;
}

function makePriceBars(marketKey) {
  const priceData = {
    usa: [["Standard", "$62,230", 62230], ["Premium", "$66,225", 66225]],
    uk: [["Manual", "£70,740 / ~$94,320", 70740], ["Automatic", "£72,740 / ~$96,987", 72740]],
    kuwait: [["Starting price", "KWD 22,536.50 / ~$72,698", 22536.5]]
  }[marketKey];
  const max = Math.max(...priceData.map(([, , value]) => value));
  return `<div class="country-price-bars country-price-bars-vertical">${priceData.map(([label, value, amount]) => `<div class="country-price-row"><em>${value}</em><span><i style="--bar:${Math.max((amount / max) * 100, 48)}%"></i></span><strong>${label}</strong></div>`).join("")}</div>`;
}

function makeAdoptionStrip(marketKey) {
  const active = marketKey === "uk" ? "Early Majority" : "Early Adopters";
  const markerX = marketKey === "uk" ? 560 : marketKey === "kuwait" ? 340 : 270;
  const markerY = marketKey === "uk" ? 86 : marketKey === "kuwait" ? 132 : 210;
  const label = markets[marketKey].title;
  return `<figure class="mini-diffusion-curve" aria-label="${label} diffusion adoption curve marker"><svg viewBox="0 0 760 260" preserveAspectRatio="xMidYMid meet" role="img" focusable="false"><path class="mini-curve-fill" d="M50 218 C120 216 150 188 190 150 C245 96 300 50 380 44 C460 50 515 96 570 150 C610 188 640 216 710 218 L50 218 Z"></path><path class="mini-curve-line" d="M50 218 C120 216 150 188 190 150 C245 96 300 50 380 44 C460 50 515 96 570 150 C610 188 640 216 710 218"></path><g class="mini-stages">${["Innovators", "Early Adopters", "Early Majority", "Late Majority", "Laggards"].map((stage, index) => `<text class="${stage === active ? "active" : ""}" x="${90 + index * 145}" y="244">${stage}</text>`).join("")}</g><line class="mini-marker-line" x1="${markerX}" y1="${markerY}" x2="${markerX}" y2="218"></line><circle class="mini-marker" cx="${markerX}" cy="${markerY}" r="8"></circle><text class="mini-marker-label" x="${markerX}" y="${markerY - 18}">${label}: ${active}</text></svg><figcaption>${active} placement summarizes this market's adoption role in the project analysis.</figcaption></figure>`;
}

function makeBrandBranches(marketKey, themes) {
  const showAllThemes = ["usa", "uk", "kuwait"].includes(marketKey);
  const visibleThemes = showAllThemes ? themes : themes.slice(0, 6);
  return `<div class="country-brand-node"><strong>${markets[marketKey].title} Brand Position</strong><div>${visibleThemes.map((theme) => `<span>${theme}</span>`).join("")}</div></div>`;
}

function makePricingDriverBarsForCountry(marketKey) {
  const data = pricingDriverStates[marketKey];
  if (data.states.every((state) => state === "not-assessed")) {
    return `<p>${data.note}</p><ul class="supporting-pricing-list">${data.details.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
  return `<div class="pricing-driver-bars country-driver-bars">${data.states.map((state, index) => ({ state, index })).filter(({ state }) => state !== "not-assessed").map(({ state, index }) => {
    const [shortLabel, fullLabel] = pricingDriverLabels[index];
    const label = state === "applicable" ? "Applicable" : "Not emphasized";
    return `<div class="pricing-driver-bar ${state}" aria-label="${fullLabel}: ${label}"><span></span><strong>${shortLabel}</strong><em>${label}</em></div>`;
  }).join("")}</div><p>${data.note}</p>`;
}

function makeFlow(title, steps, constraint) {
  return `<div class="country-flow"><strong>${title}</strong><div>${steps.map((step, index) => `${index ? '<i aria-hidden="true">→</i>' : ''}<span>${step}</span>`).join("")}</div><p>${constraint}</p></div>`;
}

function renderCountryFocus(marketKey) {
  const container = document.getElementById("country-focus-grid");
  const title = document.getElementById("country-focus-title");
  const note = document.getElementById("country-focus-note");
  const data = countryFocusData[marketKey];
  const market = markets[marketKey];
  const isUnitedStates = marketKey === "usa";
  const isUnitedKingdom = marketKey === "uk";
  const isKuwait = marketKey === "kuwait";
  const removeSecondaryDetails = isUnitedStates || isUnitedKingdom || isKuwait;
  if (!container || !title || !data || !market) return;
  title.textContent = `${market.title} Visual Strategy Dashboard`;
  if (note) note.textContent = "Country-specific strategy details gathered from the dashboard research.";
  const countryFocusHeading = document.getElementById("country-focus")?.querySelector(":scope > .paper-heading");
  if (countryFocusHeading) countryFocusHeading.hidden = marketKey === "kuwait";
  const imcSteps = {
    usa: ["Performance audience", "Digital, social, television, public relations, dealer track events, creator test drives", "Awareness, engagement, and track-day aspiration", "Constraint: saturation and short attention spans"],
    uk: ["Compliance-aware enthusiasts", "CSR, environmental responsibility, performance media, YouTube comparisons, CRM invitations, circuit experiences", "Trust with measured performance desire", "Constraint: balancing emotional appeal with responsibility and compliance"],
    kuwait: ["Luxury-status buyers", "Social media, television, billboards, print, personal selling, showroom experiences, localized events", "Exclusivity, road-safety relevance, and high-visibility desire", "Constraint: cultural, language, and regulatory localization"]
  }[marketKey];
  const logisticsSteps = {
    usa: ["Long-distance transportation", "Distribution-center dependence"],
    uk: ["Urban congestion", "Last-mile access", "Emissions-zone restrictions"],
    kuwait: ["Port infrastructure", "Customs and handling delays", "Climate exposure"]
  }[marketKey];
  const productDetails = removeSecondaryDetails ? "" : makeDetail("View Product Adaptation Details", data.features);
  const priceDetails = removeSecondaryDetails ? "" : makeDetail("View Pricing Details", data.price);
  const adoptionDetails = removeSecondaryDetails ? "" : makeDetail("View Adoption Analysis", data.adoption);
  const brandingDetails = removeSecondaryDetails ? "" : makeDetail("View Full Branding Strategy", data.branding);
  const pricingDriverDetail = marketKey === "usa" || removeSecondaryDetails ? "" : makeDetail("View Pricing-Driver Details", data.pricingDrivers);
  const imcDetails = removeSecondaryDetails ? "" : makeDetail("View IMC Details", data.imc);
  const logisticsDetails = removeSecondaryDetails ? "" : makeDetail("View Logistics Details", data.logistics);
  const usaPriceInformation = isUnitedStates ? `<div class="country-visible-information" aria-label="Additional United States pricing information"><strong>Additional pricing and promotion context</strong>${makeList(data.price.slice(2))}</div>` : "";
  const usaAdoptionLabels = isUnitedStates ? `<div class="adoption-support-grid"><div><strong>Audience Priority</strong><span>Performance, technology, personalization</span></div><div><strong>Pricing Model</strong><span>Rigid cost-plus pricing</span></div></div>` : "";
  const ukAdoptionLabels = isUnitedKingdom ? `<div class="adoption-support-grid"><div><strong>Audience Priority</strong><span>Safety, compliance, road usability</span></div><div><strong>Pricing Model</strong><span>Flexible cost-plus pricing</span></div></div>` : "";
  const kuwaitAdoptionLabels = isKuwait ? `<div class="adoption-support-grid"><div><strong>Audience Priority</strong><span>Luxury, prestige, advanced safety</span></div><div><strong>Pricing Model</strong><span>Dynamic incremental pricing</span></div></div>` : "";
  const kuwaitImcInformation = isKuwait ? `<div class="kuwait-visible-information" aria-label="Complete Kuwait IMC information"><strong>Channels, localization, and execution considerations</strong>${makeList([
    ...data.imc,
    "Arabic-first social films, mall displays, influencer night drives, and Ramadan-season CRM",
    "Invite-only previews for high-net-worth prospects",
    "Cultural boundaries must be considered alongside language nuances and consumer-value differences",
    "Staffing, time, and resource limitations related to personal selling"
  ])}</div>` : "";
  const kuwaitLogisticsInformation = isKuwait ? `<div class="kuwait-visible-information" aria-label="Complete Kuwait logistics information"><strong>Supporting logistics factors</strong>${makeList(data.logistics)}</div>` : "";
  const ukImcInformation = isUnitedKingdom ? `<div class="country-visible-information" aria-label="Complete United Kingdom IMC information"><strong>Channels, activations, and communication considerations</strong>${makeList([
    "Compliance-aware enthusiasts",
    "Corporate social responsibility and environmental responsibility",
    "Performance media and YouTube comparison content",
    "CRM invitations for closed-road or circuit experiences",
    "Goodwood-style activations",
    "Trust and credibility",
    "Reduced emotional appeal",
    "Balancing emotional appeal with responsibility and compliance"
  ])}</div>` : "";
  const ukLogisticsInformation = isUnitedKingdom ? `<div class="country-visible-information" aria-label="Complete United Kingdom logistics information"><strong>Retail, delivery, and access considerations</strong>${makeList([
    ...data.logistics,
    "Last-mile access",
    "Emissions-zone restrictions",
    "Specialist Ford performance retailers",
    "Metropolitan demonstrator hubs",
    "Import-friction delivery risks"
  ])}</div>` : "";
  const usaImcInformation = isUnitedStates ? `<div class="country-visible-information" aria-label="Complete United States IMC information"><strong>Channels, proof points, and communication considerations</strong>${makeList([
    "Performance audience",
    "Digital marketing and social media",
    "Television and public relations",
    "Dealer track events and creator test drives",
    "Configurator retargeting and launch films",
    "V8 sound and lap-time proof",
    "Reach, engagement, personalization, emotional impact, and awareness",
    "Saturation, short attention spans, and competing social content"
  ])}</div>` : "";
  const usaLogisticsInformation = isUnitedStates ? `<div class="country-visible-information" aria-label="Complete United States logistics information"><strong>Distribution, dealer, and demand considerations</strong>${makeList([
    ...data.logistics,
    "Performance-certified dealer allocation",
    "Quick parts availability",
    "Regional event demand forecasting"
  ])}</div>` : "";
  const adoptionCardClass = isKuwait ? " kuwait-adoption-card" : "";
  const adoptionCard = `<article class="country-story-card${adoptionCardClass}" id="country-adoption"><h4>Adoption Stage</h4>${makeAdoptionStrip(marketKey)}${usaAdoptionLabels}${ukAdoptionLabels}${kuwaitAdoptionLabels}${adoptionDetails}</article>`;
  container.innerHTML = `
    <article class="country-story-card" id="country-product"><h4>Product Adaptation</h4>${makeProductAccordion(marketKey)}<div class="country-summary-band"><span>Shared Mustang identity remains the base while visible adaptations respond to local expectations.</span></div>${productDetails}</article>
    <article class="country-story-card" id="country-price"><h4>Local Price Visualization</h4>${makePriceBars(marketKey)}<p>Local price references remain tied to the project pricing notes and currency context.</p>${usaPriceInformation}${priceDetails}</article>
    ${adoptionCard}
    <article class="country-story-card" id="country-branding"><h4>Branding Strategy</h4>${makeBrandBranches(marketKey, data.branding)}<p>Brand positioning translates the global Mustang identity into market-specific emphasis.</p>${brandingDetails}</article>
    <article class="country-story-card" id="country-pricing-drivers"><h4>Pricing-Driver Visualization</h4>${makePricingDriverBarsForCountry(marketKey)}${pricingDriverDetail}</article>
    <article class="country-story-card" id="country-imc"><h4>IMC Pathway</h4>${makeFlow("Audience Priority → Communication Tools → Intended Response → Constraint", imcSteps, imcSteps[3])}${usaImcInformation}${ukImcInformation}${kuwaitImcInformation}${imcDetails}</article>
    <article class="country-story-card" id="country-logistics"><h4>Logistics Flow</h4>${makeFlow("Logistics process", logisticsSteps, data.logistics[0])}${usaLogisticsInformation}${ukLogisticsInformation}${kuwaitLogisticsInformation}${logisticsDetails}</article>
  `;
}


function updateSectionNav(viewKey) {
  const nav = document.querySelector(".sidebar-section-nav");
  if (!nav) return;
  const streamlinedCountryNav = [["Product", "country-product"], ["Price", "country-price"], ["Adoption", "country-adoption"], ["Branding", "country-branding"], ["Pricing Drivers", "country-pricing-drivers"], ["IMC", "country-imc"], ["Logistics", "country-logistics"], ["Recommendations", "recommendation-title"]];
  const links = viewKey === "compare" ? viewConfig.compare.nav : streamlinedCountryNav;
  nav.innerHTML = links.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("");
}

let globalFrameworkMarkup = "";

function renderGlobalFramework() {
  return globalFrameworkMarkup;
}

const frameworkFeatures = {
  shared: sharedMustangFeatures,
  usa: ["Interior luxury", "Driver-assist technologies", "Promotions tailored to specific consumer groups"],
  uk: ["Slightly lower engine output because of stricter emissions requirements", "Pedestrian and cyclist detection", "Lane-keeping aid", "Adaptive cruise control", "Emergency braking systems", "Safety and emissions compliance emphasis"],
  kuwait: ["Visual customization", "Child-restraint systems", "Crash-severity sensors", "Cross-traffic alert", "Pre-collision assist", "Forward-collision warning", "Luxury, visual presence, and safety emphasis"]
};

function renderFrameworkAccordion(title, features) {
  return `<details><summary><span>${title}</span><i aria-hidden="true">⌄</i></summary>${makeList(features)}</details>`;
}

function renderCountryFramework({ description, flow, rows, note, accordionKeys }) {
  return `
    <div class="paper-heading"><div><div class="section-kicker">Paper-backed framework</div><h3 id="framework-title">Global Strategy Framework</h3></div><p>${description}</p></div>
    <div class="framework-content-grid">
      <div class="framework-visual-column">
        <div class="flow-diagram" aria-label="${flow.join(" to ")}">${flow.map((item, index) => `${index ? '<strong aria-hidden="true">→</strong>' : ""}<span>${item}</span>`).join("")}</div>
        <div class="standardization-bars" role="img" aria-labelledby="standardization-bars-title" aria-describedby="standardization-bars-note">
          <h4 id="standardization-bars-title">Global Standardization vs. Local Market Adaptation</h4>
          <div class="country-framework-comparison" aria-label="Country framework feature-count comparison">
            ${rows.map((row) => `<div class="country-framework-row"><strong>${row.label}</strong><div class="country-framework-counts">${row.counts.map((count, index) => `<div class="usa-feature-count ${index ? "local-segment" : "shared-segment"}"><strong>${count.value} features</strong><span>${count.label}</span></div>`).join("")}</div></div>`).join("")}
          </div>
          <p id="standardization-bars-note" class="chart-note">${note}</p>
        </div>
      </div>
      <div class="framework-accordion-column">${accordionKeys.map((key) => renderFrameworkAccordion(key === "shared" ? "Shared Standardized Features" : `${markets[key].title} Localized Features`, frameworkFeatures[key])).join("")}</div>
    </div>`;
}

function renderUnitedStatesFramework() {
  return renderCountryFramework({ description: "Ford preserves a recognizable global Mustang identity while emphasizing performance, technology, personalization, and home-market relevance in the United States.", flow: ["Global Mustang Identity", "United States Home-Market Emphasis"], rows: [{ label: "United States Feature Emphasis", counts: [{ value: 8, label: "Shared Global Features" }, { value: 3, label: "United States Localized Features" }] }], note: "Values represent the number of features discussed in the project, not market-performance scores. The United States view distinguishes eight shared global Mustang features from three features emphasized for Ford’s home-market strategy.", accordionKeys: ["shared", "usa"] });
}

function renderUnitedKingdomFramework() {
  return renderCountryFramework({ description: "Ford balances a recognizable global Mustang identity with United Kingdom-specific safety, emissions, road-usability, pricing, and promotional adaptation.", flow: ["Global Mustang Identity", "United Kingdom Local Market Adaptation", "Regional Relevance"], rows: [{ label: "United States — Home-Market Benchmark", counts: [{ value: 8, label: "Shared Global Features" }, { value: 3, label: "Localized Market Features" }] }, { label: "United Kingdom — Local-Market Adaptation", counts: [{ value: 8, label: "Shared Global Features" }, { value: 6, label: "Localized Market Features" }] }], note: "Values represent the number of features discussed in the project, not market-performance scores. Ford maintains a consistent global Mustang identity across the United States and United Kingdom, while the United Kingdom requires more localized safety, emissions, and road-usability adaptations than the United States home-market benchmark.", accordionKeys: ["shared", "usa", "uk"] });
}

function renderKuwaitFramework() {
  return renderCountryFramework({ description: "Ford balances a recognizable global Mustang identity with Kuwait-specific feature, safety, pricing, and climate adaptation.", flow: ["Global Mustang Identity", "Kuwait Local Market Adaptation", "Regional Relevance"], rows: [{ label: "United States — Home-Market Benchmark", counts: [{ value: 8, label: "Shared Global Features" }, { value: 3, label: "Localized Market Features" }] }, { label: "Kuwait — Local-Market Adaptation", counts: [{ value: 8, label: "Shared Global Features" }, { value: 7, label: "Localized Market Features" }] }], note: "Values represent the number of features discussed in the project, not market-performance scores. Ford maintains a consistent global Mustang identity across the United States and Kuwait, while Kuwait requires more localized adaptations than the United States home-market benchmark.", accordionKeys: ["shared", "usa", "kuwait"] });
}

function renderFrameworkForView(viewKey) {
  const framework = document.getElementById("framework-view");
  if (!framework) return;
  if (!globalFrameworkMarkup) globalFrameworkMarkup = framework.innerHTML;
  if (viewKey === "usa") {
    framework.innerHTML = renderUnitedStatesFramework();
  } else if (viewKey === "uk") {
    framework.innerHTML = renderUnitedKingdomFramework();
  } else if (viewKey === "kuwait") {
    framework.innerHTML = renderKuwaitFramework();
  } else {
    framework.innerHTML = renderGlobalFramework();
  }
}

function setDashboardView(viewKey, options = {}) {
  const config = viewConfig[viewKey] || viewConfig.compare;
  activeViewKey = viewKey in viewConfig ? viewKey : "compare";
  const isCompare = activeViewKey === "compare";
  renderFrameworkForView(activeViewKey);
  document.querySelectorAll("[data-view='comparison']").forEach((node) => { node.hidden = !isCompare; });
  document.querySelectorAll("[data-view='country']").forEach((node) => { node.hidden = isCompare; });
  document.querySelectorAll("[data-view-toggle]").forEach((button) => {
    const isActive = button.dataset.viewToggle === activeViewKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (!isCompare && config.market) {
    setActiveMarket(config.market);
    renderCountryFocus(config.market);
  }
  updateSectionNav(activeViewKey);
  if (!options.skipHash) history.pushState({ view: activeViewKey }, "", config.hash);
  if (!options.skipScroll) document.querySelector(".dashboard-shell")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function viewFromHash() {
  const hash = window.location.hash;
  return Object.entries(viewConfig).find(([, config]) => config.hash === hash)?.[0] || "compare";
}


function updateRecommendationPanel(recommendationKey, forceOpen = false) {
  const panel = document.getElementById("recommendation-detail-panel");
  const title = document.getElementById("recommendation-detail-title");
  const text = document.getElementById("recommendation-detail-text");
  if (!panel || !title || !text) return;

  const isClosing = activeRecommendationKey === recommendationKey && !panel.hidden && !forceOpen;
  activeRecommendationKey = isClosing ? null : recommendationKey;
  panel.hidden = !activeRecommendationKey;

  document.querySelectorAll("[data-recommendation-toggle]").forEach((button) => {
    const isActive = button.dataset.recommendationToggle === activeRecommendationKey;
    button.setAttribute("aria-expanded", String(isActive));
    button.textContent = isActive ? "Collapse Recommendation" : "Open Recommendation";
  });

  document.querySelectorAll("[data-recommendation-card]").forEach((card) => {
    card.classList.toggle("is-selected-recommendation", card.dataset.recommendationCard === activeRecommendationKey);
  });

  if (!activeRecommendationKey) return;
  title.textContent = recommendationTitles[activeRecommendationKey];
  text.textContent = markets[activeMarketKey].sections[activeRecommendationKey];
}


function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getNestedValue(source, path) {
  return Array.isArray(path)
    ? path.reduce((value, key) => value && value[key], source)
    : source[path];
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined) {
    element.textContent = value;
  }
}

function summarizeRecommendation(value) {
  if (!value) return "";
  const semicolonIndex = value.indexOf(";");
  if (semicolonIndex > -1) {
    return `${value.slice(0, semicolonIndex)}.`;
  }
  return value;
}

function getAccentForCountry(country, activeCountry) {
  if (country === "global") return "rgba(247, 183, 51, 0.86)";
  return country === activeCountry ? "rgba(45, 214, 255, 0.9)" : "rgba(255, 255, 255, 0.24)";
}

function getBorderForCountry(country, activeCountry) {
  if (country === "global") return "rgba(247, 183, 51, 1)";
  return country === activeCountry ? "rgba(141, 234, 255, 1)" : "rgba(255, 255, 255, 0.35)";
}

function createPriceGradient(context) {
  const chart = context.chart;
  const { chartArea, ctx } = chart;
  if (!chartArea) return "rgba(45, 214, 255, 0.9)";
  const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
  gradient.addColorStop(0, "rgba(45, 214, 255, 0.95)");
  gradient.addColorStop(0.58, "rgba(141, 234, 255, 0.9)");
  gradient.addColorStop(1, "rgba(247, 183, 51, 0.95)");
  return gradient;
}

function createVerticalPriceGradient(context) {
  const chart = context.chart;
  const { chartArea, ctx } = chart;
  if (!chartArea) return "rgba(45, 214, 255, 0.9)";
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, "rgba(45, 214, 255, 0.28)");
  gradient.addColorStop(0.56, "rgba(45, 214, 255, 0.9)");
  gradient.addColorStop(1, "rgba(247, 183, 51, 0.95)");
  return gradient;
}

const valueLabelPlugin = {
  id: "valueLabelPlugin",
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const dataset = data.datasets[0];
    const meta = chart.getDatasetMeta(0);
    ctx.save();
    ctx.fillStyle = "#f6f8fb";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.textBaseline = "middle";
    meta.data.forEach((bar, index) => {
      const value = dataset.data[index];
      const label = dataset.valueFormatter ? dataset.valueFormatter(value, index) : String(value);
      if (dataset.labelOrientation === "vertical") {
        ctx.textAlign = "center";
        ctx.fillText(label, bar.x, bar.y - 10);
      } else {
        ctx.textAlign = "left";
        ctx.fillText(label, bar.x + 8, bar.y);
      }
    });
    ctx.restore();
  }
};

function createHorizontalBarChart(canvasId, items, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;
  if (typeof Chart === "undefined") {
    const panel = canvas.closest(".chart-panel");
    if (panel) panel.classList.add("chart-unavailable");
    return null;
  }

  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }

  const labels = items.map((item) => item.label || item.market);
  const values = items.map((item) => item.value);
  const countries = items.map((item) => item.country);

  chartInstances[canvasId] = new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        data: values,
        countries,
        valueFormatter: options.valueFormatter,
        useGradient: options.useGradient || false,
        backgroundColor: options.useGradient
          ? (context) => createPriceGradient(context)
          : countries.map((country) => getAccentForCountry(country, activeMarketKey)),
        borderColor: countries.map((country) => getBorderForCountry(country, activeMarketKey)),
        borderWidth: 1.5,
        borderRadius: 999,
        barThickness: options.barThickness || 24
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 700 },
      layout: { padding: { right: options.rightPadding || 110, left: options.leftPadding || 8 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel(context) {
              const item = items[context.dataIndex];
              return item.local ? `Local price: ${item.local}` : (options.tooltipSuffix || "Number of items explicitly discussed in the paper");
            },
            label(context) {
              return options.valueFormatter ? options.valueFormatter(context.parsed.x, context.dataIndex) : `${context.parsed.x}`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: "rgba(255,255,255,0.08)" },
          ticks: { color: "#95a0ad", font: { size: options.xTickFontSize || 12 } }
        },
        y: {
          grid: { display: false },
          ticks: { color: "#f6f8fb", font: { weight: "700", size: options.yTickFontSize || 12 } }
        }
      }
    },
    plugins: [valueLabelPlugin]
  });

  return chartInstances[canvasId];
}

function renderPriceChart() {
  const canvas = document.getElementById("price-chart");
  if (!canvas) return;
  if (typeof Chart === "undefined") {
    const panel = canvas.closest(".chart-panel");
    if (panel) panel.classList.add("chart-unavailable");
    return;
  }

  if (chartInstances["price-chart"]) {
    chartInstances["price-chart"].destroy();
  }

  chartInstances["price-chart"] = new Chart(canvas, {
    type: "bar",
    data: {
      labels: priceComparisons.map((item) => item.market),
      datasets: [{
        data: priceComparisons.map((item) => item.value),
        countries: priceComparisons.map((item) => item.country),
        valueFormatter: (value) => formatUsd(value),
        labelOrientation: "vertical",
        backgroundColor: (context) => createVerticalPriceGradient(context),
        borderColor: priceComparisons.map((item) => getBorderForCountry(item.country, activeMarketKey)),
        borderWidth: 1.5,
        borderRadius: 12,
        barPercentage: 0.72,
        categoryPercentage: 0.72,
        useGradient: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { duration: 700 },
      layout: { padding: { top: 24, right: 8, left: 0, bottom: 0 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel(context) {
              return `Local price: ${priceComparisons[context.dataIndex].local}`;
            },
            label(context) {
              return formatUsd(context.parsed.y);
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#f6f8fb",
            font: { weight: "700", size: 10 },
            maxRotation: 0,
            minRotation: 0,
            callback(value) {
              return String(this.getLabelForValue(value)).split(" ");
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(255,255,255,0.08)" },
          ticks: { color: "#95a0ad", font: { size: 10 }, callback: (value) => formatUsd(value).replace(".00", "") }
        }
      }
    },
    plugins: [valueLabelPlugin]
  });
}

function renderDerivedCharts() {
  createHorizontalBarChart("executive-chart", chartDatasets.executive, {
    valueFormatter: (value) => `${value}`,
    barThickness: 18,
    rightPadding: 50,
    leftPadding: 12,
    tooltipSuffix: "items discussed in the project"
  });

  createHorizontalBarChart("standardization-chart", chartDatasets.standardization, {
    valueFormatter: (value) => `${value}`,
    barThickness: 22,
    rightPadding: 60,
    leftPadding: 16,
    tooltipSuffix: "features explicitly discussed"
  });

  createHorizontalBarChart("brand-count-chart", chartDatasets.brandThemes, {
    valueFormatter: (value) => `${value}`,
    barThickness: 20,
    tooltipSuffix: "brand themes emphasized; not a performance score"
  });

  createHorizontalBarChart("pricing-pressure-chart", chartDatasets.pricingPressures, {
    valueFormatter: (value) => `${value}`,
    barThickness: 20,
    tooltipSuffix: "pricing pressures discussed; not a severity score"
  });

  createHorizontalBarChart("production-chart", chartDatasets.production, {
    valueFormatter: (value) => `${value}`,
    barThickness: 14,
    rightPadding: 28,
    leftPadding: 0,
    xTickFontSize: 10,
    yTickFontSize: 10,
    tooltipSuffix: "potential benefits identified; not a recommendation rating"
  });

  createHorizontalBarChart("imc-channel-chart", chartDatasets.imcChannels, {
    valueFormatter: (value) => `${value}`,
    barThickness: 20,
    tooltipSuffix: "communication channels explicitly discussed"
  });

  createHorizontalBarChart("logistics-count-chart", chartDatasets.logisticsChallenges, {
    valueFormatter: (value) => `${value}`,
    barThickness: 20,
    tooltipSuffix: "logistics challenges discussed; not a severity score"
  });
}

function updateChartHighlights() {
  Object.values(chartInstances).forEach((chart) => {
    const dataset = chart.data.datasets[0];
    if (!dataset.useGradient) {
      dataset.backgroundColor = dataset.countries.map((country) => getAccentForCountry(country, activeMarketKey));
    }
    dataset.borderColor = dataset.countries.map((country) => getBorderForCountry(country, activeMarketKey));
    chart.update();
  });

  document.querySelectorAll("[data-market-row]").forEach((row) => {
    row.classList.toggle("is-active-market", row.dataset.marketRow === activeMarketKey);
  });
}

function showMatrixDetail(message) {
  if (!message) return;
  const live = document.getElementById("matrix-live-region");
  if (live) live.textContent = message;
}

function setupExclusiveAccordions() {
  document.querySelectorAll("[data-accordion-group]").forEach((group) => {
    group.addEventListener("toggle", (event) => {
      const activeAccordion = event.target;
      group.querySelectorAll("details > summary[aria-expanded]").forEach((summary) => {
        summary.setAttribute("aria-expanded", String(summary.parentElement?.open));
      });
      if (!activeAccordion.matches("details[open]")) return;
      group.querySelectorAll("details[open]").forEach((accordion) => {
        if (accordion !== activeAccordion) accordion.removeAttribute("open");
      });
      group.querySelectorAll("details > summary[aria-expanded]").forEach((summary) => {
        summary.setAttribute("aria-expanded", String(summary.parentElement?.open));
      });
      window.setTimeout(() => {
        Object.values(chartInstances).forEach((chart) => chart.resize());
      }, 260);
    }, true);
  });
}


const textBindings = {
  "market-title": "title",
  "market-subtitle": "subtitle",
  "market-kicker": "kicker",
  "vehicle-headline": "headline",
  "vehicle-summary": "summary",
  "product-text": ["sections", "product"],
  "pricing-text": ["sections", "pricing"],
  "branding-text": ["sections", "branding"],
  "imc-text": ["sections", "imc"],
  "logistics-text": ["sections", "logistics"],
  "drivers-text": ["sections", "drivers"]
};

let countryHeroHeaderMarkup = "";

function setActiveMarket(marketKey) {
  const market = markets[marketKey];
  if (!market) return;
  activeMarketKey = marketKey;
  const countryHero = document.querySelector(".country-hero");
  countryHero?.classList.toggle("streamlined-market-play", marketKey === "usa" || marketKey === "uk");
  countryHero?.querySelector(":scope > .hero-header")?.remove();

  Object.entries(textBindings).forEach(([id, path]) => {
    setText(id, getNestedValue(market, path));
  });

  document.getElementById("vehicle-position")?.remove();
  if (marketKey === "usa" || marketKey === "uk") {
    document.getElementById("vehicle-summary")?.insertAdjacentHTML("afterend", `<p id="vehicle-position" class="vehicle-position">${market.subtitle}</p>`);
  }

  document.querySelectorAll("[data-summary-section]").forEach((node) => {
    const value = market.sections[node.dataset.summarySection];
    if (value) node.textContent = summarizeRecommendation(value);
  });

  if (activeRecommendationKey) {
    updateRecommendationPanel(activeRecommendationKey, true);
  }

  const metricIds = ["metric-a", "metric-b", "metric-c"];

  metricIds.forEach((id, index) => {
    setText(id, market.metrics[index]);
  });

  document.querySelectorAll(".header-metrics small").forEach((node, index) => {
    if (market.metricLabels[index]) {
      node.textContent = market.metricLabels[index];
    }
  });

  const vehicleVisual = document.querySelector(".vehicle-visual");
  const vehicleImage = document.getElementById("vehicle-image");
  const vehicleCaption = document.getElementById("vehicle-caption");

  if (vehicleVisual && vehicleImage) {
    vehicleVisual.classList.add("is-swapping");

    window.setTimeout(() => {
      vehicleImage.src = market.image;
      vehicleImage.alt = market.alt;
      if (vehicleCaption) vehicleCaption.textContent = market.alt;
      vehicleVisual.classList.remove("is-swapping");
    }, 180);
  }

  document.querySelectorAll(".callout").forEach((node, index) => {
    const callout = market.callouts[index];
    if (!callout) return;

    node.style.setProperty("--x", callout.x);
    node.style.setProperty("--y", callout.y);

    const label = node.querySelector("em");
    if (label) {
      label.textContent = callout.text;
    }
  });

  updateChartHighlights();

  document.querySelectorAll("[data-market]").forEach((button) => {
    const isActive = button.dataset.market === marketKey;
    button.classList.toggle("active", isActive);

    if (button.hasAttribute("aria-pressed")) {
      button.setAttribute("aria-pressed", String(isActive));
    }

    if (button.matches("a")) {
      if (isActive) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPriceChart();
  renderDerivedCharts();
  updateChartHighlights();

  document.querySelectorAll("[data-detail]").forEach((control) => {
    control.addEventListener("focus", () => showMatrixDetail(control.dataset.detail));
    control.addEventListener("mouseenter", () => showMatrixDetail(control.dataset.detail));
    control.addEventListener("click", () => showMatrixDetail(control.dataset.detail));
  });

  document.addEventListener("click", (event) => {
    const productToggle = event.target.closest(".product-accordion-toggle");
    if (productToggle) openProductAccordion(productToggle);
  });

  document.querySelectorAll("[data-pricing-driver]").forEach((button) => {
    button.addEventListener("click", () => renderPricingDriverPanel(button.dataset.pricingDriver));
  });
  renderPricingDriverPanel(activePricingDriverKey);
  setupExclusiveAccordions();

  document.querySelectorAll("[data-view-toggle]").forEach((button) => {
    button.addEventListener("click", () => setDashboardView(button.dataset.viewToggle));
  });

  window.addEventListener("popstate", () => setDashboardView(viewFromHash(), { skipHash: true, skipScroll: true }));

  document.querySelectorAll("[data-recommendation-toggle]").forEach((button) => {
    button.addEventListener("click", () => updateRecommendationPanel(button.dataset.recommendationToggle));
  });

  const recommendationClose = document.querySelector(".recommendation-detail-close");
  if (recommendationClose) {
    recommendationClose.addEventListener("click", () => {
      if (activeRecommendationKey) updateRecommendationPanel(activeRecommendationKey);
    });
  }

  document.querySelectorAll("[data-market]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveMarket(button.dataset.market);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveMarket(button.dataset.market);
      }
    });
  });

  setActiveMarket("usa");
  setDashboardView(viewFromHash(), { skipHash: true, skipScroll: true });
});
