// In-memory queue dataset used for demo & academic evaluation.
// In production, this would be replaced by a durable database table.

const seedTickets = () => [
  {
    id: "T-2041",
    name: "Hanna Bekele",
    type: "REMOTE",
    service: "General Consultation",
    status: "Waiting",
    priority: "Standard",
    joinedAt: Date.now() - 1000 * 60 * 12,
    updatedAt: Date.now() - 1000 * 60 * 12,
  },
  {
    id: "T-2042",
    name: "Yonas Abate",
    type: "WALK_IN",
    service: "Document Review",
    status: "Waiting",
    priority: "Standard",
    joinedAt: Date.now() - 1000 * 60 * 9,
    updatedAt: Date.now() - 1000 * 60 * 9,
  },
  {
    id: "T-2043",
    name: "Mimi Tsegaye",
    type: "REMOTE",
    service: "Payments & Receipts",
    status: "Waiting",
    priority: "High",
    joinedAt: Date.now() - 1000 * 60 * 18,
    updatedAt: Date.now() - 1000 * 60 * 18,
  },
  {
    id: "T-2044",
    name: "Elias Zerihun",
    type: "WALK_IN",
    service: "Special Assistance",
    status: "Waiting",
    priority: "Standard",
    joinedAt: Date.now() - 1000 * 60 * 22,
    updatedAt: Date.now() - 1000 * 60 * 22,
  },
];

const queueState = {
  tickets: seedTickets(),
  lastNumericId: 2044,
};

const resetQueue = () => {
  queueState.tickets = seedTickets();
  queueState.lastNumericId = 2044;
};

module.exports = {
  queueState,
  resetQueue,
};
