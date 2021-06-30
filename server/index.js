const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require("cors");
const port =5001;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true
    }
  });
/*
middleware
 */
app.use(cors());
app.use(router);

const Socket_data_item=(on,message,responce)=>({on,message,responce});
const test = Socket_data_item("test","test heard",(data)=>{console.log(data)});
/*
socket io handling:
all calls can go here... and maybe we can abstract this into a class than handles the logic?
*/
io.on("connection", (socket) => {
    console.log("Client connected");
     /*tester */
    socket.emit(test.on,test.message);
    socket.on(test.on,test.responce);
    });
server.listen(port ,() => console.log(`Listening on port ${port}`));