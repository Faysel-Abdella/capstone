import React, { useMemo } from "react";

const IncidentLogsPage = () => {
  const incidents = useMemo(
    () => [
      {
        id: "INC-71",
        impact: "Medium",
        summary: "Queue engine latency spike",
        status: "Resolved",
        resolvedAt: "Today, 09:20",
      },
      {
        id: "INC-72",
        impact: "High",
        summary: "WebSocket disconnect in kiosk mode",
        status: "Monitoring",
        resolvedAt: "Today, 10:05",
      },
      {
        id: "INC-73",
        impact: "Low",
        summary: "Delayed SMS notifications",
        status: "Open",
        resolvedAt: "Pending",
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">Incident Logs</h2>
        <p className="mt-2 text-sm text-slate-300">
          Incident tracking captures service disruptions and root-cause analysis
          to protect service reliability.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400">
                {incident.id}
              </p>
              <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200">
                {incident.impact} impact
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-white">
              {incident.summary}
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Status: {incident.status}
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Resolution: {incident.resolvedAt}
            </p>
          </div>
        ))}
      </div>

      {/* Incident records would integrate with a system reliability platform in production. */}
    </div>
  );
};

export default IncidentLogsPage;
