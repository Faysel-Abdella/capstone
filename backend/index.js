const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  },
});

const queue = [];
let nextId = 1;

const emitQueueUpdate = () => {
  io.emit("queue:update", queue);
};

app.post("/join-queue", (req, res) => {
  const { name, type } = req.body || {};

  if (!name || (type !== "REMOTE" && type !== "WALK_IN")) {
    return res.status(400).json({
      error:
        "Invalid payload. Expected { name: string, type: 'REMOTE' | 'WALK_IN' }.",
    });
  }

  const ticket = {
    id: nextId++,
    name,
    type,
    joinedAt: Date.now(),
  };

  queue.push(ticket);
  emitQueueUpdate();

  return res.status(201).json(ticket);
});

app.post("/call-next", (req, res) => {
  const next = queue.shift() || null;
  emitQueueUpdate();
  return res.status(200).json({ called: next });
});

app.get("/queue", (req, res) => {
  return res.status(200).json(queue);
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
  socket.emit("queue:update", queue);

  socket.on("disconnect", () => {});
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
