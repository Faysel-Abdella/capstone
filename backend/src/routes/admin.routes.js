const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/config", adminController.getConfig);
router.get("/roles", adminController.getRoles);
router.get("/permissions", adminController.getPermissions);
router.get("/audit-summary", adminController.getAuditSummary);

module.exports = router;
