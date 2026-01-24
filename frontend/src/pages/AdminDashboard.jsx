import React, { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard, MetricCard, Pill, Table } from "../components/ui";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("Overview");

  const data = useMemo(
    () => ({
      kpis: [
        {
          label: "Active Queue Length",
          value: "24",
          note: "Across all services",
        },
        {
          label: "Avg. Service Time",
          value: "11.6 min",
          note: "Weighted, 7-day",
        },
        {
          label: "Customers Served Today",
          value: "143",
          note: "Updated 2 minutes ago",
        },
        { label: "No-Show Rate", value: "4.8%", note: "Target < 6%" },
        { label: "System Load", value: "71%", note: "Peak period" },
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
        dailyTraffic: [
          { label: "08", value: 8 },
          { label: "10", value: 19 },
          { label: "12", value: 24 },
          { label: "14", value: 31 },
          { label: "16", value: 22 },
          { label: "18", value: 14 },
        ],
        serviceDuration: [
          { label: "Mon", value: 12 },
          { label: "Tue", value: 10 },
          { label: "Wed", value: 11 },
          { label: "Thu", value: 13 },
          { label: "Fri", value: 9 },
          { label: "Sat", value: 8 },
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
      auditLogs: [
        {
          id: "log-1",
          cells: { action: "Ticket served", user: "Desk-02", time: "10:42 AM" },
        },
        {
          id: "log-2",
          cells: {
            action: "Queue paused",
            user: "Supervisor",
            time: "10:31 AM",
          },
        },
        {
          id: "log-3",
          cells: {
            action: "Priority override",
            user: "Supervisor",
            time: "09:58 AM",
          },
        },
      ],
    }),
    [],
  );

  const renderPage = () => {
    switch (activePage) {
      case "Overview":
        return (
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {data.kpis.map((kpi) => (
                <MetricCard key={kpi.label} {...kpi} />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <ChartCard
                title="Queue Volume Over Time"
                subtitle="Live trend updated every 5 minutes"
                badge="Realtime"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.queueTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#38bdf8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard
                title="Peak Service Hours"
                subtitle="Average queue arrivals by day"
                badge="Summary"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.peakHours}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                      }}
                    />
                    <Bar dataKey="value" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
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
              <Pill>FIFO enforced</Pill>
            </div>
            <Table
              columns={[
                "Ticket ID",
                "Customer Name",
                "Entry Type",
                "Est. Wait",
                "Status",
              ]}
              data={data.liveQueue}
            />
            {/* TODO: Replace mock queue rows with live WebSocket stream. */}
          </div>
        );
      case "Analytics":
        return (
          <div className="space-y-6">
            <p className="text-sm text-slate-300">
              Analytics inform staffing decisions and highlight bottlenecks in
              service delivery.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <ChartCard title="Daily Traffic" subtitle="Entries by hour">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.analytics.dailyTraffic}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                      }}
                    />
                    <Bar dataKey="value" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard
                title="Avg. Service Duration"
                subtitle="Minutes per service"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data.analytics.serviceDuration}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22d3ee"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard title="Abandonment Rate" subtitle="Weekly percent">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.analytics.abandonmentRate}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="label" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                      }}
                    />
                    <Bar dataKey="value" fill="#f472b6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </div>
        );
      case "Services":
        return (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Avg. duration:{" "}
                  <span className="text-slate-200">{service.duration}</span>
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Current load:{" "}
                  <span className="text-slate-200">{service.load}</span>
                </p>
                <button
                  className="mt-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-400"
                  disabled
                >
                  Edit (demo)
                </button>
              </div>
            ))}
          </div>
        );
      case "Reputation & Ratings":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <p className="text-sm text-slate-400">Average Rating</p>
                <p className="mt-4 text-4xl font-semibold">
                  {data.ratings.average}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Verified transactions only
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <p className="text-sm text-slate-400">Trust Score</p>
                <p className="mt-4 text-4xl font-semibold">
                  {data.ratings.trustScore}%
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Weighted by punctuality, ratings, and resolution logs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <p className="text-sm text-slate-400">Rating Integrity</p>
                <p className="mt-4 text-sm text-slate-200">
                  Transaction-based ratings unlock after service completion,
                  preventing bias and ensuring reputational fairness.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">Recent Reviews</h3>
              <div className="mt-4 space-y-4">
                {data.ratings.reviews.map((review) => (
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
      case "System Configuration":
        return (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold">Queue Enforcement</h3>
              <p className="mt-2 text-sm text-slate-300">
                FIFO enforcement is configured at the queue engine level.
                Overrides are logged for audit.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 p-4">
                <div>
                  <p className="text-sm font-semibold">FIFO Enforcement</p>
                  <p className="text-xs text-slate-400">Locked in demo mode</p>
                </div>
                <input type="checkbox" checked readOnly className="h-5 w-5" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
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
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
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
              <p className="mt-4 text-xs text-slate-400">
                Role-based access controls ensure only authorized supervisors
                can intervene.
              </p>
            </div>
          </div>
        );
      case "Audit Logs":
        return (
          <div className="space-y-6">
            <p className="text-sm text-slate-300">
              Audit logs provide transparency and accountability for queue
              operations.
            </p>
            <Table
              columns={["Action", "User", "Timestamp"]}
              data={data.auditLogs}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const menuItems = [
    "Overview",
    "Live Queue",
    "Analytics",
    "Services",
    "Reputation & Ratings",
    "System Configuration",
    "Audit Logs",
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-white/5 bg-slate-950 px-5 py-6 lg:flex">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
              Provider Console
            </p>
            <h1 className="mt-2 text-xl font-semibold text-white">
              Addis SME Service Center
            </h1>
          </div>
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  activePage === item
                    ? "bg-sky-400/20 text-white"
                    : "text-slate-300 hover:bg-slate-900/40"
                }`}
              >
                <span>{item}</span>
                {activePage === item && <span className="text-sky-300">●</span>}
              </button>
            ))}
          </nav>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-xs text-slate-400">
            Demo mode: All actions are read-only.
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-white/5 bg-slate-950/95 px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-white">{activePage}</h2>
              <p className="text-xs text-slate-400">
                Operational status updated 2 minutes ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Pill>Demo Data</Pill>
              <Pill>Read Only</Pill>
            </div>
          </header>

          <main className="flex-1 px-6 py-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6">
              {renderPage()}
              {/* TODO: Connect these panels to real API + WebSocket data streams. */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
