import React from "react";

// Shared UI primitives for both landing and admin pages.
// Keeping these components together helps maintain consistent visuals
// and supports academic assessment of component reuse.

export const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="border-b border-white/5 py-16 sm:py-20">
    <div className="mx-auto max-w-6xl px-6">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl text-lg text-slate-300">{subtitle}</p>
      )}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

export const MetricCard = ({ label, value, note }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
    <p className="text-sm text-slate-400">{label}</p>
    <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
  </div>
);

export const FeatureCard = ({ title, description, icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/20 text-xl">
        {icon}
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-4 text-sm text-slate-300">{description}</p>
  </div>
);

export const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
    {children}
  </span>
);

export const Table = ({ columns, data }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10">
    <table className="min-w-full divide-y divide-white/10">
      <thead className="bg-white/5">
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-300"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5 bg-slate-950/40">
        {data.map((row) => (
          <tr key={row.id} className="text-sm text-slate-200">
            {Object.values(row.cells).map((value, index) => (
              <td key={`${row.id}-${index}`} className="px-4 py-4">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ChartCard = ({ title, subtitle, children, badge }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
      </div>
      {badge && <Pill>{badge}</Pill>}
    </div>
    <div className="mt-6 h-52">{children}</div>
  </div>
);
