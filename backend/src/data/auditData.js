// Audit log entries are appended for every major action.

const auditState = {
  logs: [
    {
      id: "log-1",
      action: "Queue resumed",
      actor: "Supervisor",
      time: "10:42 AM",
      result: "Success",
    },
    {
      id: "log-2",
      action: "Ticket served",
      actor: "Desk-02",
      time: "10:31 AM",
      result: "Success",
    },
    {
      id: "log-3",
      action: "Manual override request",
      actor: "Desk-01",
      time: "10:05 AM",
      result: "Denied",
    },
  ],
  lastNumericId: 3,
};

module.exports = {
  auditState,
};
