const { systemState } = require("../data/systemData");

const getHealth = () => systemState.health;
const getStatus = () => systemState.status;
const getIntegrations = () => systemState.integrations;

module.exports = {
  getHealth,
  getStatus,
  getIntegrations,
};
