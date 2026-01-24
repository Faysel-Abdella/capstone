const { adminState } = require("../data/adminData");
const { auditState } = require("../data/auditData");

const getConfig = () => adminState.config;
const getRoles = () => adminState.roles;
const getPermissions = () => adminState.permissions;

const getAuditSummary = () => ({
  totalLogs: auditState.logs.length,
  lastAction: auditState.logs[0] || null,
});

module.exports = {
  getConfig,
  getRoles,
  getPermissions,
  getAuditSummary,
};
