// Mock system health + integrations metadata.

const systemState = {
  health: {
    queueEngine: { status: "Stable", latencyMs: 120 },
    database: { status: "Healthy", lastWrite: "2 mins ago" },
    websocket: { status: "Connected", clients: 146 },
  },
  status: {
    mode: "Operational",
    uptime: "99.98%",
    lastIncident: "Today, 09:20",
  },
  integrations: [
    { name: "Telebirr", status: "Planned" },
    { name: "SMS Gateway", status: "Active (Demo)" },
    { name: "Email Notifications", status: "Planned" },
  ],
};

module.exports = {
  systemState,
};
