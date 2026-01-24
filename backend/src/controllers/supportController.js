const supportService = require("../services/supportService");
const {
  isNonEmptyString,
  isValidSupportStatus,
} = require("../utils/validators");

const listTickets = (req, res) => {
  return res.status(200).json(supportService.listTickets());
};

const createTicket = (req, res) => {
  const { type, reporter, priority, description } = req.body || {};

  if (![type, reporter, priority, description].every(isNonEmptyString)) {
    return res.status(400).json({
      message:
        "Invalid payload. Expected { type, reporter, priority, description }.",
    });
  }

  const ticket = supportService.createTicket({
    type,
    reporter,
    priority,
    description,
  });
  return res.status(201).json(ticket);
};

const getTicketById = (req, res) => {
  const { id } = req.params;
  const ticket = supportService.getTicketById(id);
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  return res.status(200).json(ticket);
};

const updateTicketStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body || {};

  if (!isValidSupportStatus(status)) {
    return res.status(400).json({
      message: "Invalid status. Use Open | In Progress | Resolved.",
    });
  }

  const result = supportService.updateTicketStatus(id, status);
  if (result?.error) {
    return res.status(404).json({ message: result.error });
  }
  return res.status(200).json(result);
};

const listIncidents = (req, res) => {
  return res.status(200).json(supportService.listIncidents());
};

module.exports = {
  listTickets,
  createTicket,
  getTicketById,
  updateTicketStatus,
  listIncidents,
};
