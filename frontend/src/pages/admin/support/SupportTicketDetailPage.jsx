import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

const SupportTicketDetailPage = () => {
  const { ticketId } = useParams();
  const detail = useMemo(
    () => ({
      id: ticketId || "SUP-221",
      description:
        "Customer reported extended wait time beyond SLA during peak hours. Investigation required for staffing adherence.",
      timeline: [
        { time: "10:32 AM", note: "Ticket created by Customer Desk" },
        { time: "10:40 AM", note: "Assigned to Operations Lead" },
        { time: "11:10 AM", note: "Initial investigation started" },
      ],
      assignedAgent: "Selam T.",
      resolution: "Pending staffing adjustment and queue audit report.",
    }),
    [ticketId],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Ticket {detail.id}</h2>
            <p className="mt-2 text-sm text-slate-500">Support case detail and resolution tracking.</p>
          </div>
          <Link to="/admin/support/tickets" className="text-sm font-semibold text-slate-600">
            Back to Tickets
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Issue Description</h3>
          <p className="mt-3 text-sm text-slate-500">{detail.description}</p>

          <h4 className="mt-6 text-sm font-semibold text-slate-700">Timeline</h4>
          <div className="mt-3 space-y-3">
            {detail.timeline.map((entry) => (
              <div key={entry.time} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs text-slate-400">{entry.time}</p>
                <p className="text-sm text-slate-700">{entry.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Assigned Agent</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">{detail.assignedAgent}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Resolution Notes</p>
            <p className="mt-3 text-sm text-slate-500">{detail.resolution}</p>
          </div>
        </div>
      </div>

      {/* Detailed ticket notes would sync with an incident management backend. */}
    </div>
  );
};

export default SupportTicketDetailPage;
