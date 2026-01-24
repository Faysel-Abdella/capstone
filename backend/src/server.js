const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Werefa API running on port ${PORT}`);
});
