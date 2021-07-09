const http = require('http');
const socketio = require('socket.io');
const express = require('express');
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});


module.exports = {app,http,server,io,express};