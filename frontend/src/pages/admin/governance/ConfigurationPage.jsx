import React from "react";

const ConfigurationPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">
          System Configuration
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Governance rules are locked in demo mode. In production, changes are
          audited and require supervisor approval.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            FIFO Enforcement
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Strict FIFO ordering is enforced at the queue engine level.
          </p>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2">
            <span className="text-sm text-slate-300">Locked</span>
            <input
              type="checkbox"
              checked
              readOnly
              className="h-5 w-5"
              title="Governance locked"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            Notification Threshold
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Notify users when they are within
          </p>
          <input
            type="text"
            value="3 positions"
            readOnly
            className="mt-4 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-200"
            title="Read-only in demo"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <h3 className="text-sm font-semibold text-slate-100">
            Queue Skip Rules
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Skipping is disabled unless an escalation is approved by
            supervisors.
          </p>
          <button
            className="mt-4 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-semibold text-slate-400"
            disabled
            title="Policy locked in demo"
          >
            Overrides Disabled
          </button>
        </div>
      </div>

      {/* Configuration changes would be persisted with transactional safeguards and audit trails. */}
    </div>
  );
};

export default ConfigurationPage;
