import React, { useMemo } from "react";
import { Pill } from "../../../components/ui";

const DemandPatternsPage = () => {
  const heatmap = useMemo(
    () => ({
      hours: ["08", "10", "12", "14", "16", "18"],
      days: [
        { day: "Mon", values: [2, 3, 4, 5, 3, 2] },
        { day: "Tue", values: [3, 4, 5, 6, 4, 2] },
        { day: "Wed", values: [2, 3, 5, 5, 3, 2] },
        { day: "Thu", values: [3, 4, 6, 6, 5, 3] },
        { day: "Fri", values: [2, 4, 6, 5, 4, 3] },
        { day: "Sat", values: [1, 2, 3, 3, 2, 1] },
      ],
    }),
    [],
  );

  const intensityClasses = [
    "bg-slate-100",
    "bg-sky-100",
    "bg-sky-200",
    "bg-sky-300",
    "bg-sky-400",
    "bg-sky-500",
    "bg-sky-600",
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Demand Patterns</h2>
        <p className="mt-2 text-sm text-slate-500">
          Heatmap visualization highlights peak hours and days. This supports demand forecasting and
          operational planning.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill className="border-slate-200 bg-slate-100 text-slate-600">Peak hours</Pill>
          <Pill className="border-slate-200 bg-slate-100 text-slate-600">Weekly seasonality</Pill>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-[80px_repeat(6,1fr)] gap-3 text-xs font-semibold text-slate-500">
          <div />
          {heatmap.hours.map((hour) => (
            <div key={hour} className="text-center">
              {hour}:00
            </div>
          ))}
          {heatmap.days.map((row) => (
            <React.Fragment key={row.day}>
              <div className="text-sm font-semibold text-slate-700">{row.day}</div>
              {row.values.map((value, index) => (
                <div
                  key={`${row.day}-${index}`}
                  className={`h-10 rounded-lg ${intensityClasses[value]}`}
                  title={`Load: ${value}`}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Demand signals would be computed from aggregated queue events in the analytics warehouse. */}
    </div>
  );
};

export default DemandPatternsPage;
