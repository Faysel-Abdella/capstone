const systemService = require("../services/systemService");

const getHealth = (req, res) => {
  return res.status(200).json(systemService.getHealth());
};

const getStatus = (req, res) => {
  return res.status(200).json(systemService.getStatus());
};

const getIntegrations = (req, res) => {
  return res.status(200).json(systemService.getIntegrations());
};

module.exports = {
  getHealth,
  getStatus,
  getIntegrations,
};
