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

import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import OverviewPage from "./pages/admin/overview/OverviewPage";
import LiveQueuePage from "./pages/admin/operations/LiveQueuePage";
import ServiceControlPage from "./pages/admin/operations/ServiceControlPage";
import EscalationsPage from "./pages/admin/operations/EscalationsPage";
import PerformanceAnalyticsPage from "./pages/admin/analytics/PerformanceAnalyticsPage";
import DemandPatternsPage from "./pages/admin/analytics/DemandPatternsPage";
import ForecastPage from "./pages/admin/analytics/ForecastPage";
import SupportTicketsPage from "./pages/admin/support/SupportTicketsPage";
import SupportTicketDetailPage from "./pages/admin/support/SupportTicketDetailPage";
import IncidentLogsPage from "./pages/admin/support/IncidentLogsPage";
import QualityControlPage from "./pages/admin/support/QualityControlPage";
import ConfigurationPage from "./pages/admin/governance/ConfigurationPage";
import AuditLogsPage from "./pages/admin/governance/AuditLogsPage";
import RolesPermissionsPage from "./pages/admin/governance/RolesPermissionsPage";
import SystemHealthPage from "./pages/admin/system/SystemHealthPage";
import SystemNotificationsPage from "./pages/admin/system/SystemNotificationsPage";
import IntegrationsPage from "./pages/admin/system/IntegrationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Nested admin routes mirror enterprise-style modules and submodules. */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/overview" replace />} />
        <Route path="overview" element={<OverviewPage />} />

        <Route path="operations">
          <Route index element={<Navigate to="/admin/operations/live-queue" replace />} />
          <Route path="live-queue" element={<LiveQueuePage />} />
          <Route path="service-control" element={<ServiceControlPage />} />
          <Route path="escalations" element={<EscalationsPage />} />
        </Route>

        <Route path="analytics">
          <Route index element={<Navigate to="/admin/analytics/performance" replace />} />
          <Route path="performance" element={<PerformanceAnalyticsPage />} />
          <Route path="demand-patterns" element={<DemandPatternsPage />} />
          <Route path="forecast" element={<ForecastPage />} />
        </Route>

        <Route path="support">
          <Route index element={<Navigate to="/admin/support/tickets" replace />} />
          <Route path="tickets" element={<SupportTicketsPage />} />
          <Route path="tickets/:ticketId" element={<SupportTicketDetailPage />} />
          <Route path="incidents" element={<IncidentLogsPage />} />
          <Route path="quality-control" element={<QualityControlPage />} />
        </Route>

        <Route path="governance">
          <Route index element={<Navigate to="/admin/governance/configuration" replace />} />
          <Route path="configuration" element={<ConfigurationPage />} />
          <Route path="audit-logs" element={<AuditLogsPage />} />
          <Route path="roles-permissions" element={<RolesPermissionsPage />} />
        </Route>

        <Route path="system">
          <Route index element={<Navigate to="/admin/system/health" replace />} />
          <Route path="health" element={<SystemHealthPage />} />
          <Route path="notifications" element={<SystemNotificationsPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
          description:
