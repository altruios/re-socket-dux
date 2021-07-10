//require the server_handler.
const Server_handle = require("../server_handle");

//define handles here:
const action_test = new Server_handle("test",(data)=>{
     console.log("handle data heard", data);
     //or db call or whatever
     const make_some_data = {
          message2:"succes: check server console"
     }
     return make_some_data;
})

//export the action
module.exports = action_test;

