const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.port || 3000;

var server = http.createServer(app);
var io = require("socket.io")(server, { cors: { origin: "*" } });

//middlewre
app.use(express.json());
app.use(cors());

io.on("Connection", (socket) => {
  console.log("connected");
});

server.listen(port, () => {
  console.log("server started");
});
