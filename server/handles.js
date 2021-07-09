const {io} = require('./socket_serve.js');
const fs = require('fs');
const { Socket } = require('dgram');

console.log("handle test scripted called");
// handle functions
const handle_test = (data,ref)=>{
     console.log("handle data heard", data);
     ref.socket.emit(ref.on, {message2:"success - check server console"});
}
const returnObject = {
     handle_test
}
module.exports = returnObject;