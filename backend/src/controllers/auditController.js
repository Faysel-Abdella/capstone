const { listLogs, addLog } = require("../services/auditService");
const { isNonEmptyString } = require("../utils/validators");

const getLogs = (req, res) => {
  return res.status(200).json(listLogs());
};

const createLog = (req, res) => {
  const { action, actor, result } = req.body || {};
  if (![action, actor, result].every(isNonEmptyString)) {
    return res.status(400).json({
      message: "Invalid payload. Expected { action, actor, result }.",
    });
  }
  const entry = addLog({ action, actor, result });
  return res.status(201).json(entry);
};

module.exports = {
  getLogs,
  createLog,
};
