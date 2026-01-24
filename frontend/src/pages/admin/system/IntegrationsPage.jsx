import React from "react";
import { Plug } from "lucide-react";

const IntegrationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">
          System Integrations (Demo)
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          External integrations enable payments, messaging, and analytics
          partnerships. All connectors are demo-only in this capstone build.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { name: "Telebirr", status: "Planned" },
          { name: "SMS Gateway", status: "Active (Demo)" },
          { name: "Email Notifications", status: "Planned" },
        ].map((integration) => (
          <div
            key={integration.name}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <Plug size={18} />
              <span className="text-sm font-semibold text-white">
                {integration.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Status: {integration.status}
            </p>
          </div>
        ))}
      </div>

      {/* Integrations would be managed through secure API keys and service contracts. */}
    </div>
  );
};

export default IntegrationsPage;
