const {app,server,io} = require('./socket_serve.js');
const Handles = require("./handles.js");
const port =5001;
const router = require('./router');
const cors = require("cors");
/*
middleware
 */
app.use(cors());
app.use(router);
/*
socket io handling:
all calls can go here... and maybe we can abstract this into a class than handles the logic?
*/
io.on("connection", (socket) => {
     Handles.connect_socket(socket);
     Handles.listen_all();
     console.log("connected!");
     /*tester */
    });
server.listen(port ,() => console.log(`Listening on port ${port}`));