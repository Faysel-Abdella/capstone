const express = require("express");
const supportController = require("../controllers/supportController");

const router = express.Router();

router.get("/tickets", supportController.listTickets);
router.post("/tickets", supportController.createTicket);
router.get("/tickets/:id", supportController.getTicketById);
router.patch("/tickets/:id/status", supportController.updateTicketStatus);
router.get("/incidents", supportController.listIncidents);

module.exports = router;
