// In-memory support tickets and incidents for demo use.

const supportState = {
  tickets: [
    {
      id: "SUP-221",
      type: "Delay",
      reporter: "Customer Desk",
      priority: "High",
      status: "Open",
      createdAt: "10:32 AM",
      description:
        "Customer reported extended wait time beyond SLA during peak hours.",
    },
    {
      id: "SUP-222",
      type: "No-show",
      reporter: "Queue Manager",
      priority: "Medium",
      status: "In Progress",
      createdAt: "09:55 AM",
      description: "Multiple no-shows reported for remote entry type.",
    },
    {
      id: "SUP-223",
      type: "System",
      reporter: "IT Support",
      priority: "Low",
      status: "Resolved",
      createdAt: "Yesterday",
      description: "Temporary kiosk disconnect resolved by network reset.",
    },
  ],
  incidents: [
    {
      id: "INC-71",
      impact: "Medium",
      summary: "Queue engine latency spike",
      status: "Resolved",
      resolvedAt: "Today, 09:20",
    },
    {
      id: "INC-72",
      impact: "High",
      summary: "WebSocket disconnect in kiosk mode",
      status: "Monitoring",
      resolvedAt: "Today, 10:05",
    },
    {
      id: "INC-73",
      impact: "Low",
      summary: "Delayed SMS notifications",
      status: "Open",
      resolvedAt: "Pending",
    },
  ],
  lastNumericId: 223,
};

module.exports = {
  supportState,
};
