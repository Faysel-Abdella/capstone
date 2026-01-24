import React from "react";
import { Plug } from "lucide-react";

const IntegrationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          System Integrations (Demo)
        </h2>
        <p className="mt-2 text-sm text-slate-500">
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
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <Plug size={18} />
              <span className="text-sm font-semibold text-slate-900">
                {integration.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
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
