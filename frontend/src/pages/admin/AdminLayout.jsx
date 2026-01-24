import React, { useMemo, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Activity,
  Bell,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Gauge,
  LayoutDashboard,
  ShieldCheck,
  Sliders,
  UserCircle,
  Wrench,
} from "lucide-react";

const AdminLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState({
    Overview: true,
    Operations: true,
    Analytics: true,
    Support: true,
    Governance: true,
    System: true,
  });

  const navigation = useMemo(
    () => [
      {
        label: "Overview",
        icon: LayoutDashboard,
        items: [{ label: "Overview", to: "/admin/overview" }],
      },
      {
        label: "Operations",
        icon: ClipboardList,
        items: [
          { label: "Live Queue", to: "/admin/operations/live-queue" },
          { label: "Service Control", to: "/admin/operations/service-control" },
          { label: "Escalations", to: "/admin/operations/escalations" },
        ],
      },
      {
        label: "Analytics",
        icon: Gauge,
        items: [
          { label: "Performance", to: "/admin/analytics/performance" },
          { label: "Demand Patterns", to: "/admin/analytics/demand-patterns" },
          { label: "Forecast (Demo)", to: "/admin/analytics/forecast" },
        ],
      },
      {
        label: "Support",
        icon: ShieldCheck,
        items: [
          { label: "Support Tickets", to: "/admin/support/tickets" },
          { label: "Incident Logs", to: "/admin/support/incidents" },
          { label: "Quality Control", to: "/admin/support/quality-control" },
        ],
      },
      {
        label: "Governance",
        icon: Sliders,
        items: [
          { label: "Configuration", to: "/admin/governance/configuration" },
          { label: "Audit Logs", to: "/admin/governance/audit-logs" },
          {
            label: "Roles & Permissions",
            to: "/admin/governance/roles-permissions",
          },
        ],
      },
      {
        label: "System",
        icon: Wrench,
        items: [
          { label: "Health", to: "/admin/system/health" },
          { label: "Notifications", to: "/admin/system/notifications" },
          { label: "Integrations", to: "/admin/system/integrations" },
        ],
      },
    ],
    [],
  );

  const breadcrumbs = useMemo(() => {
    const map = {
      admin: "Admin",
      overview: "Overview",
      operations: "Operations",
      "live-queue": "Live Queue",
      "service-control": "Service Control",
      escalations: "Escalations",
      analytics: "Analytics",
      performance: "Performance",
      "demand-patterns": "Demand Patterns",
      forecast: "Forecast",
      support: "Support",
      tickets: "Support Tickets",
      incidents: "Incident Logs",
      "quality-control": "Quality Control",
      governance: "Governance",
      configuration: "Configuration",
      "audit-logs": "Audit Logs",
      "roles-permissions": "Roles & Permissions",
      system: "System",
      health: "Health",
      notifications: "Notifications",
      integrations: "Integrations",
    };

    const segments = location.pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => ({
      label: map[segment] || segment,
      path: `/${segments.slice(0, index + 1).join("/")}`,
    }));
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside
          className={`flex flex-col border-r border-white/10 bg-slate-950/80 shadow-lg shadow-slate-950/40 transition-all duration-200 ${
            collapsed ? "w-20" : "w-72"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/30 bg-slate-900/80 text-sky-100">
                W
              </div>
              {!collapsed && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Provider
                  </p>
                  <p className="text-sm font-semibold">
                    Addis SME Service Center
                  </p>
                </div>
              )}
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/10 p-2 text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setCollapsed((prev) => !prev)}
            >
              {collapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
          </div>

          <nav className="flex-1 space-y-3 px-4 pb-6">
            {navigation.map((section) => {
              const SectionIcon = section.icon;
              const isOpen = openSections[section.label];
              return (
                <div key={section.label} className="space-y-2">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSections((prev) => ({
                        ...prev,
                        [section.label]: !prev[section.label],
                      }))
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    <span className="flex items-center gap-2">
                      <SectionIcon size={16} />
                      {!collapsed && section.label}
                    </span>
                    {!collapsed &&
                      (isOpen ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      ))}
                  </button>
                  {isOpen && (
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={({ isActive }) =>
                            `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                              isActive
                                ? "bg-sky-500/20 text-white"
                                : "text-slate-300 hover:bg-white/5"
                            }`
                          }
                        >
                          {!collapsed && item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="border-t border-white/10 px-5 py-4 text-xs text-slate-400">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <Activity size={14} />
                Demo mode — read-only panels
              </div>
            )}
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-6 py-4 shadow-lg shadow-slate-950/40">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Admin Console
              </p>
              <h1 className="text-lg font-semibold">
                Werefa Operations & Governance
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online / Stable
              </div>
              <button className="relative rounded-full border border-white/10 p-2 text-slate-300 hover:text-white">
                <Bell size={18} />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-rose-500" />
              </button>
              <div className="flex items-center gap-2">
                <UserCircle size={28} className="text-slate-300" />
                <div className="text-sm">
                  <p className="font-semibold">Operations Lead</p>
                  <p className="text-xs text-slate-400">Admin Access</p>
                </div>
              </div>
            </div>
          </header>

          <div className="border-b border-white/10 bg-slate-950/70 px-6 py-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  <Link
                    to={crumb.path}
                    className="font-medium text-slate-300 hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-slate-400">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <main className="flex-1 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-blue-950/40 px-6 py-8">
            {/* Nested routes map to enterprise modules; this reflects real-world information architecture. */}
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
