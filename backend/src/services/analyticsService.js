const { analyticsState } = require("../data/analyticsData");
const { queueState } = require("../data/queueData");
const { supportState } = require("../data/supportData");

const computeNoShowRate = () => {
  const total = analyticsState.servedToday + analyticsState.noShowsToday;
  if (!total) return 0;
  return Math.round((analyticsState.noShowsToday / total) * 1000) / 10;
};

const computeSystemLoad = () => {
  const waiting = queueState.tickets.filter(
    (ticket) => ticket.status === "Waiting",
  ).length;
  return Math.min(95, 55 + waiting * 3);
};

const overview = () => ({
  activeQueue: queueState.tickets.filter(
    (ticket) => ticket.status === "Waiting",
  ).length,
  avgServiceTime: analyticsState.averageServiceMinutes,
  servedToday: analyticsState.servedToday,
  noShowRate: computeNoShowRate(),
  systemLoad: computeSystemLoad(),
  resolvedTickets: analyticsState.resolvedTickets,
  lastUpdated: analyticsState.lastUpdated,
});

const performance = () => ({
  serviceDuration: [
    { name: "Consultation", value: 12 },
    { name: "Documents", value: 8 },
    { name: "Payments", value: 6 },
    { name: "Special", value: 15 },
  ],
  throughput: [
    { time: "08:00", value: 9 },
    { time: "10:00", value: 18 },
    { time: "12:00", value: 22 },
    { time: "14:00", value: 25 },
    { time: "16:00", value: 17 },
  ],
  abandonment: [
    { week: "W1", value: 5 },
    { week: "W2", value: 4 },
    { week: "W3", value: 6 },
    { week: "W4", value: 3 },
  ],
});

const demand = () => ({
  hours: ["08", "10", "12", "14", "16", "18"],
  days: [
    { day: "Mon", values: [2, 3, 4, 5, 3, 2] },
    { day: "Tue", values: [3, 4, 5, 6, 4, 2] },
    { day: "Wed", values: [2, 3, 5, 5, 3, 2] },
    { day: "Thu", values: [3, 4, 6, 6, 5, 3] },
    { day: "Fri", values: [2, 4, 6, 5, 4, 3] },
    { day: "Sat", values: [1, 2, 3, 3, 2, 1] },
  ],
});

const forecast = () => ({
  projectedPeak: "11:00 – 13:30",
  staffingSuggestion: "+2 Service Desks",
  confidence: 74,
  notes: "Model calibrated on 30-day synthetic data",
});

const supportSummary = () => ({
  openTickets: supportState.tickets.filter((ticket) => ticket.status === "Open")
    .length,
  inProgressTickets: supportState.tickets.filter(
    (ticket) => ticket.status === "In Progress",
  ).length,
  resolvedTickets: supportState.tickets.filter(
    (ticket) => ticket.status === "Resolved",
  ).length,
});

module.exports = {
  overview,
  performance,
  demand,
  forecast,
  supportSummary,
};
