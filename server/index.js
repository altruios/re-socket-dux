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

const HANDELER=(on,message,handle)=>({on,message,handle});
const test = HANDELER("test",{test:"the test was heard"},(data)=>Handles.handle_test(data));
/*
socket io handling:
all calls can go here... and maybe we can abstract this into a class than handles the logic?
*/
io.on("connection", (socket) => {
    console.log("Client connected");
     /*tester */
    socket.emit(test.on,test.message);
    socket.on(test.on,test.handle);
    });
server.listen(port ,() => console.log(`Listening on port ${port}`));