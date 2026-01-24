import React from "react";
import { Link } from "react-router-dom";
import { FeatureCard, Pill, Section } from "../components/ui";

const landingData = {
  contextHighlights: [
    {
      title: "Ethiopian SME context",
      description:
        "Service providers operate under high foot traffic, limited staffing, and intermittent connectivity. The solution must be lightweight and reliable.",
    },
    {
      title: "Manual queueing limitations",
      description:
        "Paper lists and verbal calls lead to inconsistent ordering, long idle time, and a loss of customer trust.",
    },
    {
      title: "Why global systems fail locally",
      description:
        "Many imported queue tools assume always-on connectivity and dedicated hardware, which is not realistic for SMEs.",
    },
  ],
  problemCards: [
    {
      title: "Overcrowding",
      description:
        "Dense physical lines raise safety risks and reduce service accessibility.",
      icon: "🧭",
    },
    {
      title: "Favoritism",
      description:
        "Manual enforcement enables queue jumping and informal prioritization.",
      icon: "⚖️",
    },
    {
      title: "Lack of transparency",
      description:
        "Customers cannot observe queue movement or trust estimated wait times.",
      icon: "🔍",
    },
    {
      title: "Productivity loss",
      description:
        "Waiting without clarity reduces daily productivity for customers and SMEs.",
      icon: "⏱️",
    },
  ],
  systemFlow: [
    {
      title: "Service discovery",
      description:
        "Users search for nearby providers, compare queue length, and evaluate expected service time.",
    },
    {
      title: "Queue joining",
      description:
        "Remote customers receive a digital ticket while walk-ins join at a kiosk or staff tablet.",
    },
    {
      title: "Real-time tracking",
      description:
        "Queue position and estimated wait time update live through a WebSocket channel.",
    },
    {
      title: "Notification & completion",
      description:
        "Users are notified based on configurable thresholds, then service completion closes the ticket.",
    },
  ],
  features: [
    {
      title: "Hybrid FIFO Queue Engine",
      description: "Single FIFO queue for remote and walk-in entries.",
      icon: "🔁",
    },
    {
      title: "Real-Time WebSocket Updates",
      description: "Live updates synchronized across all clients.",
      icon: "📡",
    },
    {
      title: "Adaptive Wait-Time Estimation",
      description:
        "Estimations adjust to service velocity and historical data.",
      icon: "📈",
    },
    {
      title: "Provider Analytics",
      description:
        "Operational insights for staffing and throughput optimization.",
      icon: "🧩",
    },
    {
      title: "Transaction-Based Ratings",
      description: "Ratings available only after verified service completion.",
      icon: "⭐",
    },
    {
      title: "No Hardware Cost for SMEs",
      description: "Runs on standard web devices with optional kiosk mode.",
      icon: "🖥️",
    },
  ],
  academicMapping: [
    {
      title: "Software Engineering",
      description:
        "Requirements analysis, modular design, and structured UI architecture.",
    },
    {
      title: "Database Systems",
      description:
        "Queue state persistence, audit trails, and transactional integrity.",
    },
    {
      title: "Operating Systems & Concurrency",
      description:
        "Concurrent queue access control and conflict resolution strategies.",
    },
    {
      title: "Security",
      description:
        "Access control, audit logging, and data integrity policies.",
    },
    {
      title: "Professional Ethics",
      description:
        "Fair queue ordering and accountability for service delivery.",
    },
  ],
  techStack: [
    {
      title: "Frontend",
      description: "React + Tailwind with responsive layouts.",
    },
    {
      title: "Backend",
      description: "Node.js modular monolith with queue engine.",
    },
    {
      title: "Database",
      description: "Relational storage for queue state and logs.",
    },
    {
      title: "Real-Time",
      description: "WebSocket channels for event streaming.",
    },
    {
      title: "Deployment",
      description: "Containerized build for cloud or campus labs.",
    },
  ],
  useCases: ["Clinics", "Salons", "Government offices", "Universities"],
  team: [
    {
      name: "Alemu Tesfaye",
      role: "Frontend & UX Lead",
      focus: "Interaction design and UI system.",
    },
    {
      name: "Meron Kidane",
      role: "Backend Lead",
      focus: "Queue engine and WebSocket gateway.",
    },
    {
      name: "Dawit Bekele",
      role: "Data & Analytics",
      focus: "Metrics modeling and reporting.",
    },
    {
      name: "Selamawit Hailu",
      role: "Quality & Research",
      focus: "Testing strategy and ethics.",
    },
  ],
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-sky-300">
              Werefa Capstone
            </p>
            <h1 className="text-2xl font-bold text-white">
              Werefa – A Real-Time Hybrid Queue Management System and Service
              Marketplace for SMEs in Ethiopia
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#join-queue"
              className="rounded-full bg-sky-400/90 px-5 py-2 text-sm font-semibold text-slate-950"
            >
              Join Queue
            </a>
            <Link
              to="/admin"
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </header>

      <section
        id="join-queue"
        className="border-b border-white/5 bg-slate-950/60 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Hero
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Queue inefficiency is a measurable barrier to SME productivity in
              Ethiopia.
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Werefa introduces a hybrid queue that unifies remote and walk-in
              access, ensuring FIFO fairness while delivering real-time
              visibility for customers and providers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-950">
                Join Queue
              </button>
              <Link
                to="/admin"
                className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
              >
                Admin Dashboard
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>Hybrid Remote + Walk-In</Pill>
              <Pill>FIFO Enforcement</Pill>
              <Pill>Capstone 2026</Pill>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">
              Live Queue Snapshot (Demo)
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Preview of the user-facing queue status panel.
            </p>
            <div className="mt-6 space-y-4">
              {["T-1821", "T-1822", "T-1823"].map((ticket) => (
                <div
                  key={ticket}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{ticket}</p>
                    <p className="text-xs text-slate-400">
                      Estimated wait 8–14 min
                    </p>
                  </div>
                  <Pill>Remote</Pill>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        id="context"
        eyebrow="Context & Background"
        title="Designed for the Ethiopian SME environment."
        subtitle="The system aligns with local constraints such as limited bandwidth, high walk-in ratios, and the need for trusted ordering."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {landingData.contextHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="problem"
        eyebrow="Problem Breakdown"
        title="Manual queues create both operational and social friction."
        subtitle="Werefa targets the structural weaknesses in traditional queue management."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.problemCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section
        id="solution"
        eyebrow="Proposed Solution"
        title="Werefa: a hybrid queue system with fairness and clarity."
        subtitle="A single authoritative queue ensures FIFO ordering, with real-time synchronization for all devices."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Hybrid Access</h3>
            <p className="mt-3 text-sm text-slate-300">
              Remote and walk-in entries share the same queue engine, preventing
              parallel lines.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">FIFO Fairness</h3>
            <p className="mt-3 text-sm text-slate-300">
              Queue order is enforced at the system level with auditability.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Real-Time Synchronization</h3>
            <p className="mt-3 text-sm text-slate-300">
              WebSocket updates ensure all clients see the same queue state.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="flow"
        eyebrow="How the System Works"
        title="A detailed flow optimized for transparency."
        subtitle="Each step is observable and measurable for both customers and service providers."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.systemFlow.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm font-semibold text-sky-300">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="features"
        eyebrow="Core Features"
        title="Engineered to support reliability and research evaluation."
        subtitle="Each capability is aligned with practical deployment needs."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {landingData.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        id="architecture"
        eyebrow="Technical Architecture"
        title="Layered system design with concurrency awareness."
        subtitle="A modular monolithic architecture maintains clarity while supporting real-time updates."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Architecture Layers</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Client Layer — Web, kiosk, and mobile interfaces
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Application Layer — Queue engine, analytics, service marketplace
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Persistence Layer — Relational database and audit logs
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              Concurrency control prevents double-serving and maintains FIFO
              integrity under high load.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Deployment Notes</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Modular monolith for operational simplicity.</li>
              <li>• WebSockets for low-latency state propagation.</li>
              <li>• Audit logs for accountability and ethics review.</li>
              <li>• Offline-tolerant UX for intermittent connectivity.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="academic"
        eyebrow="Academic & Engineering Concepts"
        title="Direct mapping to curriculum outcomes."
        subtitle="Werefa demonstrates applied system design across multiple domains."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.academicMapping.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        eyebrow="Societal & Economic Impact"
        title="Queue transparency improves health, productivity, and governance."
        subtitle="These benefits align with public service efficiency and SME resilience goals."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Reduced crowding</h3>
            <p className="mt-3 text-sm text-slate-300">
              Remote access decreases physical congestion near service points.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Improved SME efficiency</h3>
            <p className="mt-3 text-sm text-slate-300">
              Predictable flow reduces idle staff time and improves throughput.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Health & safety benefits</h3>
            <p className="mt-3 text-sm text-slate-300">
              Structured queues reduce overcrowding and support safer service
              environments.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="use-cases"
        eyebrow="Use Case Scenarios"
        title="Applicable across public and private services."
        subtitle="The same queue engine supports diverse service lines."
      >
        <div className="flex flex-wrap gap-3">
          {landingData.useCases.map((useCase) => (
            <Pill key={useCase}>{useCase}</Pill>
          ))}
        </div>
      </Section>

      <Section
        id="tech-stack"
        eyebrow="Technology Stack"
        title="Selected for maintainability and academic clarity."
        subtitle="All layers are documented and align with senior project evaluation criteria."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landingData.techStack.map((stack) => (
            <div
              key={stack.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{stack.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{stack.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="team"
        eyebrow="Team & Roles"
        title="A senior project team with defined responsibilities."
        subtitle="Roles are aligned with real product delivery practices."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-sky-300">{member.role}</p>
              <p className="mt-3 text-sm text-slate-300">{member.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="research"
        eyebrow="Research & Future Scope"
        title="Prepared for scalability and national integration."
        subtitle="The system is designed to evolve beyond the capstone timeline."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Scalability</h3>
            <p className="mt-3 text-sm text-slate-300">
              Horizontal scaling for multi-branch providers and regional service
              hubs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">AI-based predictions</h3>
            <p className="mt-3 text-sm text-slate-300">
              Predictive wait-time modeling using historical service duration
              trends.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">National integration</h3>
            <p className="mt-3 text-sm text-slate-300">
              Interoperability with digital public service portals and regional
              IDs.
            </p>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Werefa – Capstone Project</h3>
            <p className="text-sm text-slate-400">
              Senior Project | 2026 | Ethiopia
            </p>
          </div>
          <div className="text-sm text-slate-400">
            Academic evaluation ready. Demo available for review and scoring.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
