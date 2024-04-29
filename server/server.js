require('dotenv').config()

const express = require('express');
const app = express();
const cors = require("cors")
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`)
})

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});