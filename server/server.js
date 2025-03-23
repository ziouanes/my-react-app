const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

let gameState = {
  squares: Array(9).fill(null),
  isXNext: true,
};

io.on("connection", (socket) => {
  socket.emit("update", gameState);

  socket.on("move", (data) => {
    gameState.squares = data.squares;
    gameState.isXNext = data.isXNext;
    io.emit("update", gameState);
  });

  socket.on("reset", () => {
    gameState = { squares: Array(9).fill(null), isXNext: true };
    io.emit("update", gameState);
  });
});

server.listen(3001, () => console.log("Server running on port 3001"));
