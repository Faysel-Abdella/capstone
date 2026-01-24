const express = require("express");
const systemController = require("../controllers/systemController");

const router = express.Router();

router.get("/health", systemController.getHealth);
router.get("/status", systemController.getStatus);
router.get("/integrations", systemController.getIntegrations);

module.exports = router;
