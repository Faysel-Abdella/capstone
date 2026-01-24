const { supportState } = require("../data/supportData");
const { analyticsState } = require("../data/analyticsData");
const { addLog } = require("./auditService");

const listTickets = () => supportState.tickets;

const createTicket = ({ type, reporter, priority, description }) => {
  supportState.lastNumericId += 1;
  const ticket = {
    id: `SUP-${supportState.lastNumericId}`,
    type,
    reporter,
    priority,
    status: "Open",
    createdAt: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    description,
  };
  supportState.tickets.unshift(ticket);
  addLog({
    action: `Support ticket ${ticket.id} created`,
    actor: reporter,
    result: "Open",
  });
  return ticket;
};

const getTicketById = (id) =>
  supportState.tickets.find((ticket) => ticket.id === id);

const updateTicketStatus = (id, status) => {
  const ticket = getTicketById(id);
  if (!ticket) return { error: "Ticket not found" };

  ticket.status = status;
  if (status === "Resolved") {
    analyticsState.resolvedTickets += 1;
  }
  analyticsState.lastUpdated = Date.now();
  addLog({
    action: `Support ticket ${ticket.id} status`,
    actor: "Support",
    result: status,
  });
  return ticket;
};

const listIncidents = () => supportState.incidents;

module.exports = {
  listTickets,
  createTicket,
  getTicketById,
  updateTicketStatus,
  listIncidents,
};
