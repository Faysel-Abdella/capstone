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
    Waiting: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    Called: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    Delayed: "bg-rose-500/15 text-rose-300 border-rose-400/30",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">
          Live Queue Operations
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          FIFO ordering is enforced at the queue engine. Operators act on the
          live queue state streamed through WebSockets.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/40">
            Call Next
          </button>
          <button className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200">
            Mark Served
          </button>
          <button className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200">
            Mark No-Show
          </button>
          <button
            className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-400"
            disabled
          >
            Escalate (demo)
          </button>
          <Pill className="border-white/10 bg-slate-950/60 text-slate-200">
            FIFO enforced
          </Pill>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-lg shadow-slate-950/40">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-slate-950/80">
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
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {data.queue.map((row) => (
              <tr key={row.id} className="text-sm text-slate-200">
                <td className="px-4 py-4 font-semibold text-white">{row.id}</td>
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
                    <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-500/15 px-3 py-1 text-xs font-semibold text-rose-300">
                      <AlertTriangle size={12} /> Priority
                    </span>
                  ) : (
                    <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-200">
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
