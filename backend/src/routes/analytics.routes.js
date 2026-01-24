const express = require("express");
const analyticsController = require("../controllers/analyticsController");

const router = express.Router();

router.get("/overview", analyticsController.getOverview);
router.get("/performance", analyticsController.getPerformance);
router.get("/demand", analyticsController.getDemand);
router.get("/forecast", analyticsController.getForecast);

module.exports = router;
