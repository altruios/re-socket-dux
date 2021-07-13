//require the server_handler.
const Server_handle = require("../server_handle");

//define handles here:
const action_test = new Server_handle("test3","/",(data)=>{
     //or db call or whatever
     const make_some_data = "just a raw string responce for test 3 - arbitray functions can run";
     console.log("second test worked,data",data);
     return make_some_data;
     
})

//export the action
module.exports = action_test;

