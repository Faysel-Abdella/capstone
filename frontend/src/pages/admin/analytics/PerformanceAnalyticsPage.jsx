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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Performance Analytics</h2>
        <p className="mt-2 text-sm text-slate-500">
          Operational analytics guide staffing decisions and highlight bottlenecks. Data shown here is
          simulated for demo purposes.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-slate-200 bg-slate-100 text-slate-600">Data-driven staffing</Pill>
          <Pill className="border-slate-200 bg-slate-100 text-slate-600">SLA optimization</Pill>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ChartCard title="Avg. Service Duration" subtitle="Minutes per service" className="bg-white border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.serviceDuration}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0" }} />
              <Bar dataKey="value" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Throughput" subtitle="Services completed per hour" className="bg-white border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.throughput}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0" }} />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Abandonment Rate" subtitle="Weekly no-show rate" className="bg-white border-slate-200">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.abandonment}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e2e8f0" }} />
              <Bar dataKey="value" fill="#f97316" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Observed Bottlenecks</h3>
          <p className="mt-2 text-sm text-slate-500">
            Document review services consistently exceed average duration, indicating the need for
            additional staffing during peak hours.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Staffing Recommendations</h3>
          <p className="mt-2 text-sm text-slate-500">
            Schedule one additional desk between 10:00–14:00 to maintain SLA compliance.
          </p>
        </div>
      </div>

      {/* Analytics services would aggregate queue events from the database and streaming pipeline. */}
    </div>
  );
};

export default PerformanceAnalyticsPage;
