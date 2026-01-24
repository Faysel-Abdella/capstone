const isNonEmptyString = (value) => typeof value === "string" && value.trim();

const isValidQueueType = (type) => ["REMOTE", "WALK_IN"].includes(type);

const isValidTicketStatus = (status) =>
  ["Waiting", "Called", "Served", "No-Show"].includes(status);

const isValidSupportStatus = (status) =>
  ["Open", "In Progress", "Resolved"].includes(status);

module.exports = {
  isNonEmptyString,
  isValidQueueType,
  isValidTicketStatus,
  isValidSupportStatus,
};
