import React, { useMemo } from "react";

const ServiceControlPage = () => {
  const services = useMemo(
    () => [
      {
        id: "svc-01",
        name: "General Consultation",
        duration: "12 min",
        load: "High",
      },
      {
        id: "svc-02",
        name: "Document Review",
        duration: "8 min",
        load: "Medium",
      },
      {
        id: "svc-03",
        name: "Payments & Receipts",
        duration: "6 min",
        load: "Low",
      },
      {
        id: "svc-04",
        name: "Special Assistance",
        duration: "15 min",
        load: "Medium",
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Service Control
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Service configurations are monitored by administrators to balance load
          and update expected service durations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {service.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Avg. duration:{" "}
              <span className="font-semibold text-slate-800">
                {service.duration}
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Queue load:{" "}
              <span className="font-semibold text-slate-800">
                {service.load}
              </span>
            </p>
            <button
              className="mt-4 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-400"
              disabled
            >
              Edit service (demo)
            </button>
          </div>
        ))}
      </div>

      {/* Database-backed service definitions would be editable for authorized roles. */}
    </div>
  );
};

export default ServiceControlPage;
