import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminLayout from "./pages/admin/AdminLayout";
import OverviewPage from "./pages/admin/overview/OverviewPage";
import LiveQueuePage from "./pages/admin/operations/LiveQueuePage";
import ServiceControlPage from "./pages/admin/operations/ServiceControlPage";
import EscalationsPage from "./pages/admin/operations/EscalationsPage";
import PerformanceAnalyticsPage from "./pages/admin/analytics/PerformanceAnalyticsPage";
import DemandPatternsPage from "./pages/admin/analytics/DemandPatternsPage";
import ForecastPage from "./pages/admin/analytics/ForecastPage";
import SupportTicketsPage from "./pages/admin/support/SupportTicketsPage";
import SupportTicketDetailPage from "./pages/admin/support/SupportTicketDetailPage";
import IncidentLogsPage from "./pages/admin/support/IncidentLogsPage";
import QualityControlPage from "./pages/admin/support/QualityControlPage";
import ConfigurationPage from "./pages/admin/governance/ConfigurationPage";
import AuditLogsPage from "./pages/admin/governance/AuditLogsPage";
import RolesPermissionsPage from "./pages/admin/governance/RolesPermissionsPage";
import SystemHealthPage from "./pages/admin/system/SystemHealthPage";
import SystemNotificationsPage from "./pages/admin/system/SystemNotificationsPage";
import IntegrationsPage from "./pages/admin/system/IntegrationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Nested admin routes mirror enterprise-style modules and submodules. */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/overview" replace />} />
        <Route path="overview" element={<OverviewPage />} />

        <Route path="operations">
          <Route
            index
            element={<Navigate to="/admin/operations/live-queue" replace />}
          />
          <Route path="live-queue" element={<LiveQueuePage />} />
          <Route path="service-control" element={<ServiceControlPage />} />
          <Route path="escalations" element={<EscalationsPage />} />
        </Route>

        <Route path="analytics">
          <Route
            index
            element={<Navigate to="/admin/analytics/performance" replace />}
          />
          <Route path="performance" element={<PerformanceAnalyticsPage />} />
          <Route path="demand-patterns" element={<DemandPatternsPage />} />
          <Route path="forecast" element={<ForecastPage />} />
        </Route>

        <Route path="support">
          <Route
            index
            element={<Navigate to="/admin/support/tickets" replace />}
          />
          <Route path="tickets" element={<SupportTicketsPage />} />
          <Route
            path="tickets/:ticketId"
            element={<SupportTicketDetailPage />}
          />
          <Route path="incidents" element={<IncidentLogsPage />} />
          <Route path="quality-control" element={<QualityControlPage />} />
        </Route>

        <Route path="governance">
          <Route
            index
            element={<Navigate to="/admin/governance/configuration" replace />}
          />
          <Route path="configuration" element={<ConfigurationPage />} />
          <Route path="audit-logs" element={<AuditLogsPage />} />
          <Route path="roles-permissions" element={<RolesPermissionsPage />} />
        </Route>

        <Route path="system">
          <Route
            index
            element={<Navigate to="/admin/system/health" replace />}
          />
          <Route path="health" element={<SystemHealthPage />} />
          <Route path="notifications" element={<SystemNotificationsPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
