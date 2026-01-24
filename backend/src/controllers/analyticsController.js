const analyticsService = require("../services/analyticsService");

const getOverview = (req, res) => {
  // Maps to dashboard KPIs + overview cards.
  return res.status(200).json(analyticsService.overview());
};

const getPerformance = (req, res) => {
  return res.status(200).json(analyticsService.performance());
};

const getDemand = (req, res) => {
  return res.status(200).json(analyticsService.demand());
};

const getForecast = (req, res) => {
  return res.status(200).json(analyticsService.forecast());
};

module.exports = {
  getOverview,
  getPerformance,
  getDemand,
  getForecast,
};
