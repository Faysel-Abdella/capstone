import React from "react";
import { Pill } from "../../../components/ui";

const ForecastPage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Forecast (Demo)
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Experimental forecasting module. In production, this would use
          historical queue velocity and service duration to generate predictive
          staffing guidance.
        </p>
        <Pill className="mt-4 border-amber-200 bg-amber-50 text-amber-700">
          Experimental
        </Pill>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Projected Peak
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            11:00 – 13:30
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Expected queue volume 36–42 tickets
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Staffing Suggestion
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            +2 Service Desks
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Maintain SLA &lt; 15 minutes
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Confidence
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">74%</p>
          <p className="mt-2 text-sm text-slate-500">
            Model calibrated on 30-day data
          </p>
        </div>
      </div>

      {/* Predictive analytics would integrate ML models hosted in a separate forecasting service. */}
    </div>
  );
};

export default ForecastPage;
