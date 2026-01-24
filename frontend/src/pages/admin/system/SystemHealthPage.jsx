import React from "react";
import { Activity, Database, Wifi } from "lucide-react";

const SystemHealthPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">System Health</h2>
        <p className="mt-2 text-sm text-slate-500">
          Status indicators summarize infrastructure health and real-time
          connectivity.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Activity size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">
              Queue Engine
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-slate-900">Stable</p>
          <p className="mt-2 text-sm text-slate-500">Latency 120ms</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Database size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">Database</span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-slate-900">Healthy</p>
          <p className="mt-2 text-sm text-slate-500">Last write: 2 mins ago</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600">
            <Wifi size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">
              WebSocket
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            Connected
          </p>
          <p className="mt-2 text-sm text-slate-500">Clients: 146</p>
        </div>
      </div>

      {/* Health checks would poll infrastructure services and update status in real time. */}
    </div>
  );
};

export default SystemHealthPage;
