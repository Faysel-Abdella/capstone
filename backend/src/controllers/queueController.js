const queueService = require("../services/queueService");

// REST is used here for predictable, cacheable, and testable endpoints
// that map cleanly to UI buttons in the admin console.

const getQueue = (req, res) => {
  return res.status(200).json(queueService.listQueue());
};

const callNext = (req, res) => {
  const next = queueService.callNext();
  if (!next) {
    return res.status(404).json({ message: "No waiting tickets found." });
  }
  return res.status(200).json({ called: next });
};

const serveTicket = (req, res) => {
  const { id } = req.params;
  const result = queueService.serveTicket(id);
  if (result?.error) {
    return res.status(result.error.includes("not found") ? 404 : 409).json({
      message: result.error,
    });
  }
  return res.status(200).json(result);
};

const markNoShow = (req, res) => {
  const { id } = req.params;
  const result = queueService.markNoShow(id);
  if (result?.error) {
    return res.status(result.error.includes("not found") ? 404 : 409).json({
      message: result.error,
    });
  }
  return res.status(200).json(result);
};

const resetQueue = (req, res) => {
  // Demo-only endpoint for showcasing reset in the UI.
  const queue = queueService.resetQueueState();
  return res.status(200).json({ queue });
};

module.exports = {
  getQueue,
  callNext,
  serveTicket,
  markNoShow,
  resetQueue,
};
