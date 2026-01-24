const { queueState, resetQueue } = require("../data/queueData");
const { analyticsState } = require("../data/analyticsData");
const { addLog } = require("./auditService");

const listQueue = () => queueState.tickets;

const createTicket = ({ name, type, service, priority = "Standard" }) => {
  queueState.lastNumericId += 1;
  const ticket = {
    id: `T-${queueState.lastNumericId}`,
    name,
    type,
    service,
    status: "Waiting",
    priority,
    joinedAt: Date.now(),
    updatedAt: Date.now(),
  };

  queueState.tickets.push(ticket);
  addLog({ action: "Ticket created", actor: "System", result: "Success" });
  return ticket;
};

const callNext = () => {
  const next = queueState.tickets.find((ticket) => ticket.status === "Waiting");
  if (!next) return null;

  next.status = "Called";
  next.updatedAt = Date.now();
  addLog({
    action: `Ticket ${next.id} called`,
    actor: "Desk-01",
    result: "Success",
  });
  return next;
};

const serveTicket = (id) => {
  const ticket = queueState.tickets.find((item) => item.id === id);
  if (!ticket) return { error: "Ticket not found" };

  if (!["Called", "Waiting"].includes(ticket.status)) {
    return { error: `Cannot serve ticket in status ${ticket.status}` };
  }

  ticket.status = "Served";
  ticket.updatedAt = Date.now();
  analyticsState.servedToday += 1;
  analyticsState.lastUpdated = Date.now();
  addLog({
    action: `Ticket ${ticket.id} served`,
    actor: "Desk-01",
    result: "Success",
  });
  return ticket;
};

const markNoShow = (id) => {
  const ticket = queueState.tickets.find((item) => item.id === id);
  if (!ticket) return { error: "Ticket not found" };

  if (!["Called", "Waiting"].includes(ticket.status)) {
    return { error: `Cannot mark no-show for status ${ticket.status}` };
  }

  ticket.status = "No-Show";
  ticket.updatedAt = Date.now();
  analyticsState.noShowsToday += 1;
  analyticsState.lastUpdated = Date.now();
  addLog({
    action: `Ticket ${ticket.id} no-show`,
    actor: "Desk-01",
    result: "Recorded",
  });
  return ticket;
};

const resetQueueState = () => {
  resetQueue();
  addLog({ action: "Queue reset", actor: "Admin", result: "Demo reset" });
  return queueState.tickets;
};

module.exports = {
  listQueue,
  createTicket,
  callNext,
  serveTicket,
  markNoShow,
  resetQueueState,
};
