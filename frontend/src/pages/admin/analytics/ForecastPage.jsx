import React from "react";
import { Pill } from "../../../components/ui";

const ForecastPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">Forecast (Demo)</h2>
        <p className="mt-2 text-sm text-slate-300">
          Experimental forecasting module. In production, this would use
          historical queue velocity and service duration to generate predictive
          staffing guidance.
        </p>
        <Pill className="mt-4 border-amber-400/30 bg-amber-500/15 text-amber-300">
          Experimental
        </Pill>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Projected Peak
          </p>
          <p className="mt-3 text-2xl font-semibold text-white">
            11:00 – 13:30
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Expected queue volume 36–42 tickets
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Staffing Suggestion
          </p>
          <p className="mt-3 text-2xl font-semibold text-white">
            +2 Service Desks
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Maintain SLA &lt; 15 minutes
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Confidence
          </p>
          <p className="mt-3 text-2xl font-semibold text-white">74%</p>
          <p className="mt-2 text-sm text-slate-300">
            Model calibrated on 30-day data
          </p>
        </div>
      </div>

      {/* Predictive analytics would integrate ML models hosted in a separate forecasting service. */}
    </div>
  );
};

export default ForecastPage;
