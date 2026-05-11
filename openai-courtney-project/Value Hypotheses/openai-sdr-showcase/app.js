const roleSignals = [
  {
    label: "Enterprise outbound",
    subtitle: "Priority accounts and signal-based prospecting",
    roleSignal: "OpenAI needs SDRs who can identify high-potential companies, run targeted outbound, and create qualified enterprise conversations.",
    proof: "At Benchling, Courtney generated $7.5M in sourced pipeline and reached 221% SDR quota attainment by building multi-threaded outbound campaigns across account maps, executive engagement, and buying signals.",
    whyItMatters: "Courtney can connect market signals to a credible reason for a technical buyer to engage and position OpenAI's team as a business partner to the prospect or customer's mission and strategic initiatives.",
    stats: [
      ["221%", "SDR quota attainment"],
      ["$7.5M", "Sourced pipeline"],
      ["Top SDR", "Benchling, 2023"]
    ]
  },
  {
    label: "Technical discovery",
    subtitle: "Credibility with builders and operators",
    roleSignal: "The role calls for curiosity about AI, fluency with technical teams, and the ability to qualify nuanced enterprise use cases.",
    proof: "Before selling, Courtney implemented Benchling for biotech startups, translating scientific workflows into scalable platform configurations tied to customer business objectives.",
    whyItMatters: "That implementation foundation gives her a practical discovery muscle: understand the workflow, isolate value, and bring the sales team a cleaner opportunity.",
    stats: [
      ["9.8/10", "NPS"],
      ["4.8/5", "CSAT"],
      ["Workflow", "Deployment experience"]
    ]
  },
  {
    label: "AI adoption",
    subtitle: "Early product feedback and customer enablement",
    roleSignal: "OpenAI's GTM motion requires sellers who can understand where AI creates value and how to identify increased adoption and utilization opportunities.",
    proof: "As a Strategic AE, Courtney partnered with early adopters to deploy AI products, influencing customer adoption strategy and product feedback.",
    whyItMatters: "She has already led beta programs for AI pilots and new agentic products with customers while collaborating across the customer's team and internal Product, Marketing, and Solutions teams.",
    stats: [
      ["AI", "Early deployments"],
      ["120%", "AE quota attainment"],
      ["$1.5M", "Outbound-sourced pipeline"]
    ]
  },
  {
    label: "Account ownership",
    subtitle: "Expansion, renewals, and executive context",
    roleSignal: "The best SDR conversations anticipate what AEs need later: business pain, buying committee, timing, risk, and expansion potential.",
    proof: "Courtney helped build Benchling's Account Management program, managed a 200-account, $3M quarterly ARR portfolio, and achieved 93% gross renewal retention with 125% attainment.",
    whyItMatters: "That account ownership lets her prospect with the full lifecycle in mind, not just the meeting booked.",
    stats: [
      ["200", "Accounts managed"],
      ["$3M", "Quarterly ARR portfolio"],
      ["93%", "Gross renewal retention"]
    ]
  },
  {
    label: "Builder mindset",
    subtitle: "Ambiguity, systems, and cross-functional work",
    roleSignal: "OpenAI asks SDRs to help improve processes, workflows, and AI-enabled GTM motions in a fast-moving environment.",
    proof: "Courtney has operated in founding and scaling contexts: operationalizing Benchling's AM program, mentoring AEs, partnering cross-functionally, and now selling developer infrastructure and software supply chain security at Chainguard.",
    whyItMatters: "She brings the habits of a seller who documents patterns, improves the system, and keeps technical and commercial teams aligned.",
    stats: [
      ["Founding", "AM program role"],
      ["Mentor", "New AE enablement"],
      ["DevSecOps", "Current buyer context"]
    ]
  }
];

const progressionSteps = [
  {
    role: "Product Deployment Specialist",
    company: "Benchling",
    period: "Apr 2022 - Mar 2023",
    learned: "Learned how to translate complex scientific workflows into scalable product configurations tied to business outcomes.",
    proof: "9.8/10 NPS and 4.8/5 CSAT across customer engagements.",
    openai: "OpenAI relevance: discovery starts with workflow fluency, not a script."
  },
  {
    role: "Senior Sales Development Representative",
    company: "Benchling",
    period: "Mar 2023 - Mar 2024",
    learned: "Built the outbound muscle: account mapping, executive engagement, signal-based prospecting, and multi-threaded campaigns.",
    proof: "221% quota attainment and $7.5M sourced pipeline as Benchling's top SDR in 2023.",
    openai: "OpenAI relevance: proven ability to create qualified enterprise pipeline from targeted outbound."
  },
  {
    role: "Founding Strategic Account Manager",
    company: "Benchling",
    period: "Apr 2024 - Sep 2024",
    learned: "Learned the full lifecycle after the first meeting: adoption, renewal, expansion, portfolio prioritization, and customer health.",
    proof: "Managed 200 accounts across a $3M quarterly ARR portfolio with 93% gross renewal retention.",
    openai: "OpenAI relevance: qualifies opportunities with downstream adoption and expansion in mind."
  },
  {
    role: "Strategic Account Executive",
    company: "Benchling",
    period: "Oct 2024 - Oct 2025",
    learned: "Carried a quota, sourced pipeline, mentored sellers, and partnered with early AI adopters on adoption strategy and product feedback.",
    proof: "120% quota attainment and $1.5M sourced pipeline.",
    openai: "OpenAI relevance: knows what an AE needs from an SDR handoff because she has owned the number."
  },
  {
    role: "Commercial Account Executive",
    company: "Chainguard",
    period: "Feb 2026 - Present",
    learned: "Sells software supply chain and open-source security to engineering, security, platform, and DevSecOps leaders.",
    proof: "Current new-logo acquisition motion across healthcare and life sciences accounts.",
    openai: "OpenAI relevance: already speaks with the technical and security buyers who shape enterprise AI adoption."
  }
];

let activeSignal = 0;

const signalList = document.querySelector("#signalList");
const proofPanel = document.querySelector("#proofPanel");
const progressionTimeline = document.querySelector("#progressionTimeline");

function renderSignals() {
  signalList.innerHTML = roleSignals
    .map((signal, index) => {
      const pressed = index === activeSignal ? "true" : "false";
      return `
        <button class="signal-button" type="button" aria-pressed="${pressed}" data-signal="${index}">
          <span class="signal-index">${String(index + 1).padStart(2, "0")}</span>
          <span>
            <strong>${signal.label}</strong>
            <span>${signal.subtitle}</span>
          </span>
        </button>
      `;
    })
    .join("");

  signalList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeSignal = Number(button.dataset.signal);
      renderSignals();
      renderProof();
    });
  });
}

function renderProof() {
  const signal = roleSignals[activeSignal];
  proofPanel.innerHTML = `
    <span class="label">OpenAI role signal</span>
    <h3>${signal.roleSignal}</h3>
    <p>${signal.proof}</p>
    <p><strong>Takeaway for Lauren:</strong> ${signal.whyItMatters}</p>
    <div class="proof-stats">
      ${signal.stats
        .map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`)
        .join("")}
    </div>
  `;
}

function renderProgression() {
  progressionTimeline.innerHTML = progressionSteps
    .map((step, index) => `
      <article class="progression-step">
        <div class="step-marker">${String(index + 1).padStart(2, "0")}</div>
        <div class="step-body">
          <div class="step-meta">${step.company} | ${step.period}</div>
          <h3>${step.role}</h3>
          <p><strong>What I learned:</strong> ${step.learned}</p>
          <p><strong>Proof:</strong> ${step.proof}</p>
          <p><strong>${step.openai}</strong></p>
        </div>
      </article>
    `)
    .join("");
}

renderSignals();
renderProof();
renderProgression();
