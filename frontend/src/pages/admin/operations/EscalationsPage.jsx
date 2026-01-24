import React, { useMemo } from "react";
import { AlertTriangle } from "lucide-react";

const EscalationsPage = () => {
  const cases = useMemo(
    () => [
      {
        id: "ESC-104",
        title: "Extended delay for special assistance",
        priority: "High",
        status: "Open",
        owner: "Supervisor Desk",
      },
      {
        id: "ESC-105",
        title: "Repeated no-show for remote ticket",
        priority: "Medium",
        status: "In Review",
        owner: "Operations Lead",
      },
      {
        id: "ESC-106",
        title: "Priority override request",
        priority: "Low",
        status: "Resolved",
        owner: "Queue Manager",
      },
    ],
    [],
  );

  const priorityStyles = {
    High: "bg-rose-50 text-rose-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Operational Escalations
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Escalations capture exceptions to normal queue flow. They are logged
          for audit and tracked to resolution.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {cases.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400">{item.id}</p>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[item.priority]}`}
              >
                {item.priority}
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-900">
              {item.title}
            </p>
            <p className="mt-2 text-xs text-slate-500">Owner: {item.owner}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <AlertTriangle size={14} /> Status: {item.status}
            </div>
          </div>
        ))}
      </div>

      {/* Escalation events would be stored as transactional audit records in production. */}
    </div>
  );
};

export default EscalationsPage;
