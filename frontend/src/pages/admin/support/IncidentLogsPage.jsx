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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Incident Logs</h2>
        <p className="mt-2 text-sm text-slate-500">
          Incident tracking captures service disruptions and root-cause analysis
          to protect service reliability.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400">
                {incident.id}
              </p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {incident.impact} impact
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900">
              {incident.summary}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Status: {incident.status}
            </p>
            <p className="mt-2 text-xs text-slate-500">
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
