const markets = {
  usa: {
    title: "United States",
    subtitle: "Defend the Mustang's home-market performance crown while converting track-day aspiration into premium Dark Horse demand.",
    kicker: "USA market play",
    headline: "Own the attainable track weapon segment.",
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
    headline: "Make rarity and right-hand-drive drama the advantage.",
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
    kicker: "Kuwait market play",
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
  standardization: [
    { label: "Shared global standardized features", country: "global", value: 8 },
    { label: "United States localized features", country: "usa", value: 3 },
    { label: "United Kingdom localized features", country: "uk", value: 6 },
    { label: "Kuwait localized features", country: "kuwait", value: 7 }
  ],
  production: [
    { label: "Export from U.S.", country: "usa", value: 3 },
    { label: "Kuwait local assembly possibility", country: "kuwait", value: 5 },
    { label: "U.K. local assembly possibility", country: "uk", value: 5 }
  ]
};

const chartInstances = {};
let activeMarketKey = "usa";

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

function getAccentForCountry(country, activeCountry) {
  if (country === "global") return "rgba(247, 183, 51, 0.86)";
  return country === activeCountry ? "rgba(45, 214, 255, 0.9)" : "rgba(255, 255, 255, 0.24)";
}

function getBorderForCountry(country, activeCountry) {
  if (country === "global") return "rgba(247, 183, 51, 1)";
  return country === activeCountry ? "rgba(141, 234, 255, 1)" : "rgba(255, 255, 255, 0.35)";
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
      ctx.fillText(label, bar.x + 8, bar.y);
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
        backgroundColor: countries.map((country) => getAccentForCountry(country, activeMarketKey)),
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
      layout: { padding: { right: 90 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel(context) {
              const item = items[context.dataIndex];
              return item.local ? `Local price: ${item.local}` : "Number of features explicitly discussed in the paper";
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
          ticks: { color: "#95a0ad" }
        },
        y: {
          grid: { display: false },
          ticks: { color: "#f6f8fb", font: { weight: "700" } }
        }
      }
    },
    plugins: [valueLabelPlugin]
  });

  return chartInstances[canvasId];
}

function renderPriceChart() {
  createHorizontalBarChart("price-chart", priceComparisons, {
    valueFormatter: (value) => formatUsd(value),
    barThickness: 26
  });
}

function renderDerivedCharts() {
  createHorizontalBarChart("standardization-chart", chartDatasets.standardization, {
    valueFormatter: (value) => `${value}`,
    barThickness: 24
  });

  createHorizontalBarChart("production-chart", chartDatasets.production, {
    valueFormatter: (value) => `${value}`,
    barThickness: 24
  });
}

function updateChartHighlights() {
  Object.values(chartInstances).forEach((chart) => {
    const dataset = chart.data.datasets[0];
    dataset.backgroundColor = dataset.countries.map((country) => getAccentForCountry(country, activeMarketKey));
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

function setActiveMarket(marketKey) {
  const market = markets[marketKey];
  if (!market) return;
  activeMarketKey = marketKey;

  Object.entries(textBindings).forEach(([id, path]) => {
    setText(id, getNestedValue(market, path));
  });

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

  if (vehicleVisual && vehicleImage) {
    vehicleVisual.classList.add("is-swapping");

    window.setTimeout(() => {
      vehicleImage.src = market.image;
      vehicleImage.alt = market.alt;
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
});
