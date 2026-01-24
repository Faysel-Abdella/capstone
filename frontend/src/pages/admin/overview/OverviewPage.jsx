import React, { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard, MetricCard, Pill } from "../../../components/ui";

const OverviewPage = () => {
  const data = useMemo(
    () => ({
      kpis: [
        {
          label: "Active Queue Length",
          value: "26",
          note: "Across all services",
        },
        {
          label: "Avg. Waiting Time",
          value: "12.4 min",
          note: "Rolling 2-hour window",
        },
        { label: "Customers Served Today", value: "168", note: "Live counter" },
        { label: "No-Show Rate", value: "4.3%", note: "Target < 6%" },
        { label: "System Load", value: "68%", note: "CPU + queue volume" },
        { label: "SLA Compliance", value: "92%", note: "Within 15 min target" },
      ],
      queueTrend: [
        { time: "08:00", queue: 12, served: 8 },
        { time: "09:00", queue: 22, served: 16 },
        { time: "10:00", queue: 31, served: 21 },
        { time: "11:00", queue: 24, served: 20 },
        { time: "12:00", queue: 29, served: 23 },
        { time: "13:00", queue: 34, served: 28 },
        { time: "14:00", queue: 27, served: 26 },
      ],
      systemStatus: [
        {
          label: "System Health",
          value: "Stable",
          detail: "No degraded services",
        },
        {
          label: "WebSocket Status",
          value: "Connected",
          detail: "Latency 180ms",
        },
        {
          label: "Last Sync",
          value: "2 mins ago",
          detail: "Queue state persisted",
        },
      ],
    }),
    [],
  );

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Command Center Overview
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              This module aggregates live queue telemetry and operational KPIs
              to guide staffing decisions and SLA compliance.
            </p>
          </div>
          <Pill className="border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
            Operational
          </Pill>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.kpis.map((kpi) => (
          <MetricCard
            key={kpi.label}
            {...kpi}
            className="border-white/10"
            labelClassName="text-slate-300"
            valueClassName="text-white"
            noteClassName="text-slate-400"
          />
        ))}
      </div>

      <ChartCard
        title="Queue Volume vs Service Completion"
        subtitle="Live telemetry updated every 5 minutes"
        badge="Real-Time"
        className="border-white/10"
        titleClassName="text-white"
        subtitleClassName="text-slate-300"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.queueTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
              }}
            />
            <Line
              type="monotone"
              dataKey="queue"
              stroke="#0ea5e9"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="served"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid gap-4 lg:grid-cols-3">
        {data.systemStatus.map((status) => (
          <div
            key={status.label}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {status.label}
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              {status.value}
            </p>
            <p className="mt-2 text-sm text-slate-300">{status.detail}</p>
          </div>
        ))}
      </div>

      {/* Backend integration note: real-time KPIs would stream from WebSocket + analytics services. */}
    </div>
  );
};

export default OverviewPage;
