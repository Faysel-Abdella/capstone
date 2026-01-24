import { useId, useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";

// Architectural note:
// This UI is intentionally frontend-only. All data is mock data and is
// structured to mirror real API/WebSocket payloads for a smooth integration.

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="border-b border-white/5 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-6">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{subtitle}</p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const MetricCard = ({ label, value, note }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
    <p className="text-sm text-slate-400">{label}</p>
    <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
  </div>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/20 text-xl">
        {icon}
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-4 text-sm text-slate-300">{description}</p>
  </div>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
    {children}
  </span>
);

const LineChart = ({ data }) => {
  const gradientId = useId();
  const max = Math.max(...data.map((point) => point.value));
  const min = Math.min(...data.map((point) => point.value));
  const range = max - min || 1;
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((point.value - min) / range) * 100;
    return `${x},${y}`;
  });
  const path = `M ${points.join(" L ")}`;

  return (
    <svg viewBox="0 0 100 100" className="h-44 w-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
      />
      {points.map((point, index) => {
        const [x, y] = point.split(",");
        return (
          <circle
            key={`${point}-${index}`}
            cx={x}
            cy={y}
            r="1.6"
            fill="#e2e8f0"
          />
        );
      })}
    </svg>
  );
};

const BarChart = ({ data }) => {
  const max = Math.max(...data.map((point) => point.value));
  return (
    <div className="flex h-44 items-end gap-3">
      {data.map((point) => (
        <div
          key={point.label}
          className="flex flex-1 flex-col items-center gap-2"
        >
          <div
            className="w-full rounded-xl bg-gradient-to-t from-sky-400/80 to-purple-500/80"
            style={{ height: `${(point.value / max) * 100}%` }}
          />
          <span className="text-xs text-slate-400">{point.label}</span>
        </div>
      ))}
    </div>
  );
};

const Table = ({ columns, data }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10">
    <table className="min-w-full divide-y divide-white/10">
      <thead className="bg-white/5">
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5 bg-slate-950/40">
        {data.map((row) => (
          <tr key={row.id} className="text-sm text-slate-200">
            {Object.values(row.cells).map((value, index) => (
              <td key={`${row.id}-${index}`} className="px-4 py-4">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function LegacyLandingPage() {
  const [activePage, setActivePage] = useState("Dashboard");

  const landingData = useMemo(
    () => ({
      problemCards: [
        {
          title: "Crowding & physical congestion",
          description:
            "Manual lines compress demand into a single space, creating safety risks and discouraging customers who cannot wait on-site.",
          icon: "🧭",
        },
        {
          title: "Favoritism & queue jumping",
          description:
            "When tokens are managed by hand, enforcement is weak and perceived fairness erodes, harming trust in SMEs.",
          icon: "⚖️",
        },
        {
          title: "Unpredictable waiting time",
          description:
            "Customers cannot estimate the real wait. Productivity drops as people idle with no reliable schedule.",
          icon: "⏱️",
        },
        {
          title: "Limited operational visibility",
          description:
            "Providers lack analytics on service duration, abandonment, and daily load distribution.",
          icon: "📊",
        },
      ],
      solutionSteps: [
        {
          title: "Hybrid queue intake",
          description:
            "Customers can join remotely via mobile or physically at a kiosk, preserving inclusion for walk-in users.",
        },
        {
          title: "Real-time queue state",
          description:
            "Live updates are broadcast through WebSockets, keeping every stakeholder aligned with the same queue state.",
        },
        {
          title: "Adaptive time estimation",
          description:
            "The system continuously recalculates wait time using service duration history and queue velocity.",
        },
      ],
      howItWorks: [
        {
          title: "Discover the service",
          description:
            "Users search for nearby providers, see live queue length, and compare estimated wait time.",
        },
        {
          title: "Join remotely or at a kiosk",
          description:
            "A unique ticket is issued, ensuring that every entry is tracked in a single FIFO queue.",
        },
        {
          title: "Track position in real-time",
          description:
            "Queue movement is streamed to the client instantly, eliminating guesswork.",
        },
        {
          title: "Get notified and served",
          description:
            "Notifications are triggered based on proximity to the service window and internal thresholds.",
        },
      ],
      features: [
        {
          title: "Hybrid FIFO Queue",
          description:
            "Unified remote and walk-in flows with strict FIFO enforcement.",
          icon: "🔁",
        },
        {
          title: "Real-Time WebSocket Updates",
          description: "Low-latency updates keep all screens synchronized.",
          icon: "📡",
        },
        {
          title: "Adaptive Wait-Time Estimation",
          description: "Continuous recalculation based on live service rates.",
          icon: "📈",
        },
        {
          title: "Provider Analytics Dashboard",
          description:
            "Operational insights for throughput, peak hours, and SLA adherence.",
          icon: "🧩",
        },
        {
          title: "Transaction-Based Ratings",
          description:
            "Ratings are available only after service completion to reduce bias.",
          icon: "⭐",
        },
        {
          title: "No Hardware Requirement",
          description: "Runs on standard web devices with optional kiosk mode.",
          icon: "🖥️",
        },
      ],
      techStack: [
        {
          title: "Frontend",
          description: "React + Tailwind UI with responsive layouts.",
        },
        {
          title: "Backend",
          description: "Node.js service layer with modular monolith design.",
        },
        {
          title: "Database",
          description: "Relational storage for queue state and audit logs.",
        },
        {
          title: "Real-Time",
          description: "WebSocket channels for queue state propagation.",
        },
        {
          title: "Deployment",
          description:
            "Containerized build for campus labs and cloud-ready rollout.",
        },
      ],
      useCases: ["Clinics", "Salons", "Government offices", "Universities"],
      academicAlignment: [
        "Software Engineering",
        "Databases",
        "Operating Systems & Concurrency",
        "Security",
        "Ethics",
      ],
      team: [
        {
          name: "Alemu Tesfaye",
          role: "Frontend & UX Lead",
          focus: "Interaction design, usability, UI system.",
        },
        {
          name: "Meron Kidane",
          role: "Backend Lead",
          focus: "Queue engine, WebSocket gateway, API design.",
        },
        {
          name: "Dawit Bekele",
          role: "Data & Analytics",
          focus: "Metrics modeling, reporting, dashboards.",
        },
        {
          name: "Selamawit Hailu",
          role: "Quality & Research",
          focus: "Testing strategy, evaluation, ethics.",
        },
      ],
    }),
    [],
  );

  const dashboardData = useMemo(
    () => ({
      kpis: [
        {
          label: "Active Queue Length",
          value: "24",
          note: "Across all services",
        },
        {
          label: "Average Service Time",
          value: "11.6 min",
          note: "Weighted over last 7 days",
        },
        {
          label: "Customers Served Today",
          value: "143",
          note: "Updated 2 minutes ago",
        },
        { label: "No-Show Rate", value: "4.8%", note: "Target < 6%" },
      ],
      queueTrend: [
        { label: "08:00", value: 10 },
        { label: "09:00", value: 22 },
        { label: "10:00", value: 30 },
        { label: "11:00", value: 18 },
        { label: "12:00", value: 26 },
        { label: "13:00", value: 34 },
        { label: "14:00", value: 28 },
      ],
      peakHours: [
        { label: "Mon", value: 38 },
        { label: "Tue", value: 44 },
        { label: "Wed", value: 31 },
        { label: "Thu", value: 52 },
        { label: "Fri", value: 47 },
        { label: "Sat", value: 29 },
      ],
      liveQueue: [
        {
          id: "T-1821",
          cells: {
            ticket: "T-1821",
            name: "Hanna Bekele",
            type: <Pill>Remote</Pill>,
            wait: "12 min",
            status: <Pill>Waiting</Pill>,
          },
        },
        {
          id: "T-1822",
          cells: {
            ticket: "T-1822",
            name: "Yonas Abate",
            type: <Pill>Walk-In</Pill>,
            wait: "7 min",
            status: <Pill>Arrived</Pill>,
          },
        },
        {
          id: "T-1823",
          cells: {
            ticket: "T-1823",
            name: "Mimi Tsegaye",
            type: <Pill>Remote</Pill>,
            wait: "18 min",
            status: <Pill>Waiting</Pill>,
          },
        },
        {
          id: "T-1824",
          cells: {
            ticket: "T-1824",
            name: "Elias Zerihun",
            type: <Pill>Walk-In</Pill>,
            wait: "3 min",
            status: <Pill>Called</Pill>,
          },
        },
      ],
      analytics: {
        serviceDuration: [
          { label: "Mon", value: 12 },
          { label: "Tue", value: 10 },
          { label: "Wed", value: 11 },
          { label: "Thu", value: 13 },
          { label: "Fri", value: 9 },
          { label: "Sat", value: 8 },
        ],
        dailyTraffic: [
          { label: "08", value: 8 },
          { label: "10", value: 19 },
          { label: "12", value: 24 },
          { label: "14", value: 31 },
          { label: "16", value: 22 },
          { label: "18", value: 14 },
        ],
        abandonmentRate: [
          { label: "W1", value: 5 },
          { label: "W2", value: 4 },
          { label: "W3", value: 6 },
          { label: "W4", value: 3 },
        ],
      },
      services: [
        {
          id: "svc-1",
          name: "General Consultation",
          duration: "12 min",
          load: "High",
        },
        {
          id: "svc-2",
          name: "Document Review",
          duration: "8 min",
          load: "Medium",
        },
        {
          id: "svc-3",
          name: "Payments & Receipts",
          duration: "6 min",
          load: "Low",
        },
        {
          id: "svc-4",
          name: "Special Assistance",
          duration: "15 min",
          load: "Medium",
        },
      ],
      ratings: {
        average: 4.6,
        trustScore: 92,
        reviews: [
          {
            id: "rv-1",
            author: "Kalkidan G.",
            note: "Queue moved faster than expected and the SMS notice was accurate.",
          },
          {
            id: "rv-2",
            author: "Yonatan M.",
            note: "Walk-in registration was easy. The dashboard screen was clear.",
          },
          {
            id: "rv-3",
            author: "Selam T.",
            note: "Estimated time was off by 3 minutes, still acceptable.",
          },
        ],
      },
    }),
    [],
  );

  const renderDashboardPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {dashboardData.kpis.map((kpi) => (
                <MetricCard key={kpi.label} {...kpi} />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Queue Length Over Time
                    </h3>
                    <p className="text-sm text-slate-400">
                      Live trend updated every 5 minutes
                    </p>
                  </div>
                  <Pill>Realtime</Pill>
                </div>
                <LineChart data={dashboardData.queueTrend} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Peak Hours (Weekly)
                    </h3>
                    <p className="text-sm text-slate-400">
                      Average arrivals per day
                    </p>
                  </div>
                  <Pill>Summary</Pill>
                </div>
                <BarChart data={dashboardData.peakHours} />
              </div>
            </div>
          </div>
        );
      case "Live Queue":
        return (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-sky-400/90 px-5 py-2 text-sm font-semibold text-slate-950">
                Call Next
              </button>
              <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold">
                Mark Served
              </button>
              <button className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold">
                Mark No-Show
              </button>
            </div>
            <Table
              columns={[
                "Ticket #",
                "Customer Name",
                "Type",
                "Est. Wait",
                "Status",
              ]}
              data={dashboardData.liveQueue}
            />
            {/* TODO: Replace mock queue rows with live WebSocket stream */}
          </div>
        );
      case "Analytics":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">
                  Average Service Duration
                </h3>
                <p className="text-sm text-slate-400">
                  Minutes per service slot
                </p>
                <LineChart data={dashboardData.analytics.serviceDuration} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Daily Traffic</h3>
                <p className="text-sm text-slate-400">Entries by hour</p>
                <BarChart data={dashboardData.analytics.dailyTraffic} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Abandonment Rate</h3>
                <p className="text-sm text-slate-400">
                  Weekly percent of no-shows
                </p>
                <BarChart data={dashboardData.analytics.abandonmentRate} />
              </div>
            </div>
          </div>
        );
      case "Services":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {dashboardData.services.map((service) => (
                <div
                  key={service.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Estimated duration:{" "}
                    <span className="text-slate-200">{service.duration}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Queue load:{" "}
                    <span className="text-slate-200">{service.load}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Ratings & Reputation":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Average Rating</p>
                <p className="mt-4 text-4xl font-semibold">
                  {dashboardData.ratings.average}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Based on verified transactions
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Trust Score</p>
                <p className="mt-4 text-4xl font-semibold">
                  {dashboardData.ratings.trustScore}%
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Weighted by punctuality, ratings, and resolution logs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Rating Integrity</p>
                <p className="mt-4 text-sm text-slate-200">
                  Transaction-based ratings unlock only after service
                  completion, preventing bias and ensuring reputational
                  fairness.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Recent Reviews</h3>
              <div className="mt-4 space-y-4">
                {dashboardData.ratings.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-200">
                      {review.author}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{review.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "System Settings":
        return (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Queue Rules</h3>
              <p className="mt-2 text-sm text-slate-300">
                FIFO enforcement is applied to all services. Manual overrides
                are logged for audit purposes.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 p-4">
                <div>
                  <p className="text-sm font-semibold">FIFO Enforcement</p>
                  <p className="text-xs text-slate-400">
                    Hard rule at the queue engine level
                  </p>
                </div>
                <input type="checkbox" checked readOnly className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Notification Threshold</h3>
              <p className="mt-2 text-sm text-slate-300">
                Notify customers when they are
              </p>
              <div className="mt-4 flex items-center gap-3">
                <input
                  type="text"
                  value="3 positions away"
                  readOnly
                  className="w-48 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm"
                />
                <Pill>System default</Pill>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Manual Override</h3>
              <p className="mt-2 text-sm text-slate-300">
                Disabled in demo mode. Production requires supervisor
                authentication.
              </p>
              <button
                className="mt-4 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-400"
                disabled
              >
                Override Disabled
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
            <a
              href="#dashboard"
              className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white"
            >
              Provider Dashboard
            </a>
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
              Solving Ethiopia’s queue bottlenecks with a hybrid, real-time
              system.
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Werefa unifies remote and walk-in access into a single FIFO queue,
              delivering real-time visibility and fair service delivery for
              SMEs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-sky-400/90 px-6 py-3 text-sm font-semibold text-slate-950">
                Join Queue
              </button>
              <button className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white">
                Provider Dashboard
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>Hybrid Remote + Walk-In</Pill>
              <Pill>Fair FIFO Enforcement</Pill>
              <Pill>Academic Capstone 2026</Pill>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Live Queue Snapshot</h3>
            <p className="mt-2 text-sm text-slate-300">
              Demo panel showing how customers see current load and estimated
              wait time.
            </p>
            <div className="mt-6 space-y-4">
              {dashboardData.liveQueue.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.cells.ticket}
                    </p>
                    <p className="text-xs text-slate-400">{item.cells.name}</p>
                  </div>
                  <div className="text-right text-xs text-slate-300">
                    <p>{item.cells.wait} est.</p>
                    <div className="mt-1">{item.cells.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        id="problem"
        eyebrow="Problem"
        title="Manual queueing harms trust, productivity, and safety."
        subtitle="Across Ethiopian SMEs, queues are enforced by observation and memory. This creates congestion, opacity, and inconsistent service delivery."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.problemCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section
        id="solution"
        eyebrow="Solution"
        title="Werefa introduces a hybrid queue with system-level enforcement."
        subtitle="The platform coordinates remote and on-site access while maintaining a single authoritative queue state."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {landingData.solutionSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="Four steps to replace uncertainty with transparency."
        subtitle="Designed for low bandwidth environments and high-volume service desks."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {landingData.howItWorks.map((step, index) => (
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
        eyebrow="Key Features"
        title="Built for real-world constraints and academic rigor."
        subtitle="Every feature is backed by operational needs and systems design considerations."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {landingData.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section
        id="architecture"
        eyebrow="Architecture Overview"
        title="A modular monolith optimized for concurrency and clarity."
        subtitle="Werefa maintains a single source of truth for queue state while scaling real-time updates safely."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Data Flow</h3>
            <p className="mt-3 text-sm text-slate-300">
              Client → Backend → Database. WebSocket channels broadcast queue
              state, while transactional writes ensure FIFO consistency under
              concurrent access.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Client Apps
              </div>
              <span className="text-slate-400">→</span>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Queue Engine & Service Marketplace
              </div>
              <span className="text-slate-400">→</span>
              <div className="rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                Relational DB
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">System Notes</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                • Modular monolith keeps team velocity and deployment
                simplicity.
              </li>
              <li>
                • WebSockets provide low-latency queue updates across devices.
              </li>
              <li>
                • Concurrency control prevents double-serving or skipped
                tickets.
              </li>
              <li>
                • Audit logs support ethics, accountability, and system
                evaluation.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="impact"
        eyebrow="Impact & Benefits"
        title="Operational gains for customers, SMEs, and urban systems."
        subtitle="Werefa aligns service delivery with measurable outcomes and social efficiency."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Customers</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Predictable waiting time and reduced idle periods.</li>
              <li>• Remote access with inclusive walk-in support.</li>
              <li>• Fair ordering and transparent queue status.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">SMEs</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Better throughput and service planning.</li>
              <li>• Visibility into peak demand and staffing needs.</li>
              <li>• Reputation building through verified ratings.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Society</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Reduced congestion around critical services.</li>
              <li>• Time savings that improve urban productivity.</li>
              <li>• Transparent service governance.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="stack"
        eyebrow="Technology Stack"
        title="Chosen for reliability, maintainability, and academic clarity."
        subtitle="Each layer is documented and scoped to meet senior project evaluation criteria."
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
        id="use-cases"
        eyebrow="Use Cases"
        title="Built for diverse service environments."
        subtitle="The system is adaptable across public and private service providers."
      >
        <div className="flex flex-wrap gap-3">
          {landingData.useCases.map((useCase) => (
            <Pill key={useCase}>{useCase}</Pill>
          ))}
        </div>
      </Section>

      <Section
        id="academic"
        eyebrow="Academic Alignment"
        title="Mapped to core university curriculum domains."
        subtitle="The project bridges theory and applied system design."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {landingData.academicAlignment.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-semibold text-slate-200">{topic}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="team"
        eyebrow="Team"
        title="A multidisciplinary capstone team."
        subtitle="Roles reflect the system lifecycle from research to deployment."
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

      <section
        id="dashboard"
        className="border-b border-white/5 bg-slate-950/70 py-16"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Provider Dashboard
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                A data-rich operational console
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                This dashboard simulates the provider-facing system that manages
                live queues, analytics, services, and reputation signals. All
                values are mock data designed to reflect realistic operational
                load.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
              <p className="text-xs text-slate-400">Provider</p>
              <p className="text-sm font-semibold">Addis SME Service Center</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-5 lg:sticky lg:top-6">
              {[
                "Dashboard",
                "Live Queue",
                "Analytics",
                "Services",
                "Ratings & Reputation",
                "System Settings",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setActivePage(item)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    activePage === item
                      ? "bg-sky-400/20 text-white"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item}</span>
                  {activePage === item && (
                    <span className="text-sky-300">●</span>
                  )}
                </button>
              ))}
            </aside>

            <main className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {activePage}
                  </h3>
                  <p className="text-sm text-slate-400">
                    Operational status updated 2 minutes ago.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Pill>Demo Data</Pill>
                  <Pill>Read Only</Pill>
                </div>
              </div>
              {renderDashboardPage()}
            </main>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Werefa – Capstone Project</h3>
            <p className="text-sm text-slate-400">
              Senior Project | 2026 | Ethiopia
            </p>
          </div>
          <div className="text-sm text-slate-400">
            Designed for academic evaluation and real-world deployment
            readiness.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
