import React, { useMemo } from "react";
import { AlertTriangle } from "lucide-react";
import { Pill } from "../../../components/ui";

const LiveQueuePage = () => {
  const data = useMemo(
    () => ({
      queue: [
        {
          id: "T-2041",
          name: "Hanna Bekele",
          entry: "Remote",
          service: "General Consultation",
          wait: "12 min",
          status: "Waiting",
          priority: "Standard",
        },
        {
          id: "T-2042",
          name: "Yonas Abate",
          entry: "Walk-In",
          service: "Document Review",
          wait: "6 min",
          status: "Called",
          priority: "Standard",
        },
        {
          id: "T-2043",
          name: "Mimi Tsegaye",
          entry: "Remote",
          service: "Payments & Receipts",
          wait: "18 min",
          status: "Waiting",
          priority: "High",
        },
        {
          id: "T-2044",
          name: "Elias Zerihun",
          entry: "Walk-In",
          service: "Special Assistance",
          wait: "22 min",
          status: "Delayed",
          priority: "Standard",
        },
      ],
    }),
    [],
  );

  const statusStyles = {
    Waiting: "bg-amber-50 text-amber-700 border-amber-200",
    Called: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Delayed: "bg-rose-50 text-rose-700 border-rose-200",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Live Queue Operations</h2>
        <p className="mt-2 text-sm text-slate-500">
          FIFO ordering is enforced at the queue engine. Operators act on the live queue state streamed
          through WebSockets.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Call Next
          </button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Mark Served
          </button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Mark No-Show
          </button>
          <button
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400"
            disabled
          >
            Escalate (demo)
          </button>
          <Pill className="border-slate-200 bg-slate-100 text-slate-700">FIFO enforced</Pill>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {[
                "Ticket ID",
                "Customer Name",
                "Entry Type",
                "Service Type",
                "Est. Wait",
                "Status",
                "Priority",
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
            {data.queue.map((row) => (
              <tr key={row.id} className="text-sm text-slate-700">
                <td className="px-4 py-4 font-semibold text-slate-900">{row.id}</td>
                <td className="px-4 py-4">{row.name}</td>
                <td className="px-4 py-4">{row.entry}</td>
                <td className="px-4 py-4">{row.service}</td>
                <td className="px-4 py-4">{row.wait}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                      statusStyles[row.status]
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  {row.priority === "High" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                      <AlertTriangle size={12} /> Priority
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Standard
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* WebSocket hook would stream queue updates and update row status in real time. */}
    </div>
  );
};

export default LiveQueuePage;
