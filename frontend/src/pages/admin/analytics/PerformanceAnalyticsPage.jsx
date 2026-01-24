import React, { useMemo } from "react";
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
import { ChartCard, Pill } from "../../../components/ui";

const PerformanceAnalyticsPage = () => {
  const data = useMemo(
    () => ({
      serviceDuration: [
        { name: "Consultation", value: 12 },
        { name: "Documents", value: 8 },
        { name: "Payments", value: 6 },
        { name: "Special", value: 15 },
      ],
      throughput: [
        { time: "08:00", value: 9 },
        { time: "10:00", value: 18 },
        { time: "12:00", value: 22 },
        { time: "14:00", value: 25 },
        { time: "16:00", value: 17 },
      ],
      abandonment: [
        { week: "W1", value: 5 },
        { week: "W2", value: 4 },
        { week: "W3", value: 6 },
        { week: "W4", value: 3 },
      ],
    }),
    [],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">
          Performance Analytics
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Operational analytics guide staffing decisions and highlight
          bottlenecks. Data shown here is simulated for demo purposes.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-white/10 bg-slate-950/60 text-slate-200">
            Data-driven staffing
          </Pill>
          <Pill className="border-white/10 bg-slate-950/60 text-slate-200">
            SLA optimization
          </Pill>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ChartCard
          title="Avg. Service Duration"
          subtitle="Minutes per service"
          className="border-white/10"
          titleClassName="text-white"
          subtitleClassName="text-slate-300"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.serviceDuration}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                }}
              />
              <Bar dataKey="value" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Throughput"
          subtitle="Services completed per hour"
          className="border-white/10"
          titleClassName="text-white"
          subtitleClassName="text-slate-300"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.throughput}>
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
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard
          title="Abandonment Rate"
          subtitle="Weekly no-show rate"
          className="border-white/10"
          titleClassName="text-white"
          subtitleClassName="text-slate-300"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.abandonment}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                }}
              />
              <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-lg font-semibold text-white">
            Observed Bottlenecks
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Document review services consistently exceed average duration,
            indicating the need for additional staffing during peak hours.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-lg font-semibold text-white">
            Staffing Recommendations
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Schedule one additional desk between 10:00–14:00 to maintain SLA
            compliance.
          </p>
        </div>
      </div>

      {/* Analytics services would aggregate queue events from the database and streaming pipeline. */}
    </div>
  );
};

export default PerformanceAnalyticsPage;
