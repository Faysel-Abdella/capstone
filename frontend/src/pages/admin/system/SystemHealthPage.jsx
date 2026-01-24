import React from "react";
import { Activity, Database, Wifi } from "lucide-react";

const SystemHealthPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">System Health</h2>
        <p className="mt-2 text-sm text-slate-300">
          Status indicators summarize infrastructure health and real-time
          connectivity.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center gap-2 text-slate-300">
            <Activity size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">
              Queue Engine
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">Stable</p>
          <p className="mt-2 text-sm text-slate-300">Latency 120ms</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center gap-2 text-slate-300">
            <Database size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">Database</span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">Healthy</p>
          <p className="mt-2 text-sm text-slate-300">Last write: 2 mins ago</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <div className="flex items-center gap-2 text-slate-300">
            <Wifi size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">
              WebSocket
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-white">Connected</p>
          <p className="mt-2 text-sm text-slate-300">Clients: 146</p>
        </div>
      </div>

      {/* Health checks would poll infrastructure services and update status in real time. */}
    </div>
  );
};

export default SystemHealthPage;
