const {http,app,server,io,express} = require('./socket_serve.js');
const Handles = require("./handles.js");
const port =5001;
const router = require('./router');
const cors = require("cors");
/*
middleware
 */
app.use(cors());
app.use(router);

const HANDELER=(on,message,handle,socket)=>({on,message,handle,socket});
/*
socket io handling:
all calls can go here... and maybe we can abstract this into a class than handles the logic?
*/
io.on("connection", (socket) => {
     const test = HANDELER("test",{message:"check server console"},Handles.handle_test,socket);
    console.log("Client connected");
     /*tester */
    socket.emit(test.on,test.message);
    socket.on(test.on,(data=>test.handle(data,test)));
    });
server.listen(port ,() => console.log(`Listening on port ${port}`));