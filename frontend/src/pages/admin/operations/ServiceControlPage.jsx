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
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-blue-950/70 p-6 shadow-lg shadow-slate-950/40">
        <h2 className="text-2xl font-semibold text-white">Service Control</h2>
        <p className="mt-2 text-sm text-slate-300">
          Service configurations are monitored by administrators to balance load
          and update expected service durations.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/40"
          >
            <h3 className="text-lg font-semibold text-white">{service.name}</h3>
            <p className="mt-2 text-sm text-slate-300">
              Avg. duration:{" "}
              <span className="font-semibold text-slate-100">
                {service.duration}
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Queue load:{" "}
              <span className="font-semibold text-slate-100">
                {service.load}
              </span>
            </p>
            <button
              className="mt-4 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-semibold text-slate-400"
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
