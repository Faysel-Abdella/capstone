import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const SupportTicketsPage = () => {
  const tickets = useMemo(
    () => [
      {
        id: "SUP-221",
        type: "Delay",
        reporter: "Customer Desk",
        priority: "High",
        status: "Open",
        createdAt: "10:32 AM",
      },
      {
        id: "SUP-222",
        type: "No-show",
        reporter: "Queue Manager",
        priority: "Medium",
        status: "In Progress",
        createdAt: "09:55 AM",
      },
      {
        id: "SUP-223",
        type: "System",
        reporter: "IT Support",
        priority: "Low",
        status: "Resolved",
        createdAt: "Yesterday",
      },
    ],
    [],
  );

  const statusBadge = {
    Open: "bg-rose-50 text-rose-700",
    "In Progress": "bg-amber-50 text-amber-700",
    Resolved: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Support Tickets
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Support tickets capture service disruptions and customer concerns,
          improving reliability and trust through transparent resolution.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {[
                "Ticket ID",
                "Issue Type",
                "Reported By",
                "Priority",
                "Status",
                "Created",
              ].map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="text-sm text-slate-700">
                <td className="px-4 py-4 font-semibold text-slate-900">
                  <Link
                    to={`/admin/support/tickets/${ticket.id}`}
                    className="hover:text-slate-700"
                  >
                    {ticket.id}
                  </Link>
                </td>
                <td className="px-4 py-4">{ticket.type}</td>
                <td className="px-4 py-4">{ticket.reporter}</td>
                <td className="px-4 py-4">{ticket.priority}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusBadge[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-4 py-4">{ticket.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ticket data would be retrieved from a support case management service. */}
    </div>
  );
};

export default SupportTicketsPage;
