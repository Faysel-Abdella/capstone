import React from "react";

const SystemNotificationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Notification Policies
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Notification rules determine when customers receive alerts and how
          providers coordinate service readiness.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">
            Threshold Rule
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Notify customers at 3 positions away.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">
            Delivery Channels
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            SMS, in-app, and kiosk display.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-700">
            Escalation Rules
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Supervisor notified after 2 no-shows.
          </p>
        </div>
      </div>

      {/* Notification policies would be managed via a rules engine and stored in configuration DB. */}
    </div>
  );
};

export default SystemNotificationsPage;
