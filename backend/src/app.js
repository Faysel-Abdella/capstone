const express = require("express");
const cors = require("cors");

const queueRoutes = require("./routes/queue.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const supportRoutes = require("./routes/support.routes");
const auditRoutes = require("./routes/audit.routes");
const systemRoutes = require("./routes/system.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

// REST is chosen for deterministic URL structures, caching potential,
// and clear mapping between UI actions and backend resources.
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message:
      "Werefa API (demo). Replace in-memory stores with a DB + auth in production.",
  });
});

app.use("/api/queue", queueRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/system", systemRoutes);
app.use("/api/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
