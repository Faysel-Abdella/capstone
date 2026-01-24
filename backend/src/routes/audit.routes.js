const express = require("express");
const auditController = require("../controllers/auditController");

const router = express.Router();

router.get("/logs", auditController.getLogs);
router.post("/logs", auditController.createLog);

module.exports = router;
