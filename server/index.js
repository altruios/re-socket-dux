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

for(const name_space of Handles.name_spaces){
    io.of(name_space).on("connection",socket=>{
        Handles.connect_socket(name_space,socket);
        Handles.listen(name_space);
        console.log("name_space connection to:",name_space," established");
    })
}



server.listen(port ,() => console.log(`Listening on port ${port}`));