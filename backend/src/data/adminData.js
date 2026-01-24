// Governance configuration, roles, and permissions.

const adminState = {
  config: {
    fifoEnforced: true,
    notificationThreshold: "3 positions",
    queueSkipAllowed: false,
  },
  roles: ["Admin", "Supervisor", "Operations", "Support"],
  permissions: [
    "Queue Management",
    "Service Configuration",
    "Analytics Access",
    "Audit Logs",
    "Override Actions",
  ],
  accessMatrix: {
    Admin: [true, true, true, true, true],
    Supervisor: [true, true, true, true, false],
    Operations: [true, false, true, false, false],
    Support: [false, false, true, false, false],
  },
};

module.exports = {
  adminState,
};
