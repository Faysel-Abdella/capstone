const { auditState } = require("../data/auditData");

const listLogs = () => auditState.logs;

const addLog = ({ action, actor, result }) => {
  auditState.lastNumericId += 1;
  const entry = {
    id: `log-${auditState.lastNumericId}`,
    action,
    actor,
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    result,
  };

  auditState.logs.unshift(entry);
  return entry;
};

module.exports = {
  listLogs,
  addLog,
};
