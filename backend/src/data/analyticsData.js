// Analytics counters used to simulate production-grade metrics.

const analyticsState = {
  servedToday: 168,
  noShowsToday: 7,
  averageServiceMinutes: 11.8,
  resolvedTickets: 12,
  lastUpdated: Date.now(),
};

module.exports = {
  analyticsState,
};
