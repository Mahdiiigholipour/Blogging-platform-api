const http = require("http");
const app = require("./src/app");
const { PORT } = require("./src/config");

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`server run on http://localhost:${PORT}`)
);
