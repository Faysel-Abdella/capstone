import React from "react";

const SystemNotificationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">
          Notification Policies
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Notification rules determine when customers receive alerts and how
          providers coordinate service readiness.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            Threshold Rule
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Notify customers at 3 positions away.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            Delivery Channels
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            SMS, in-app, and kiosk display.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            Escalation Rules
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Supervisor notified after 2 no-shows.
          </p>
        </div>
      </div>

      {/* Notification policies would be managed via a rules engine and stored in configuration DB. */}
    </div>
  );
};

export default SystemNotificationsPage;
