require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = process.env.PORT || 3001

const sequelize = require("./db/connection")

app.get('/', (req, res) => {
  res.send('<h1>Hangem Server</h1>');
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)
})

sequelize.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
})
