import React, { useMemo } from "react";

const AuditLogsPage = () => {
  const logs = useMemo(
    () => [
      {
        id: "log-1",
        action: "Queue resumed",
        actor: "Supervisor",
        time: "10:42 AM",
        result: "Success",
      },
      {
        id: "log-2",
        action: "Ticket served",
        actor: "Desk-02",
        time: "10:31 AM",
        result: "Success",
      },
      {
        id: "log-3",
        action: "Manual override request",
        actor: "Desk-01",
        time: "10:05 AM",
        result: "Denied",
      },
      {
        id: "log-4",
        action: "Configuration review",
        actor: "Admin",
        time: "Yesterday",
        result: "Logged",
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">Audit Logs</h2>
        <p className="mt-2 text-sm text-slate-300">
          Audit logs ensure transparency and accountability by recording every
          system action.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40">
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-4">
              <div className="mt-1 h-3 w-3 rounded-full bg-sky-400/80" />
              <div className="flex-1 rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">
                    {log.action}
                  </p>
                  <span className="text-xs text-slate-400">{log.time}</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Actor: {log.actor}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Result: {log.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit records would be immutable and stored in a compliance-grade datastore. */}
    </div>
  );
};

export default AuditLogsPage;
