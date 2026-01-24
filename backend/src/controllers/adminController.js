const adminService = require("../services/adminService");

const getConfig = (req, res) => {
  return res.status(200).json(adminService.getConfig());
};

const getRoles = (req, res) => {
  return res.status(200).json(adminService.getRoles());
};

const getPermissions = (req, res) => {
  return res.status(200).json(adminService.getPermissions());
};

const getAuditSummary = (req, res) => {
  return res.status(200).json(adminService.getAuditSummary());
};

module.exports = {
  getConfig,
  getRoles,
  getPermissions,
  getAuditSummary,
};
