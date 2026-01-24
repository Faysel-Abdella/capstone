const express = require("express");
const queueController = require("../controllers/queueController");

const router = express.Router();

// Queue management endpoints map directly to Live Queue buttons.
router.get("/", queueController.getQueue);
router.post("/call-next", queueController.callNext);
router.post("/serve/:id", queueController.serveTicket);
router.post("/no-show/:id", queueController.markNoShow);
router.post("/reset", queueController.resetQueue);

module.exports = router;
